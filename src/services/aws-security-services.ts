// src/services/aws-security-service.ts
import { 
    ListWebACLsCommand, 
    GetWebACLCommand 
  } from "@aws-sdk/client-wafv2";
  import { 
    ListFindingsCommand, 
    GetFindingsCommand 
  } from "@aws-sdk/client-guardduty";
  import { 
    LookupEventsCommand 
  } from "@aws-sdk/client-cloudtrail";
  import { 
    wafClient, 
    guardDutyClient, 
    cloudTrailClient 
  } from "@/config/aws-config";
  
  export interface SecurityInsight {
    type: 'WAF' | 'GuardDuty' | 'CloudTrail';
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    title: string;
    description: string;
    timestamp: string;
  }
  
  export async function getWAFWebACLs() {
    try {
      const command = new ListWebACLsCommand({
        Scope: 'REGIONAL'
      });
      const response = await wafClient.send(command);
      return response.WebACLs || [];
    } catch (error) {
      console.error('Error retrieving WAF Web ACLs:', error);
      return [];
    }
  }
  
  export async function getGuardDutyFindings(detectorId: string) {
    try {
      const listCommand = new ListFindingsCommand({
        DetectorId: detectorId,
        FindingCriteria: {
          Criterion: {
            'severity': { Gte: 7 } // High severity findings
          }
        }
      });
      const listResponse = await guardDutyClient.send(listCommand);
      
      if (listResponse.FindingIds && listResponse.FindingIds.length > 0) {
        const getCommand = new GetFindingsCommand({
          DetectorId: detectorId,
          FindingIds: listResponse.FindingIds
        });
        const getResponse = await guardDutyClient.send(getCommand);
        return getResponse.Findings || [];
      }
      return [];
    } catch (error) {
      console.error('Error retrieving GuardDuty findings:', error);
      return [];
    }
  }
  
  export async function getCloudTrailEvents(lookbackHours = 24) {
    try {
      const startTime = new Date();
      startTime.setHours(startTime.getHours() - lookbackHours);
  
      const command = new LookupEventsCommand({
        StartTime: startTime,
        EndTime: new Date(),
        MaxResults: 50
      });
  
      const response = await cloudTrailClient.send(command);
      return response.Events || [];
    } catch (error) {
      console.error('Error retrieving CloudTrail events:', error);
      return [];
    }
  }
  
  export async function getSecurityInsights() {
    try {
      const [wafWebACLs, guardDutyFindings, cloudTrailEvents] = await Promise.all([
        getWAFWebACLs(),
        getGuardDutyFindings(process.env.NEXT_PUBLIC_GUARDDUTY_DETECTOR_ID || ''),
        getCloudTrailEvents()
      ]);
  
      return {
        wafWebACLs,
        guardDutyFindings,
        cloudTrailEvents
      };
    } catch (error) {
      console.error('Error retrieving security insights:', error);
      return {
        wafWebACLs: [],
        guardDutyFindings: [],
        cloudTrailEvents: []
      };
    }
  }
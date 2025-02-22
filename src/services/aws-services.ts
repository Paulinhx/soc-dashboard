// src/services/aws-services.ts
import { GuardDutyClient, ListFindingsCommand } from "@aws-sdk/client-guardduty";
import { SecurityHubClient, GetFindingsCommand } from "@aws-sdk/client-securityhub";
import { awsConfig } from '../config/aws-config';

export class AWSSecurityService {
  private guardDutyClient: GuardDutyClient;
  private securityHubClient: SecurityHubClient;

  constructor() {
    this.guardDutyClient = new GuardDutyClient({ region: awsConfig.aws_guardduty_region });
    this.securityHubClient = new SecurityHubClient({ region: awsConfig.aws_securityhub_region });
  }

  async getGuardDutyFindings() {
    try {
      const command = new ListFindingsCommand({
        DetectorId: process.env.NEXT_PUBLIC_GUARDDUTY_DETECTOR_ID,
        MaxResults: 10,
      });
      const response = await this.guardDutyClient.send(command);
      return { success: true, findings: response.FindingIds };
    } catch (error) {
      console.error('Error getting GuardDuty findings:', error);
      return { success: false, error };
    }
  }

  async getSecurityHubFindings() {
    try {
      const command = new GetFindingsCommand({
        MaxResults: 10,
      });
      const response = await this.securityHubClient.send(command);
      return { success: true, findings: response.Findings };
    } catch (error) {
      console.error('Error getting SecurityHub findings:', error);
      return { success: false, error };
    }
  }

  async getAllSecurityFindings() {
    const [guardDutyFindings, securityHubFindings] = await Promise.all([
      this.getGuardDutyFindings(),
      this.getSecurityHubFindings()
    ]);

    return {
      guardDuty: guardDutyFindings,
      securityHub: securityHubFindings
    };
  }
}
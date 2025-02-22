// src/services/dynamodb-service.ts
import { dynamoDBClient } from '@/config/aws-config';
import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

export async function createSecurityEvent(event: any) {
  const params = {
    TableName: process.env.NEXT_PUBLIC_DYNAMODB_TABLE,
    Item: event
  };

  try {
    await dynamoDBClient.send(new PutCommand(params));
    console.log('Security event stored successfully');
  } catch (error) {
    console.error('Error storing security event:', error);
  }
}

export async function getSecurityEvents() {
  const params = {
    TableName: process.env.NEXT_PUBLIC_DYNAMODB_TABLE,
    // Add your query parameters
  };

  try {
    const { Items } = await dynamoDBClient.send(new QueryCommand(params));
    return Items || [];
  } catch (error) {
    console.error('Error fetching security events:', error);
    return [];
  }
}
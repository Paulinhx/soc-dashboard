// src/config/aws-config.ts
import { GuardDutyClient } from "@aws-sdk/client-guardduty";
import { CloudTrailClient } from "@aws-sdk/client-cloudtrail";

const baseConfig = {
  region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || ''
  }
};

export const guardDutyClient = new GuardDutyClient(baseConfig);
export const cloudTrailClient = new CloudTrailClient(baseConfig);

// Amplify Configuration
export const amplifyConfig = {
  Auth: {
    region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    mandatorySignIn: true,
    authenticationFlowType: 'USER_SRP_AUTH'
  }
};
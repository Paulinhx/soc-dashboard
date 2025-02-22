import { WAFv2Client } from "@aws-sdk/client-wafv2";
import { GuardDutyClient } from "@aws-sdk/client-guardduty";
import { CloudTrailClient } from "@aws-sdk/client-cloudtrail";

// AWS Clients Configuration
export const wafClient = new WAFv2Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || ''
  }
});

export const guardDutyClient = new GuardDutyClient({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || ''
  }
});

export const cloudTrailClient = new CloudTrailClient({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || ''
  }
});

// AWS Configuration Object
export const awsConfig = {
  Auth: {
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    mandatorySignIn: true,
    authenticationFlowType: 'USER_SRP_AUTH'
  },
  aws_guardduty_region: process.env.NEXT_PUBLIC_AWS_REGION,
  aws_securityhub_region: process.env.NEXT_PUBLIC_AWS_REGION
};

// Configuration helper function
export const configureAWS = () => {
  console.log('AWS configured for region:', process.env.NEXT_PUBLIC_AWS_REGION);
  // Any additional AWS configuration logic
};
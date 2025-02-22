// src/config/aws-config.ts
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
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Configure AWS credentials
const client = new DynamoDBClient({
  region: process.env.NEXT_PUBLIC_AWS_REGION, // Use NEXT_PUBLIC_ for client-side access
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || ''
  }
});

// Create the DynamoDB Document Client
export const dynamoDBClient = DynamoDBDocumentClient.from(client);

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
// src/services/auth-service.ts
import { 
  CognitoIdentityProviderClient, 
  InitiateAuthCommand 
} from "@aws-sdk/client-cognito-identity-provider";

const client = new CognitoIdentityProviderClient({ 
  region: process.env.NEXT_PUBLIC_AWS_REGION 
});

export async function signIn(username: string, password: string) {
  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password
    }
  };

  try {
    const command = new InitiateAuthCommand(params);
    const response = await client.send(command);
    return response.AuthenticationResult;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
}
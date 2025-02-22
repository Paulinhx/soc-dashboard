// src/services/auth.ts
import { Auth } from 'aws-amplify';

export const AuthService = {
  async signIn(username: string, password: string) {
    try {
      const user = await Auth.signIn(username, password);
      return { success: true, user };
    } catch (error) {
      console.error('Error signing in:', error);
      return { success: false, error };
    }
  },

  async signOut() {
    try {
      await Auth.signOut();
      return { success: true };
    } catch (error) {
      console.error('Error signing out:', error);
      return { success: false, error };
    }
  },

  async getCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return { success: true, user };
    } catch (error) {
      console.error('Error getting current user:', error);
      return { success: false, error };
    }
  },

  async getSession() {
    try {
      const session = await Auth.currentSession();
      return { success: true, session };
    } catch (error) {
      console.error('Error getting session:', error);
      return { success: false, error };
    }
  }
};
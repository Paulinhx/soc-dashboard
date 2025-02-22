'use client';

import { useEffect, useState } from 'react';
import { AuthService } from '@/services/auth-services';
import Login from './Login';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { success } = await AuthService.getCurrentUser();
    setIsAuthenticated(success);
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Login />;
}

'use client';

import { Amplify } from 'aws-amplify';
import { amplifyConfig, initializeAWS } from '@/config/aws-config';
import { useEffect } from 'react';

// Initialize AWS configuration
if (typeof window !== 'undefined') {
  Amplify.configure(amplifyConfig);
  initializeAWS();
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Any client-side initialization that needs to run on mount
    console.log('Client layout mounted');
  }, []);

  return <>{children}</>;
}
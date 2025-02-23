// src/app/page.tsx
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
  return (
    <ErrorBoundary>
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    </ErrorBoundary>
  );
}

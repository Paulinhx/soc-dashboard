'use client';

import React from 'react';
import { 
  Bell, 
  Shield, 
  Activity, 
  Settings, 
  Menu,
  AlertTriangle,
  Clock,
  UserX,
  Wifi,
  Server
} from 'lucide-react';
import SecurityEvents from './SecurityEvents';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-indigo-900 text-white transition-all duration-300`}>
        <div className="p-4 flex justify-between items-center">
          <h2 className={`font-bold ${sidebarOpen ? 'block' : 'hidden'}`}>Security Center</h2>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="p-2 hover:bg-indigo-800 rounded"
          >
            <Menu size={20} />
          </button>
        </div>
        
        <nav className="mt-8 space-y-2">
          <NavItem icon={<Activity />} text="Overview" active={true} expanded={sidebarOpen} />
          <NavItem icon={<Bell />} text="Alerts" expanded={sidebarOpen} />
          <NavItem icon={<Shield />} text="Security" expanded={sidebarOpen} />
          <NavItem icon={<Settings />} text="Settings" expanded={sidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4 border-b border-slate-200">
          <h1 className="text-2xl font-semibold text-indigo-900">Security Monitoring Dashboard</h1>
        </header>

        <main className="p-6">
          {/* Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <MetricCard 
              title="High Priority Alerts" 
              value="5" 
              icon={<AlertTriangle className="text-red-500 h-8 w-8" />}
              color="bg-red-50" 
              borderColor="border-red-100"
            />
            <MetricCard 
              title="Open Incidents" 
              value="12" 
              icon={<Activity className="text-amber-500 h-8 w-8" />}
              color="bg-amber-50"
              borderColor="border-amber-100"
            />
            <MetricCard 
              title="Active Systems" 
              value="86" 
              icon={<Shield className="text-emerald-500 h-8 w-8" />}
              color="bg-emerald-50"
              borderColor="border-emerald-100"
            />
          </div>

          {/* Security Events */}
          <SecurityEvents />
        </main>
      </div>
    </div>
  );
};

// Helper Components
const NavItem = ({ icon, text, active = false, expanded = true }) => (
  <a
    href="#"
    className={`
      flex items-center p-4 
      ${active ? 'bg-indigo-800' : 'hover:bg-indigo-800'} 
      transition-colors rounded-lg mx-2
    `}
  >
    <span className="mr-3">{icon}</span>
    {expanded && <span>{text}</span>}
  </a>
);

const MetricCard = ({ title, value, icon, color, borderColor }) => (
  <div className={`rounded-lg shadow-sm border ${borderColor} ${color} p-6`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-600 font-medium">{title}</p>
        <p className="text-3xl font-bold text-slate-900 mt-1">{value}</p>
      </div>
      {icon}
    </div>
  </div>
);

export default DashboardLayout;
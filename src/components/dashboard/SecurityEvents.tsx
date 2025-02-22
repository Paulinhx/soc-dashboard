'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  UserCheck,
  Lock,
  Server,
  Wifi,
  AlertCircle,
  Search,
  Filter
} from 'lucide-react';

interface SecurityEvent {
  id: string;
  type: 'alert' | 'auth' | 'system' | 'network';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  timestamp: string;
  source: string;
}

const SecurityEvents = () => {
  const [events, setEvents] = useState<SecurityEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    severity: [] as string[],
    type: [] as string[],
    source: [] as string[]
  });
  const [showFilters, setShowFilters] = useState(false);

  // Simulated WebSocket connection (replace with real WebSocket implementation)
  useEffect(() => {
    const mockEvents: SecurityEvent[] = [
      {
        id: '1',
        type: 'alert',
        severity: 'critical',
        title: 'Unauthorized Access Attempt',
        description: 'Multiple failed login attempts detected from IP 192.168.1.100',
        timestamp: new Date().toLocaleTimeString(),
        source: 'AWS WAF'
      },
      {
        id: '2',
        type: 'network',
        severity: 'high',
        title: 'Suspicious Network Traffic',
        description: 'Unusual outbound traffic pattern detected on production server',
        timestamp: new Date().toLocaleTimeString(),
        source: 'AWS GuardDuty'
      },
      {
        id: '3',
        type: 'system',
        severity: 'medium',
        title: 'System Configuration Change',
        description: 'Security group configuration modified in production environment',
        timestamp: new Date().toLocaleTimeString(),
        source: 'AWS CloudTrail'
      }
    ];

    setEvents(mockEvents);
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      const newEvent: SecurityEvent = {
        id: Date.now().toString(),
        type: ['alert', 'auth', 'system', 'network'][Math.floor(Math.random() * 4)] as any,
        severity: ['critical', 'high', 'medium', 'low'][Math.floor(Math.random() * 4)] as any,
        title: 'New Security Alert',
        description: 'Real-time security event detected',
        timestamp: new Date().toLocaleTimeString(),
        source: ['AWS WAF', 'AWS GuardDuty', 'AWS CloudTrail'][Math.floor(Math.random() * 3)]
      };
      setEvents(prev => [newEvent, ...prev].slice(0, 10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeverity = filters.severity.length === 0 || filters.severity.includes(event.severity);
    const matchesType = filters.type.length === 0 || filters.type.includes(event.type);
    const matchesSource = filters.source.length === 0 || filters.source.includes(event.source);

    return matchesSearch && matchesSeverity && matchesType && matchesSource;
  });

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="text-red-500" />;
      case 'auth':
        return <UserCheck className="text-blue-500" />;
      case 'system':
        return <Server className="text-purple-500" />;
      case 'network':
        return <Wifi className="text-green-500" />;
      default:
        return <AlertCircle className="text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200">
      <div className="p-4 border-b border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-slate-900">Security Events</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-md hover:bg-indigo-100 flex items-center"
            >
              <Filter className="w-4 h-4 mr-1" />
              Filters
            </button>
            <button 
              onClick={() => setEvents([])}
              className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="flex items-center bg-slate-50 rounded-md px-3 py-2">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search security events..."
            className="ml-2 flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-900 placeholder-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {showFilters && (
          <div className="mt-4 p-4 bg-slate-50 rounded-md">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-2">Severity</h3>
                <div className="flex flex-wrap gap-2">
                  {['critical', 'high', 'medium', 'low'].map(severity => (
                    <button
                      key={severity}
                      onClick={() => toggleFilter('severity', severity)}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        filters.severity.includes(severity)
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-slate-700 border border-slate-300'
                      }`}
                    >
                      {severity.charAt(0).toUpperCase() + severity.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-2">Type</h3>
                <div className="flex flex-wrap gap-2">
                  {['alert', 'auth', 'system', 'network'].map(type => (
                    <button
                      key={type}
                      onClick={() => toggleFilter('type', type)}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        filters.type.includes(type)
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-slate-700 border border-slate-300'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="divide-y divide-slate-200">
        {loading ? (
          <div className="p-4 text-center text-slate-500">Loading events...</div>
        ) : filteredEvents.length === 0 ? (
          <div className="p-4 text-center text-slate-500">No security events found</div>
        ) : (
          filteredEvents.map((event) => (
            <div key={event.id} className="p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getEventIcon(event.type)}
                  <div>
                    <h3 className="font-medium text-slate-900">{event.title}</h3>
                    <p className="text-sm text-slate-600">{event.description}</p>
                    <p className="text-xs text-slate-500 mt-1">Source: {event.source}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(event.severity)}`}>
                    {event.severity.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500">{event.timestamp}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t border-slate-200 flex justify-between items-center">
        <span className="text-sm text-slate-500">
          Showing {filteredEvents.length} of {events.length} events
        </span>
        <button className="text-sm text-indigo-600 hover:text-indigo-700">
          Load More
        </button>
      </div>
    </div>
  );
};

export default SecurityEvents;
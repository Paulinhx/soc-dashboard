const express = require('express');
const http = require('http');
const { WebSocket, WebSocketServer } = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Mock security events
const generateSecurityEvent = () => ({
  id: Date.now().toString(),
  type: ['alert', 'auth', 'system', 'network'][Math.floor(Math.random() * 4)],
  severity: ['critical', 'high', 'medium', 'low'][Math.floor(Math.random() * 4)],
  title: 'New Security Alert',
  description: 'Security event detected in system',
  timestamp: new Date().toISOString(),
  source: ['AWS WAF', 'AWS GuardDuty', 'AWS CloudTrail'][Math.floor(Math.random() * 3)]
});

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send initial mock data
  const initialEvents = Array(5).fill().map(generateSecurityEvent);
  ws.send(JSON.stringify({ type: 'initial-events', data: initialEvents }));

  // Send new event every 5 seconds
  const interval = setInterval(() => {
    const newEvent = generateSecurityEvent();
    ws.send(JSON.stringify({ type: 'new-security-event', data: newEvent }));
  }, 5000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
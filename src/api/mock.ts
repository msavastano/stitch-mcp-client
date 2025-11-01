import { Server, Tool } from '../types';

const tools: Tool[] = [
  { id: '1', name: 'Performance Monitor', description: 'Real-time system performance and resource usage monitoring.', status: 'Selected', icon: 'monitoring' },
  { id: '2', name: 'Security Scanner', description: 'Scans for vulnerabilities and security misconfigurations.', status: 'Update Available', icon: 'security' },
  { id: '3', name: 'Automated Backup', description: 'Schedules and manages automated server data backups.', status: 'Not Selected', icon: 'backup' },
  { id: '4', name: 'Log Analyzer', description: 'Collects, parses, and visualizes server and application logs.', status: 'Selected', icon: 'analytics' },
  { id: '5', name: 'Firewall Manager', description: 'Provides an interface for configuring server firewall rules.', status: 'Error', icon: 'shield' },
];

const servers: Server[] = [
  {
    id: '1',
    name: 'Production-API-01',
    ipAddress: '192.168.1.100',
    status: 'Online',
    uptime: '48 days',
    cpuUsage: '15%',
    memoryUsage: '30%',
    lastActivity: '2 minutes ago',
    hostname: 'prod-api-01.mcp.internal',
    os: 'Ubuntu 22.04 LTS',
    tools: tools,
  },
  {
    id: '2',
    name: 'Staging-Server',
    ipAddress: '192.168.1.102',
    status: 'Offline',
    uptime: '0 days',
    cpuUsage: '0%',
    memoryUsage: '0%',
    lastActivity: '1 day ago',
    hostname: 'staging.mcp.internal',
    os: 'Ubuntu 22.04 LTS',
    tools: tools.map(tool => ({ ...tool, status: 'Not Selected' })),
  },
  {
    id: '3',
    name: 'Dev-Environment',
    ipAddress: '192.168.1.105',
    status: 'Pending',
    uptime: '0 days',
    cpuUsage: '--%',
    memoryUsage: '--%',
    lastActivity: '5 minutes ago',
    hostname: 'dev.mcp.internal',
    os: 'Ubuntu 22.04 LTS',
    tools: [],
  },
];

export const getServers = (): Promise<Server[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(servers);
    }, 500);
  });
};

export const getServer = (id: string): Promise<Server | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(servers.find((server) => server.id === id));
    }, 500);
  });
};

export const addServer = (config: Omit<Server, 'id' | 'tools'>): Promise<Server> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newServer: Server = {
        ...config,
        id: (servers.length + 1).toString(),
        tools: [],
      };
      servers.push(newServer);
      resolve(newServer);
    }, 500);
  });
};

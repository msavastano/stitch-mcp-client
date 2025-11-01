export type ServerStatus = 'Online' | 'Offline' | 'Pending';

export type ToolStatus = 'Selected' | 'Not Selected' | 'Update Available' | 'Error';

export interface Tool {
  id: string;
  name: string;
  description: string;
  status: ToolStatus;
  icon: string;
}

export interface Server {
  id: string;
  name: string;
  ipAddress: string;
  status: ServerStatus;
  uptime: string;
  cpuUsage: string;
  memoryUsage: string;
  lastActivity: string;
  hostname: string;
  os: string;
  tools: Tool[];
}

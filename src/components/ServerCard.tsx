import React from 'react';
import { Server } from '../types';
import Button from './Button';
import Icon from './Icon';

interface ServerCardProps {
  server: Server;
  onClick: () => void;
}

const ServerStatusIndicator = ({ status }: { status: Server['status'] }) => {
  const statusClasses = {
    Online: 'text-online bg-online',
    Offline: 'text-offline bg-offline',
    Pending: 'text-pending bg-pending',
  };

  return (
    <div className={`flex items-center gap-2 text-sm font-medium ${statusClasses[status]}`}>
      <span className="relative flex h-3 w-3">
        {status === 'Online' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'currentColor' }}></span>}
        <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: 'currentColor' }}></span>
      </span>
      <span>{status}</span>
    </div>
  );
};

const ServerCard = ({ server, onClick }: ServerCardProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer flex flex-col items-stretch justify-start rounded-xl @lg:flex-row @lg:items-center bg-white dark:bg-gray-800/50 shadow-sm border border-gray-200 dark:border-gray-700/50">
      <div className="flex w-full grow flex-col items-stretch justify-center gap-2 p-4 @lg:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ServerStatusIndicator status={server.status} />
            <p className="text-sm text-gray-500 dark:text-gray-400">{server.name}</p>
          </div>
          <div className="hidden @lg:flex items-center gap-2">
            <Button variant="ghost" size="sm"><Icon name="restart_alt" /></Button>
            <Button variant="ghost" size="sm"><Icon name="power_settings_new" /></Button>
            <Button variant="ghost" size="sm"><Icon name="more_vert" /></Button>
          </div>
        </div>
        <p className="text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">{server.ipAddress}</p>
        <div className="mt-2 flex flex-col gap-2 @md:flex-row @md:items-center @md:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
            <span>Uptime: {server.uptime}</span>
            <span>CPU: {server.cpuUsage}</span>
            <span>Memory: {server.memoryUsage}</span>
            <span>Last activity: {server.lastActivity}</span>
          </div>
          <div className="flex @lg:hidden items-center gap-2 mt-2">
            <Button size="sm" className="flex-1"><Icon name="play_arrow" />Start</Button>
            <Button variant="ghost" size="sm"><Icon name="more_vert" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerCard;

import type { Server } from "../types";
import Button from "./Button";
import Icon from "./Icon";

const ServerCard = ({ server, onClick }: { server: Server; onClick: () => void }) => {
  return (
    <div className="@container bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-800 flex flex-col" onClick={onClick}>
      <div className="p-4 flex-grow">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Icon name="dns" className="text-gray-900 dark:text-white" style={{ fontSize: '28px' }} />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{server.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{server.ipAddress}</p>
            </div>
          </div>
          {/* <ServerStatusIndicator status={server.status} /> */}
        </div>
        <p className="text-lg font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
          {server.ipAddress}
        </p>
        <div className="mt-2 flex flex-col gap-2 @md:flex-row @md:items-center @md:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
            <span>Uptime: {server.uptime}</span>
            <span>CPU: {server.cpuUsage}</span>
            <span>Memory: {server.memoryUsage}</span>
            <span>Last activity: {server.lastActivity}</span>
          </div>
          <div className="flex @lg:hidden items-center gap-2 mt-2">
            <Button size="sm" className="flex-1">
              <Icon name="play_arrow" />
              Start
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="more_vert" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerCard;

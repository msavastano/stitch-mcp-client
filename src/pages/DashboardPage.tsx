import React, { useEffect, useState } from 'react';
import { getServers } from '../api/mock';
import { Server } from '../types';
import ServerCard from '../components/ServerCard';
import Input from '../components/Input';
import Button from '../components/Button';
import Icon from '../components/Icon';

const DashboardPage = ({ onAddServer, onSelectServer, onNavigateToChat }: { onAddServer: () => void; onSelectServer: (id: string) => void; onNavigateToChat: () => void }) => {
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServers().then((data) => {
      setServers(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Icon name="dns" className="text-gray-900 dark:text-white" style={{ fontSize: '28px' }} />
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">MCP Server Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={onNavigateToChat} variant="ghost">
                <Icon name="chat" />
                Chat Assistant
              </Button>
              <Button onClick={onAddServer}>
                <Icon name="add" />
                Add New Server
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="mb-6">
          <Input leftIcon="search" placeholder="Search servers by name or IP..." />
        </div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 @container">
            {servers.length > 0 ? (
              servers.map((server) => <ServerCard key={server.id} server={server} onClick={() => onSelectServer(server.id)} />)
            ) : (
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-center p-12">
                <Icon name="storage" className="text-gray-400 dark:text-gray-500 mb-4" style={{ fontSize: '48px' }} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No Servers Found</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by adding your first MCP server.</p>
                <Button className="mt-6">
                  <Icon name="add" />
                  Add New Server
                </Button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;

import React, { useEffect, useState } from 'react';
import { getServer } from '../api/mock';
import { Server, Tool } from '../types';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Input from '../components/Input';

const ManageServerToolsPage = ({ serverId, onClose }: { serverId: string; onClose: () => void }) => {
  const [server, setServer] = useState<Server | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServer(serverId).then((data) => {
      if (data) {
        setServer(data);
      }
      setLoading(false);
    });
  }, [serverId]);

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  if (!server) {
    return <div className="text-center p-8">Server not found.</div>;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
       <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4 pb-2 justify-between border-b border-gray-200/10 dark:border-white/10">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <button onClick={onClose}><Icon name="arrow_back" /></button>
            <h2 className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-tight tracking-[-0.015em] ml-2">Back to Servers</h2>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col lg:flex-row">
        <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200/10 dark:border-white/10 p-4 md:p-6">
        <div className="flex flex-col items-stretch justify-start rounded-lg bg-gray-500/5 p-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">SERVER DETAILS</p>
            <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mt-2">{server.name}</p>
            <div className="flex flex-col gap-2 mt-4 text-sm">
              <p className="text-gray-600 dark:text-gray-300"><span className="font-medium text-gray-700 dark:text-gray-200">IP Address:</span> {server.ipAddress}</p>
              <p className="text-gray-600 dark:text-gray-300"><span className="font-medium text-gray-700 dark:text-gray-200">Hostname:</span> {server.hostname}</p>
              <p className="text-gray-600 dark:text-gray-300"><span className="font-medium text-gray-700 dark:text-gray-200">OS:</span> {server.os}</p>
              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-700 dark:text-gray-200">Status:</p>
                <div className="flex items-center gap-1.5">
                  <div className={`size-2 rounded-full ${server.status === 'Online' ? 'bg-[#36B37E]' : 'bg-gray-500'}`}></div>
                  <p className={`${server.status === 'Online' ? 'text-[#36B37E]' : 'text-gray-500'}`}>{server.status}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button className="w-full">Apply Changes</Button>
          </div>
        </aside>
        <div className="flex-1 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight">Manage Tools for {server.name}</h1>
            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <Input leftIcon="search" placeholder="Search by tool name..." />
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-gray-500/20 dark:border-gray-500/30">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-500/5">
                    <tr>
                      <th className="p-4 w-12"><input className="form-checkbox rounded bg-transparent border-gray-500/50 text-primary focus:ring-primary/50" type="checkbox"/></th>
                      <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300">Tool</th>
                      <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300">Description</th>
                      <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300">Status</th>
                      <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-500/20 dark:divide-gray-500/30">
                    {server.tools.map(tool => (
                      <tr key={tool.id} className="hover:bg-gray-500/5">
                        <td className="p-4 w-12"><input className="form-checkbox rounded bg-transparent border-gray-500/50 text-primary focus:ring-primary/50" type="checkbox" defaultChecked={tool.status === 'Selected'} /></td>
                        <td className="p-4 align-top">
                          <div className="flex items-center gap-3">
                            <Icon name={tool.icon} className="text-gray-500 dark:text-gray-400 text-2xl" />
                            <p className="font-medium text-gray-900 dark:text-white">{tool.name}</p>
                          </div>
                        </td>
                        <td className="p-4 text-gray-600 dark:text-gray-400 align-top max-w-sm">{tool.description}</td>
                        <td className="p-4 align-top">
                          <div className={`inline-flex items-center gap-2 rounded-full py-1 px-3 ${tool.status === 'Selected' ? 'bg-[#36B37E]/10 text-[#36B37E]' : 'bg-gray-500/10 text-gray-500'}`}>
                            <div className={`size-2 rounded-full ${tool.status === 'Selected' ? 'bg-[#36B37E]' : 'bg-gray-500'}`}></div>
                            <p className="text-sm font-medium">{tool.status}</p>
                          </div>
                        </td>
                        <td className="p-4 text-right align-top"><button className="text-primary font-medium text-sm hover:underline">Details</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageServerToolsPage;

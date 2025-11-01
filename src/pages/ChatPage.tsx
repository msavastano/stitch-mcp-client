import React from 'react';
import Icon from '../components/Icon';
import Button from '../components/Button';
import Input from '../components/Input';
import Sidebar from '../components/Sidebar';

const ChatPage = () => {
  return (
    <div className="flex h-screen w-full font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Sidebar />
      <main className="flex flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-end border-b border-gray-200 dark:border-gray-700/50 bg-surface-light dark:bg-surface-dark px-6">
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center rounded-full text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 size-10">
              <Icon name="notifications" className="text-2xl" />
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXtk07dLoJkt_1I-szOn7dbdp9udCAiC0hm0Pwx91OrvCYrXWmg274lZadtNl2UpUuGX3qtic5mZPpuhRiCpifKyMdT6XRVRLt8mOVbg05EVh2qE5W4wGCqVgWbSH_rylMcCQMLNuHQbEx2uyI4lTGD7qXzz10tEtidWrRJ_dZJVXS3ThJFXdU3cDXzo8BlSsT3vsyX5Dk22fEqVA5ctTGAsBiEBfF9V5gxNQQ2nMJX5hMvs5mg-_zQeD-al1gBsAQE5SU93XOxA")'}}></div>
              <div className="text-right">
                <p className="font-semibold text-sm">Admin User</p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">admin@mcp.com</p>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex items-end gap-3 max-w-2xl">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0 border-2 border-primary" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKu9VxI9K6kt7aU-h6sklJdI151xDILH8NiQbcePnaOSiKGxFGKczreQj7t48ObOUXcWkszNoNt8KE7x6CO7yOrVhs7XQix1YE7BLQmYXzLTkhRmwp0JbzULT8BrxKLNeUBY_KEKf3ZMV-MNjJPd8KrK5ABw24bIPdiiYXGoc1cdBlsLudu-gmIY62P9gpWG0FgEDBK1wvlLceod_ErXFhw9iO3Qvqc--7FUQxgVAmFvgt2wxakX8AqCbp7mkWZMmx2-IzYNbs4A")'}}></div>
                <div className="flex flex-col gap-2 items-start">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">MCP Assistant</p>
                    <div className="rounded-lg rounded-bl-none bg-surface-light dark:bg-surface-dark px-4 py-3 text-base">
                        Hello! I am the MCP Assistant. How can I help you manage your servers today? You can ask me to check all server statuses or restart service X.
                    </div>
                </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 dark:border-gray-700/50 bg-surface-light dark:bg-surface-dark">
            <div className="relative">
              <Input placeholder="Ask about server status or run a command..." />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2">
                <Icon name="send" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;

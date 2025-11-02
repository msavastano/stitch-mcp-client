import React from 'react';
import Icon from './Icon';

const NavLink = ({ href, icon, children, isActive = false }: { href: string; icon: string; children: React.ReactNode; isActive?: boolean }) => {
  const activeClasses = 'bg-primary/20 text-primary';
  const inactiveClasses = 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5';
  return (
    <li>
      <a href={href} className={`flex h-11 items-center gap-4 rounded-lg px-4 ${isActive ? activeClasses : inactiveClasses}`}>
        <Icon name={icon} className="text-2xl" />
        <span className={isActive ? 'font-bold' : 'font-medium'}>{children}</span>
      </a>
    </li>
  );
};


const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-700/50">
      <div className="flex h-16 items-center gap-3 px-6 border-b border-gray-200 dark:border-gray-700/50">
        <Icon name="cloud_sync" className="text-primary text-3xl" />
        <h1 className="text-xl font-bold text-text-light dark:text-text-dark">MCP Client</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="flex flex-col gap-2">
          <NavLink href="#" icon="dashboard">Dashboard</NavLink>
          <NavLink href="#" icon="chat" isActive>Chat</NavLink>
          <NavLink href="#" icon="dns">Server List</NavLink>
          <NavLink href="#" icon="code_blocks">Scripts</NavLink>
          <NavLink href="#" icon="group">User Management</NavLink>
          <NavLink href="#" icon="receipt_long">Logs</NavLink>
          <NavLink href="#" icon="settings">Settings</NavLink>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

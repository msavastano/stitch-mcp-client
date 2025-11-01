import React, { useState } from 'react';
import DashboardPage from './pages/DashboardPage';
import AddServerPage from './pages/AddServerPage';
import ManageServerToolsPage from './pages/ManageServerToolsPage';
import ChatPage from './pages/ChatPage';

type Page = 'dashboard' | 'chat';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isAddingServer, setIsAddingServer] = useState(false);
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);

  if (isAddingServer) {
    return <AddServerPage onClose={() => setIsAddingServer(false)} />;
  }

  if (selectedServerId) {
    return <ManageServerToolsPage serverId={selectedServerId} onClose={() => setSelectedServerId(null)} />;
  }

  if (currentPage === 'chat') {
    return <ChatPage />;
  }

  return <DashboardPage onAddServer={() => setIsAddingServer(true)} onSelectServer={(id) => setSelectedServerId(id)} onNavigateToChat={() => setCurrentPage('chat')} />;
}

export default App;

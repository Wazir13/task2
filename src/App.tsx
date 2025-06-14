import React, { useState } from 'react';
import { Header } from './components/Header';
import { TabNavigation } from './components/TabNavigation';
import { GeneratorTab } from './components/GeneratorTab';
import { GalleryTab } from './components/GalleryTab';
import { ModelsTab } from './components/ModelsTab';
import { StylesTab } from './components/StylesTab';
import { HistoryTab } from './components/HistoryTab';
import { SettingsTab } from './components/SettingsTab';

function App() {
  const [activeTab, setActiveTab] = useState('generator');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'generator':
        return <GeneratorTab />;
      case 'gallery':
        return <GalleryTab />;
      case 'models':
        return <ModelsTab />;
      case 'styles':
        return <StylesTab />;
      case 'history':
        return <HistoryTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <GeneratorTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-6 py-8">
        {renderActiveTab()}
      </main>
    </div>
  );
}

export default App;
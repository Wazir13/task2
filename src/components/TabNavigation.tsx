import React from 'react';
import { Wand2, Image, Cpu, Palette, History, Settings } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'generator', label: 'Generator', icon: Wand2 },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'models', label: 'Models', icon: Cpu },
  { id: 'styles', label: 'Styles', icon: Palette },
  { id: 'history', label: 'History', icon: History },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-10">
      <div className="container mx-auto px-6">
        <div className="flex space-x-0 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600 bg-purple-50/50'
                    : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-purple-50/30'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
import React from 'react';
import { Palette, Sparkles, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-xl">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
              <Palette className="h-10 w-10 text-purple-300" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                AI Image Generator
              </h1>
              <p className="text-purple-200 text-sm">Transform text into stunning visuals with AI</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">Premium Models</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Zap className="h-4 w-4 text-green-300" />
              <span className="text-sm font-medium">Online</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
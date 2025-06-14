import React, { useState } from 'react';
import { Settings, User, Palette, Zap, Shield, Download, Bell, Monitor } from 'lucide-react';

export const SettingsTab: React.FC = () => {
  const [settings, setSettings] = useState({
    // General Settings
    theme: 'light',
    language: 'en',
    autoSave: true,
    
    // Generation Settings
    defaultModel: 'stable-diffusion',
    defaultWidth: 512,
    defaultHeight: 512,
    defaultSteps: 20,
    defaultGuidance: 7.5,
    defaultSamples: 4,
    
    // Privacy & Security
    saveHistory: true,
    shareAnalytics: false,
    publicGallery: false,
    
    // Notifications
    generationComplete: true,
    newFeatures: true,
    weeklyDigest: false,
    
    // Performance
    gpuAcceleration: true,
    maxConcurrentJobs: 2,
    cacheModels: true,
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const themes = [
    { id: 'light', name: 'Light', description: 'Clean and bright interface' },
    { id: 'dark', name: 'Dark', description: 'Easy on the eyes' },
    { id: 'auto', name: 'Auto', description: 'Follows system preference' },
  ];

  const models = [
    { id: 'stable-diffusion', name: 'Stable Diffusion v2.1' },
    { id: 'dalle-mini', name: 'DALL-E Mini' },
    { id: 'midjourney', name: 'Midjourney Style' },
    { id: 'realistic-vision', name: 'Realistic Vision' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex items-center">
          <Settings className="h-8 w-8 text-purple-600 mr-3" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
            <p className="text-gray-600">Customize your AI image generation experience</p>
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex items-center mb-6">
          <User className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-2xl font-bold text-gray-900">General</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
            <div className="space-y-3">
              {themes.map((theme) => (
                <label key={theme.id} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value={theme.id}
                    checked={settings.theme === theme.id}
                    onChange={(e) => updateSetting('theme', e.target.value)}
                    className="mr-3 text-purple-600 focus:ring-purple-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{theme.name}</div>
                    <div className="text-sm text-gray-600">{theme.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => updateSetting('language', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="ja">日本語</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={settings.autoSave}
                    onChange={(e) => updateSetting('autoSave', e.target.checked)}
                    className="mr-3 text-purple-600 focus:ring-purple-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Auto-save generations</div>
                    <div className="text-sm text-gray-600">Automatically save generated images</div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generation Settings */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex items-center mb-6">
          <Palette className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-2xl font-bold text-gray-900">Default Generation Settings</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Model</label>
                <select
                  value={settings.defaultModel}
                  onChange={(e) => updateSetting('defaultModel', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>{model.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Width: {settings.defaultWidth}px
                  </label>
                  <input
                    type="range"
                    min="256"
                    max="1024"
                    step="64"
                    value={settings.defaultWidth}
                    onChange={(e) => updateSetting('defaultWidth', parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height: {settings.defaultHeight}px
                  </label>
                  <input
                    type="range"
                    min="256"
                    max="1024"
                    step="64"
                    value={settings.defaultHeight}
                    onChange={(e) => updateSetting('defaultHeight', parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Steps: {settings.defaultSteps}
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={settings.defaultSteps}
                  onChange={(e) => updateSetting('defaultSteps', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guidance Scale: {settings.defaultGuidance}
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={settings.defaultGuidance}
                  onChange={(e) => updateSetting('defaultGuidance', parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Samples: {settings.defaultSamples}
                </label>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={settings.defaultSamples}
                  onChange={(e) => updateSetting('defaultSamples', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex items-center mb-6">
          <Shield className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-2xl font-bold text-gray-900">Privacy & Security</h3>
        </div>
        
        <div className="space-y-6">
          <label className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Save Generation History</div>
              <div className="text-sm text-gray-600">Keep a record of your generated images and prompts</div>
            </div>
            <input
              type="checkbox"
              checked={settings.saveHistory}
              onChange={(e) => updateSetting('saveHistory', e.target.checked)}
              className="text-purple-600 focus:ring-purple-500"
            />
          </label>
          
          <label className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Share Usage Analytics</div>
              <div className="text-sm text-gray-600">Help improve the service by sharing anonymous usage data</div>
            </div>
            <input
              type="checkbox"
              checked={settings.shareAnalytics}
              onChange={(e) => updateSetting('shareAnalytics', e.target.checked)}
              className="text-purple-600 focus:ring-purple-500"
            />
          </label>
          
          <label className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Public Gallery</div>
              <div className="text-sm text-gray-600">Allow your images to appear in the public gallery</div>
            </div>
            <input
              type="checkbox"
              checked={settings.publicGallery}
              onChange={(e) => updateSetting('publicGallery', e.target.checked)}
              className="text-purple-600 focus:ring-purple-500"
            />
          </label>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex items-center mb-6">
          <Bell className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-2xl font-bold text-gray-900">Notifications</h3>
        </div>
        
        <div className="space-y-6">
          <label className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Generation Complete</div>
              <div className="text-sm text-gray-600">Notify when image generation is finished</div>
            </div>
            <input
              type="checkbox"
              checked={settings.generationComplete}
              onChange={(e) => updateSetting('generationComplete', e.target.checked)}
              className="text-purple-600 focus:ring-purple-500"
            />
          </label>
          
          <label className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium text-gray-900">New Features</div>
              <div className="text-sm text-gray-600">Get notified about new models and features</div>
            </div>
            <input
              type="checkbox"
              checked={settings.newFeatures}
              onChange={(e) => updateSetting('newFeatures', e.target.checked)}
              className="text-purple-600 focus:ring-purple-500"
            />
          </label>
          
          <label className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium text-gray-900">Weekly Digest</div>
              <div className="text-sm text-gray-600">Receive a weekly summary of your activity</div>
            </div>
            <input
              type="checkbox"
              checked={settings.weeklyDigest}
              onChange={(e) => updateSetting('weeklyDigest', e.target.checked)}
              className="text-purple-600 focus:ring-purple-500"
            />
          </label>
        </div>
      </div>

      {/* Performance */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex items-center mb-6">
          <Zap className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-2xl font-bold text-gray-900">Performance</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <label className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium text-gray-900">GPU Acceleration</div>
                <div className="text-sm text-gray-600">Use GPU for faster generation</div>
              </div>
              <input
                type="checkbox"
                checked={settings.gpuAcceleration}
                onChange={(e) => updateSetting('gpuAcceleration', e.target.checked)}
                className="text-purple-600 focus:ring-purple-500"
              />
            </label>
            
            <label className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Cache Models</div>
                <div className="text-sm text-gray-600">Keep models in memory for faster switching</div>
              </div>
              <input
                type="checkbox"
                checked={settings.cacheModels}
                onChange={(e) => updateSetting('cacheModels', e.target.checked)}
                className="text-purple-600 focus:ring-purple-500"
              />
            </label>
          </div>
          
          <div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Concurrent Jobs: {settings.maxConcurrentJobs}
              </label>
              <input
                type="range"
                min="1"
                max="4"
                value={settings.maxConcurrentJobs}
                onChange={(e) => updateSetting('maxConcurrentJobs', parseInt(e.target.value))}
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">Higher values use more resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex items-center mb-6">
          <Download className="h-6 w-6 text-purple-600 mr-2" />
          <h3 className="text-2xl font-bold text-gray-900">Data Management</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="font-medium text-gray-900 mb-1">Export Settings</div>
            <div className="text-sm text-gray-600">Download your settings as a backup file</div>
          </button>
          
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="font-medium text-gray-900 mb-1">Import Settings</div>
            <div className="text-sm text-gray-600">Restore settings from a backup file</div>
          </button>
          
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="font-medium text-gray-900 mb-1">Clear Cache</div>
            <div className="text-sm text-gray-600">Free up storage space by clearing cached data</div>
          </button>
          
          <button className="p-4 border border-red-300 rounded-lg hover:bg-red-50 transition-colors text-left">
            <div className="font-medium text-red-900 mb-1">Reset All Settings</div>
            <div className="text-sm text-red-600">Restore all settings to default values</div>
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Settings Saved</h3>
            <p className="text-purple-100">Your preferences are automatically saved as you make changes.</p>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors">
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
};
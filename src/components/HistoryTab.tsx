import React, { useState } from 'react';
import { History, Search, Filter, Download, Heart, Share2, Trash2, Calendar, Clock } from 'lucide-react';

export const HistoryTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const filters = [
    { id: 'all', name: 'All', count: 156 },
    { id: 'today', name: 'Today', count: 12 },
    { id: 'week', name: 'This Week', count: 34 },
    { id: 'month', name: 'This Month', count: 89 },
    { id: 'favorites', name: 'Favorites', count: 23 },
  ];

  const historyItems = [
    {
      id: 1,
      prompt: 'A majestic dragon soaring through clouds at sunset, digital art',
      model: 'Stable Diffusion',
      style: 'Fantasy Art',
      timestamp: '2024-01-15 14:30',
      duration: '45s',
      images: [
        'https://picsum.photos/150/150?random=1',
        'https://picsum.photos/150/150?random=2',
        'https://picsum.photos/150/150?random=3',
        'https://picsum.photos/150/150?random=4',
      ],
      settings: {
        width: 512,
        height: 512,
        steps: 20,
        guidance: 7.5,
      },
      isFavorite: true,
      status: 'completed',
    },
    {
      id: 2,
      prompt: 'Cyberpunk cityscape with neon lights reflecting on wet streets',
      model: 'DALL-E Mini',
      style: 'Cyberpunk',
      timestamp: '2024-01-15 13:15',
      duration: '32s',
      images: [
        'https://picsum.photos/150/150?random=5',
        'https://picsum.photos/150/150?random=6',
      ],
      settings: {
        width: 512,
        height: 512,
        steps: 15,
        guidance: 8.0,
      },
      isFavorite: false,
      status: 'completed',
    },
    {
      id: 3,
      prompt: 'Portrait of a wise wizard with a long beard, fantasy art style',
      model: 'Midjourney Style',
      style: 'Portrait',
      timestamp: '2024-01-15 12:45',
      duration: '1m 12s',
      images: [
        'https://picsum.photos/150/150?random=7',
        'https://picsum.photos/150/150?random=8',
        'https://picsum.photos/150/150?random=9',
      ],
      settings: {
        width: 768,
        height: 768,
        steps: 25,
        guidance: 9.0,
      },
      isFavorite: true,
      status: 'completed',
    },
    {
      id: 4,
      prompt: 'Serene Japanese garden with cherry blossoms and koi pond',
      model: 'Realistic Vision',
      style: 'Photorealistic',
      timestamp: '2024-01-15 11:20',
      duration: '2m 5s',
      images: [
        'https://picsum.photos/150/150?random=10',
      ],
      settings: {
        width: 1024,
        height: 768,
        steps: 30,
        guidance: 7.0,
      },
      isFavorite: false,
      status: 'completed',
    },
    {
      id: 5,
      prompt: 'Futuristic spaceship landing on alien planet',
      model: 'Stable Diffusion',
      style: 'Sci-Fi',
      timestamp: '2024-01-15 10:30',
      duration: 'Failed',
      images: [],
      settings: {
        width: 512,
        height: 512,
        steps: 20,
        guidance: 7.5,
      },
      isFavorite: false,
      status: 'failed',
    },
  ];

  const toggleSelection = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-8">
      {/* Header and Controls */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <History className="h-6 w-6 mr-2 text-purple-600" />
              Generation History
            </h2>
            <p className="text-gray-600">Track and manage your AI image generations</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search prompts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white/80"
              />
            </div>
            
            {/* Bulk Actions */}
            {selectedItems.length > 0 && (
              <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-purple-800">
                  {selectedItems.length} selected
                </span>
                <button className="p-1 text-purple-600 hover:text-purple-800">
                  <Download className="h-4 w-4" />
                </button>
                <button className="p-1 text-purple-600 hover:text-purple-800">
                  <Heart className="h-4 w-4" />
                </button>
                <button className="p-1 text-red-600 hover:text-red-800">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
        <div className="flex items-center mb-4">
          <Filter className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Filter History</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
              }`}
            >
              {filter.name} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* History Items */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
        <div className="space-y-6">
          {historyItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                {/* Selection Checkbox */}
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelection(item.id)}
                  className="mt-2 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.prompt}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(item.timestamp)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {item.duration}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded">{item.model}</span>
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">{item.style}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <button className={`p-2 rounded-full transition-colors ${
                        item.isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500'
                      }`}>
                        <Heart className="h-4 w-4" fill={item.isFavorite ? 'currentColor' : 'none'} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Generated Images */}
                  {item.images.length > 0 && (
                    <div className="flex space-x-3 mb-4">
                      {item.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Generated image ${index + 1}`}
                          className="w-16 h-16 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        />
                      ))}
                    </div>
                  )}
                  
                  {/* Settings */}
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Size:</span>
                        <span className="ml-1 font-medium">{item.settings.width}×{item.settings.height}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Steps:</span>
                        <span className="ml-1 font-medium">{item.settings.steps}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Guidance:</span>
                        <span className="ml-1 font-medium">{item.settings.guidance}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Images:</span>
                        <span className="ml-1 font-medium">{item.images.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Generation Statistics</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">156</div>
            <div className="text-purple-100">Total Generations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">23</div>
            <div className="text-purple-100">Favorites</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2.3h</div>
            <div className="text-purple-100">Total Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">94%</div>
            <div className="text-purple-100">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};
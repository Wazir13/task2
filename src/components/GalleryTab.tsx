import React, { useState } from 'react';
import { Heart, Download, Share2, Eye, Filter, Search, Grid, List } from 'lucide-react';

export const GalleryTab: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Images', count: 156 },
    { id: 'portraits', name: 'Portraits', count: 34 },
    { id: 'landscapes', name: 'Landscapes', count: 28 },
    { id: 'abstract', name: 'Abstract', count: 22 },
    { id: 'fantasy', name: 'Fantasy', count: 31 },
    { id: 'sci-fi', name: 'Sci-Fi', count: 19 },
    { id: 'animals', name: 'Animals', count: 22 },
  ];

  const galleryImages = [
    {
      id: 1,
      url: 'https://picsum.photos/400/400?random=1',
      prompt: 'A majestic dragon soaring through clouds at sunset',
      model: 'Stable Diffusion',
      likes: 24,
      downloads: 12,
      category: 'fantasy',
      createdAt: '2024-01-15',
    },
    {
      id: 2,
      url: 'https://picsum.photos/400/400?random=2',
      prompt: 'Cyberpunk cityscape with neon lights',
      model: 'DALL-E Mini',
      likes: 18,
      downloads: 8,
      category: 'sci-fi',
      createdAt: '2024-01-14',
    },
    {
      id: 3,
      url: 'https://picsum.photos/400/400?random=3',
      prompt: 'Portrait of a wise wizard with long beard',
      model: 'Midjourney Style',
      likes: 31,
      downloads: 15,
      category: 'portraits',
      createdAt: '2024-01-13',
    },
    {
      id: 4,
      url: 'https://picsum.photos/400/400?random=4',
      prompt: 'Serene mountain landscape with lake reflection',
      model: 'Realistic Vision',
      likes: 27,
      downloads: 19,
      category: 'landscapes',
      createdAt: '2024-01-12',
    },
    {
      id: 5,
      url: 'https://picsum.photos/400/400?random=5',
      prompt: 'Abstract geometric patterns in vibrant colors',
      model: 'Stable Diffusion',
      likes: 15,
      downloads: 6,
      category: 'abstract',
      createdAt: '2024-01-11',
    },
    {
      id: 6,
      url: 'https://picsum.photos/400/400?random=6',
      prompt: 'Majestic lion in African savanna',
      model: 'DALL-E Mini',
      likes: 22,
      downloads: 11,
      category: 'animals',
      createdAt: '2024-01-10',
    },
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.prompt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header and Controls */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Image Gallery</h2>
            <p className="text-gray-600">Explore your AI-generated masterpieces</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 bg-white/80"
              />
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
        <div className="flex items-center mb-4">
          <Filter className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.prompt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium mb-2 line-clamp-2">{image.prompt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">{image.model}</span>
                    <div className="flex space-x-2">
                      <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Heart className="h-3 w-3" />
                      </button>
                      <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Download className="h-3 w-3" />
                      </button>
                      <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                        <Share2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {image.likes}
                      </span>
                      <span className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {image.downloads}
                      </span>
                    </div>
                    <span>{image.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredImages.map((image) => (
              <div key={image.id} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={image.url}
                  alt={image.prompt}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{image.prompt}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{image.model}</span>
                    <span>{image.createdAt}</span>
                    <span className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {image.likes}
                    </span>
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {image.downloads}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Gallery Statistics</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">156</div>
            <div className="text-purple-100">Total Images</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1.2K</div>
            <div className="text-purple-100">Total Likes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">847</div>
            <div className="text-purple-100">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">23</div>
            <div className="text-purple-100">Shared</div>
          </div>
        </div>
      </div>
    </div>
  );
};
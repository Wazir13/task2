import React, { useState } from 'react';
import { Palette, Wand2, Copy, Heart, Download } from 'lucide-react';

export const StylesTab: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState('photorealistic');

  const styleCategories = [
    {
      name: 'Photorealistic',
      styles: [
        {
          id: 'photorealistic',
          name: 'Photorealistic',
          description: 'Ultra-realistic photography style',
          prompt: 'photorealistic, highly detailed, professional photography, 8k resolution',
          image: 'https://picsum.photos/300/200?random=1',
          tags: ['realistic', 'detailed', 'photography'],
        },
        {
          id: 'portrait',
          name: 'Portrait Photography',
          description: 'Professional portrait style',
          prompt: 'professional portrait, studio lighting, shallow depth of field, bokeh background',
          image: 'https://picsum.photos/300/200?random=2',
          tags: ['portrait', 'professional', 'lighting'],
        },
        {
          id: 'landscape',
          name: 'Landscape Photography',
          description: 'Natural landscape photography',
          prompt: 'landscape photography, golden hour, dramatic lighting, wide angle',
          image: 'https://picsum.photos/300/200?random=3',
          tags: ['landscape', 'nature', 'dramatic'],
        },
      ],
    },
    {
      name: 'Artistic',
      styles: [
        {
          id: 'oil-painting',
          name: 'Oil Painting',
          description: 'Classic oil painting technique',
          prompt: 'oil painting, classical art style, rich colors, textured brushstrokes',
          image: 'https://picsum.photos/300/200?random=4',
          tags: ['painting', 'classical', 'artistic'],
        },
        {
          id: 'watercolor',
          name: 'Watercolor',
          description: 'Soft watercolor painting style',
          prompt: 'watercolor painting, soft colors, flowing brushstrokes, artistic',
          image: 'https://picsum.photos/300/200?random=5',
          tags: ['watercolor', 'soft', 'flowing'],
        },
        {
          id: 'digital-art',
          name: 'Digital Art',
          description: 'Modern digital artwork',
          prompt: 'digital art, vibrant colors, modern style, high contrast',
          image: 'https://picsum.photos/300/200?random=6',
          tags: ['digital', 'modern', 'vibrant'],
        },
      ],
    },
    {
      name: 'Fantasy & Sci-Fi',
      styles: [
        {
          id: 'fantasy',
          name: 'Fantasy Art',
          description: 'Magical fantasy artwork',
          prompt: 'fantasy art, magical, ethereal lighting, mystical atmosphere',
          image: 'https://picsum.photos/300/200?random=7',
          tags: ['fantasy', 'magical', 'mystical'],
        },
        {
          id: 'cyberpunk',
          name: 'Cyberpunk',
          description: 'Futuristic cyberpunk aesthetic',
          prompt: 'cyberpunk style, neon lights, futuristic, dark atmosphere, high tech',
          image: 'https://picsum.photos/300/200?random=8',
          tags: ['cyberpunk', 'neon', 'futuristic'],
        },
        {
          id: 'steampunk',
          name: 'Steampunk',
          description: 'Victorian-era industrial aesthetic',
          prompt: 'steampunk style, brass and copper, gears, Victorian era, industrial',
          image: 'https://picsum.photos/300/200?random=9',
          tags: ['steampunk', 'industrial', 'victorian'],
        },
      ],
    },
    {
      name: 'Anime & Manga',
      styles: [
        {
          id: 'anime',
          name: 'Anime Style',
          description: 'Japanese anime artwork',
          prompt: 'anime style, cel shading, vibrant colors, detailed character design',
          image: 'https://picsum.photos/300/200?random=10',
          tags: ['anime', 'japanese', 'cel-shading'],
        },
        {
          id: 'manga',
          name: 'Manga Style',
          description: 'Black and white manga style',
          prompt: 'manga style, black and white, detailed lineart, dramatic shading',
          image: 'https://picsum.photos/300/200?random=11',
          tags: ['manga', 'lineart', 'dramatic'],
        },
        {
          id: 'chibi',
          name: 'Chibi Style',
          description: 'Cute chibi character style',
          prompt: 'chibi style, cute, oversized head, simple features, kawaii',
          image: 'https://picsum.photos/300/200?random=12',
          tags: ['chibi', 'cute', 'kawaii'],
        },
      ],
    },
  ];

  const popularStyles = [
    { name: 'Photorealistic', count: 1234, trend: '+12%' },
    { name: 'Anime', count: 987, trend: '+8%' },
    { name: 'Oil Painting', count: 756, trend: '+15%' },
    { name: 'Cyberpunk', count: 654, trend: '+22%' },
    { name: 'Fantasy', count: 543, trend: '+5%' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Art Styles & Prompts</h2>
            <p className="text-gray-600">Discover and apply stunning artistic styles to your generations</p>
          </div>
          <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
            <Palette className="h-5 w-5 text-purple-600" />
            <span className="text-purple-800 font-medium">50+ Styles Available</span>
          </div>
        </div>
      </div>

      {/* Popular Styles */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Trending Styles</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {popularStyles.map((style, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-900">{style.count}</div>
              <div className="text-sm text-gray-700 mb-1">{style.name}</div>
              <div className="text-xs text-green-600 font-medium">{style.trend}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Style Categories */}
      {styleCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.styles.map((style) => (
              <div key={style.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{style.name}</h4>
                      <p className="text-gray-600 text-sm">{style.description}</p>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {style.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-medium text-gray-700 mb-2">Style Prompt:</label>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-800 font-mono">{style.prompt}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedStyle(style.id)}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                        selectedStyle === style.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      }`}
                    >
                      {selectedStyle === style.id ? 'Selected' : 'Use Style'}
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Copy className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Custom Style Creator */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Create Custom Style</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Style Name</label>
                <input
                  type="text"
                  placeholder="My Custom Style"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Style Description</label>
                <textarea
                  placeholder="Describe your custom style..."
                  className="w-full h-20 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Custom Prompt</label>
                <textarea
                  placeholder="Enter your custom style prompt..."
                  className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <input
                  type="text"
                  placeholder="custom, unique, artistic (comma separated)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 p-6 rounded-xl h-full flex items-center justify-center">
              <div className="text-center">
                <Wand2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Preview your custom style</p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Generate Preview
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Save Custom Style
          </button>
        </div>
      </div>

      {/* Style Tips */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Style Mastery Tips</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Combine Styles</h4>
            <p className="text-purple-100 text-sm">
              Mix different style prompts to create unique combinations. Try "oil painting + cyberpunk" for interesting results.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Adjust Weights</h4>
            <p className="text-purple-100 text-sm">
              Use prompt weights like (photorealistic:1.2) to emphasize certain style elements over others.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Negative Prompts</h4>
            <p className="text-purple-100 text-sm">
              Use negative prompts to avoid unwanted style elements. Add "cartoon, anime" to negative for realistic styles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
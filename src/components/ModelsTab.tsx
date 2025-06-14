import React, { useState } from 'react';
import { Cpu, Zap, Star, Clock, Download, Settings, CheckCircle, AlertCircle } from 'lucide-react';

export const ModelsTab: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('stable-diffusion');

  const models = [
    {
      id: 'stable-diffusion',
      name: 'Stable Diffusion v2.1',
      description: 'High-quality, versatile image generation with excellent prompt following',
      version: '2.1',
      size: '5.2 GB',
      speed: 'Medium',
      quality: 'High',
      specialty: 'General Purpose',
      status: 'active',
      downloads: '2.1M',
      rating: 4.8,
      features: ['High Resolution', 'Inpainting', 'Outpainting', 'Img2Img'],
      strengths: ['Photorealistic images', 'Good prompt adherence', 'Versatile styles'],
      limitations: ['Slower generation', 'Large model size'],
    },
    {
      id: 'dalle-mini',
      name: 'DALL-E Mini',
      description: 'Fast, creative image generation with unique artistic interpretations',
      version: '1.0',
      size: '2.8 GB',
      speed: 'Fast',
      quality: 'Medium',
      specialty: 'Creative Art',
      status: 'active',
      downloads: '1.8M',
      rating: 4.5,
      features: ['Fast Generation', 'Creative Style', 'Low Resource'],
      strengths: ['Quick results', 'Creative interpretations', 'Lower hardware requirements'],
      limitations: ['Lower resolution', 'Less photorealistic'],
    },
    {
      id: 'midjourney',
      name: 'Midjourney Style',
      description: 'Artistic, stylized outputs with exceptional aesthetic quality',
      version: '5.2',
      size: '4.1 GB',
      speed: 'Medium',
      quality: 'Very High',
      specialty: 'Artistic Style',
      status: 'active',
      downloads: '956K',
      rating: 4.9,
      features: ['Artistic Style', 'High Aesthetic', 'Style Transfer'],
      strengths: ['Beautiful aesthetics', 'Consistent style', 'Professional quality'],
      limitations: ['Less photorealistic', 'Style-specific'],
    },
    {
      id: 'realistic-vision',
      name: 'Realistic Vision',
      description: 'Specialized in photorealistic image generation with incredible detail',
      version: '3.0',
      size: '6.8 GB',
      speed: 'Slow',
      quality: 'Very High',
      specialty: 'Photorealism',
      status: 'active',
      downloads: '743K',
      rating: 4.7,
      features: ['Photorealistic', 'High Detail', 'Portrait Mode'],
      strengths: ['Extremely realistic', 'Fine details', 'Human portraits'],
      limitations: ['Slow generation', 'Large resource usage'],
    },
    {
      id: 'anime-diffusion',
      name: 'Anime Diffusion',
      description: 'Specialized model for anime and manga-style artwork',
      version: '2.0',
      size: '3.9 GB',
      speed: 'Medium',
      quality: 'High',
      specialty: 'Anime/Manga',
      status: 'beta',
      downloads: '521K',
      rating: 4.6,
      features: ['Anime Style', 'Character Focus', 'Style Consistency'],
      strengths: ['Perfect anime style', 'Character generation', 'Consistent aesthetics'],
      limitations: ['Style-specific only', 'Limited realism'],
    },
    {
      id: 'controlnet',
      name: 'ControlNet Enhanced',
      description: 'Advanced control over image generation with pose and structure guidance',
      version: '1.5',
      size: '7.2 GB',
      speed: 'Slow',
      quality: 'Very High',
      specialty: 'Controlled Generation',
      status: 'coming-soon',
      downloads: '0',
      rating: 0,
      features: ['Pose Control', 'Structure Guidance', 'Advanced Control'],
      strengths: ['Precise control', 'Consistent poses', 'Professional workflow'],
      limitations: ['Complex setup', 'Requires additional inputs'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'beta': return 'text-yellow-600 bg-yellow-100';
      case 'coming-soon': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSpeedColor = (speed: string) => {
    switch (speed) {
      case 'Fast': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Slow': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Models</h2>
            <p className="text-gray-600">Choose the perfect model for your creative needs</p>
          </div>
          <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
            <Cpu className="h-5 w-5 text-purple-600" />
            <span className="text-purple-800 font-medium">{models.filter(m => m.status === 'active').length} Active Models</span>
          </div>
        </div>
      </div>

      {/* Model Comparison */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Model Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Model</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Speed</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Quality</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Specialty</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Size</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Rating</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model.id} className="border-b border-gray-100 hover:bg-purple-50/50">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        model.status === 'active' ? 'bg-green-500' : 
                        model.status === 'beta' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`} />
                      <div>
                        <div className="font-medium text-gray-900">{model.name}</div>
                        <div className="text-sm text-gray-500">v{model.version}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`font-medium ${getSpeedColor(model.speed)}`}>
                      {model.speed}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-medium text-gray-900">{model.quality}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-700">{model.specialty}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-700">{model.size}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{model.rating || 'N/A'}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Model Details */}
      <div className="grid lg:grid-cols-2 gap-8">
        {models.map((model) => (
          <div key={model.id} className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{model.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{model.description}</p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(model.status)}`}>
                  {model.status === 'active' && <CheckCircle className="h-3 w-3 mr-1" />}
                  {model.status === 'beta' && <AlertCircle className="h-3 w-3 mr-1" />}
                  {model.status === 'coming-soon' && <Clock className="h-3 w-3 mr-1" />}
                  {model.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-medium">{model.rating || 'N/A'}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">Speed</div>
                <div className={`font-semibold ${getSpeedColor(model.speed)}`}>{model.speed}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">Quality</div>
                <div className="font-semibold text-gray-900">{model.quality}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">Size</div>
                <div className="font-semibold text-gray-900">{model.size}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600">Downloads</div>
                <div className="font-semibold text-gray-900">{model.downloads}</div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
              <div className="flex flex-wrap gap-2">
                {model.features.map((feature, index) => (
                  <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Strengths</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {model.strengths.map((strength, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Limitations</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {model.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-center">
                      <AlertCircle className="h-3 w-3 text-orange-500 mr-1 flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex space-x-2">
              {model.status === 'active' && (
                <button
                  onClick={() => setSelectedModel(model.id)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    selectedModel === model.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  {selectedModel === model.id ? 'Selected' : 'Select Model'}
                </button>
              )}
              {model.status === 'coming-soon' && (
                <button className="flex-1 py-2 px-4 bg-gray-100 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                  Coming Soon
                </button>
              )}
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Settings className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">Performance Insights</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Speed vs Quality</h4>
            <p className="text-purple-100 text-sm">
              Faster models like DALL-E Mini are great for quick iterations, while slower models like Realistic Vision produce higher quality results.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resource Usage</h4>
            <p className="text-purple-100 text-sm">
              Larger models require more GPU memory and processing power but generally produce better results with more detail.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Use Case Selection</h4>
            <p className="text-purple-100 text-sm">
              Choose specialized models for specific tasks: Anime Diffusion for anime art, Realistic Vision for portraits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
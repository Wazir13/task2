import React, { useState } from 'react';
import { Wand2, Download, Share2, Heart, Copy, Sparkles, Image as ImageIcon, Zap } from 'lucide-react';

export const GeneratorTab: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState('stable-diffusion');
  const [settings, setSettings] = useState({
    width: 512,
    height: 512,
    steps: 20,
    guidance: 7.5,
    seed: -1,
    samples: 4,
  });

  const models = [
    { id: 'stable-diffusion', name: 'Stable Diffusion v2.1', description: 'High-quality, versatile image generation' },
    { id: 'dalle-mini', name: 'DALL-E Mini', description: 'Fast, creative image generation' },
    { id: 'midjourney', name: 'Midjourney Style', description: 'Artistic, stylized outputs' },
    { id: 'realistic-vision', name: 'Realistic Vision', description: 'Photorealistic image generation' },
  ];

  const samplePrompts = [
    "A majestic dragon soaring through clouds at sunset, digital art",
    "Cyberpunk cityscape with neon lights reflecting on wet streets",
    "A cozy cottage in an enchanted forest with glowing mushrooms",
    "Portrait of a wise wizard with a long beard, fantasy art style",
    "Futuristic spaceship landing on an alien planet with purple skies",
    "A serene Japanese garden with cherry blossoms and a koi pond",
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate image generation with placeholder images
    setTimeout(() => {
      const newImages = Array.from({ length: settings.samples }, (_, i) => 
        `https://picsum.photos/512/512?random=${Date.now() + i}`
      );
      setGeneratedImages(newImages);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      {/* Main Generation Interface */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Prompt Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <Sparkles className="inline h-5 w-5 mr-2 text-purple-600" />
                Describe your image
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A beautiful landscape with mountains and a lake at sunset..."
                className="w-full h-32 p-4 border-2 border-purple-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Negative prompt (what to avoid)
              </label>
              <textarea
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
                placeholder="blurry, low quality, distorted..."
                className="w-full h-20 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 bg-white/80"
              />
            </div>

            {/* Sample Prompts */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Try these prompts:
              </label>
              <div className="grid md:grid-cols-2 gap-2">
                {samplePrompts.map((samplePrompt, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(samplePrompt)}
                    className="text-left p-3 text-sm border border-purple-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
                  >
                    {samplePrompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
            >
              {isGenerating ? (
                <>
                  <Zap className="h-5 w-5 animate-pulse" />
                  <span className="text-lg font-medium">Generating Magic...</span>
                </>
              ) : (
                <>
                  <Wand2 className="h-5 w-5" />
                  <span className="text-lg font-medium">Generate Images</span>
                </>
              )}
            </button>
          </div>

          {/* Settings Panel */}
          <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Generation Settings</h4>
            
            {/* Model Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              >
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Width: {settings.width}
                  </label>
                  <input
                    type="range"
                    min="256"
                    max="1024"
                    step="64"
                    value={settings.width}
                    onChange={(e) => setSettings({...settings, width: parseInt(e.target.value)})}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Height: {settings.height}
                  </label>
                  <input
                    type="range"
                    min="256"
                    max="1024"
                    step="64"
                    value={settings.height}
                    onChange={(e) => setSettings({...settings, height: parseInt(e.target.value)})}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Steps: {settings.steps}
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={settings.steps}
                  onChange={(e) => setSettings({...settings, steps: parseInt(e.target.value)})}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">More steps = higher quality</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Guidance: {settings.guidance}
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={settings.guidance}
                  onChange={(e) => setSettings({...settings, guidance: parseFloat(e.target.value)})}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">How closely to follow prompt</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Samples: {settings.samples}
                </label>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={settings.samples}
                  onChange={(e) => setSettings({...settings, samples: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Images */}
      {(generatedImages.length > 0 || isGenerating) && (
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ImageIcon className="h-6 w-6 mr-2 text-purple-600" />
            Generated Images
          </h3>
          
          {isGenerating ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: settings.samples }).map((_, index) => (
                <div key={index} className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl animate-pulse flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-purple-400 animate-spin" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {generatedImages.map((image, index) => (
                <div key={index} className="group relative">
                  <img
                    src={image}
                    alt={`Generated image ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Download className="h-4 w-4 text-gray-700" />
                      </button>
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Heart className="h-4 w-4 text-gray-700" />
                      </button>
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Share2 className="h-4 w-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">Pro Tips for Better Results</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Be Descriptive</h4>
            <p className="text-purple-100 text-sm">
              Include details about style, lighting, colors, and composition for better results.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Use Negative Prompts</h4>
            <p className="text-purple-100 text-sm">
              Specify what you don't want to see to avoid unwanted elements in your images.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Experiment with Settings</h4>
            <p className="text-purple-100 text-sm">
              Try different guidance scales and step counts to find your perfect style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
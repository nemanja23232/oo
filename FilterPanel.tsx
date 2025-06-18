import React, { useState } from 'react';
import { X, Filter, Star, Calendar, Play } from 'lucide-react';

interface FilterPanelProps {
  onClose: () => void;
  onApplyFilters: (filters: FilterState) => void;
}

interface FilterState {
  rating: number;
  yearFrom: string;
  yearTo: string;
  selectedGenres: string[];
}

const genreEmojis: Record<string, string> = {
  'Akcija': '💥',
  'Drama': '🎭',
  'Komedija': '😂',
  'Triler': '😰',
  'Sci-Fi': '🚀',
  'Horor': '👻',
  'Kriminal': '🔫',
  'Romansa': '💕',
  'Avantura': '🗺️',
  'Misterija': '🔍'
};

const ratingLabels = [
  '1.0 - Katastrofa',
  '2.0 - Užasno',
  '3.0 - Loše',
  '4.0 - Slabo',
  '5.0 - Prosečno',
  '6.0 - Solidno',
  '7.0 - Dobro',
  '8.0 - Odlično',
  '9.0 - Remek-delo',
  '10.0 - Savršenstvo'
];

export const FilterPanel: React.FC<FilterPanelProps> = ({ onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState<FilterState>({
    rating: 5,
    yearFrom: '',
    yearTo: '',
    selectedGenres: []
  });

  const handleGenreToggle = (genre: string) => {
    setFilters(prev => ({
      ...prev,
      selectedGenres: prev.selectedGenres.includes(genre)
        ? prev.selectedGenres.filter(g => g !== genre)
        : [...prev.selectedGenres, genre]
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    onClose();
  };

  const getRatingInfo = (rating: number) => {
    const index = Math.min(Math.floor(rating) - 1, 9);
    return ratingLabels[Math.max(0, index)];
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800/95 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-purple-500/30">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Filter className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">🔧 Napredni filteri</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-purple-400 hover:text-white transition-colors rounded-lg hover:bg-purple-600/20"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Rating Filter */}
          <div>
            <label className="block text-white font-semibold mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              Minimalna ocena: {filters.rating.toFixed(1)}
            </label>
            <div className="mb-2">
              <input
                type="range"
                min="1"
                max="10"
                step="0.1"
                value={filters.rating}
                onChange={(e) => setFilters(prev => ({ ...prev, rating: parseFloat(e.target.value) }))}
                className="w-full accent-purple-500 bg-gray-700 rounded-lg appearance-none h-3 cursor-pointer"
              />
            </div>
            <div className="text-sm text-purple-300 bg-purple-600/20 rounded-lg p-3 border border-purple-500/30">
              ℹ️ {getRatingInfo(filters.rating)}
            </div>
          </div>

          {/* Year Filter */}
          <div>
            <label className="block text-white font-semibold mb-3 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-400" />
              📅 Godina izdanja
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Od (npr. 1990)"
                value={filters.yearFrom}
                onChange={(e) => setFilters(prev => ({ ...prev, yearFrom: e.target.value }))}
                className="px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <input
                type="number"
                placeholder="Do (npr. 2024)"
                value={filters.yearTo}
                onChange={(e) => setFilters(prev => ({ ...prev, yearTo: e.target.value }))}
                className="px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
          </div>

          {/* Genre Filter */}
          <div>
            <label className="block text-white font-semibold mb-3 flex items-center">
              <Play className="w-5 h-5 mr-2 text-green-400" />
              🎬 Žanr
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(genreEmojis).map(([genre, emoji]) => (
                <label key={genre} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.selectedGenres.includes(genre)}
                    onChange={() => handleGenreToggle(genre)}
                    className="w-5 h-5 text-purple-500 bg-gray-700 border-purple-500/30 rounded focus:ring-purple-500/50"
                  />
                  <span className="text-purple-300 group-hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-lg">{emoji}</span>
                    {genre}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
          <button 
            onClick={handleApplyFilters}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
          >
            <Filter className="w-5 h-5 mr-2" />
            Primeni filtere
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-700/50 text-purple-300 rounded-xl font-semibold hover:bg-gray-600/50 transition-colors"
          >
            Otkaži
          </button>
        </div>
      </div>
    </div>
  );
};
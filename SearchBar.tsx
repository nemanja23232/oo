import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Star, Calendar, Loader, Filter, TrendingUp } from 'lucide-react';
import { movies } from '../data/movies';
import { useTMDBData } from '../hooks/useTMDBData';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

interface SuggestionItemProps {
  movie: any;
  onClick: () => void;
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({ movie, onClick }) => {
  const { poster, loading } = useTMDBData(movie.title, movie.originalTitle, movie.year);

  return (
    <div
      onClick={onClick}
      className="flex items-center p-5 hover:bg-purple-600/20 cursor-pointer transition-all duration-300 border-b border-purple-500/10 last:border-b-0 group hover:shadow-lg hover:scale-[1.01]"
    >
      <div className="w-14 h-18 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 overflow-hidden shadow-lg">
        {loading ? (
          <Loader className="w-4 h-4 text-white animate-spin" />
        ) : poster ? (
          <img 
            src={poster} 
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <span className="text-white font-bold text-xs text-center">
            {movie.title.substring(0, 3)}
          </span>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        {/* PROMENJENA BOJA NASLOVA u suggestions - ZLATNO-ŽUTA-PLAVA */}
        <h4 className="bg-gradient-to-r from-amber-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent font-semibold truncate group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {movie.title}
        </h4>
        {movie.originalTitle && (
          <p className="text-purple-300 text-sm truncate">
            {movie.originalTitle}
          </p>
        )}
        <div className="flex items-center space-x-4 mt-1">
          <div className="flex items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="text-yellow-400 font-medium text-sm">{movie.rating}</span>
          </div>
          <div className="flex items-center text-purple-300">
            <Calendar className="w-3 h-3 mr-1" />
            <span className="text-xs">{movie.year}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {movie.genre.slice(0, 2).map((genre, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-600/30 text-purple-200 text-xs rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Pretraži filmove i serije..." 
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(movies.slice(0, 5));
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = movies
        .filter(movie =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .slice(0, 6);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions(movies.slice(0, 5));
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (movie: any) => {
    onSearchChange(movie.title);
    setShowSuggestions(false);
    setIsFocused(false);
  };

  return (
    <div className="relative max-w-3xl mx-auto" ref={searchRef}>
      {/* PROFESIONALNI SEARCH BAR sa 3D efektima */}
      <div className="relative group">
        {/* Glow effect oko search bar-a - POJAČAN BLUR */}
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl transition-all duration-300 ${isFocused ? 'opacity-100 scale-105' : 'opacity-0'}`}></div>
        
        <div className="relative">
          {/* Filter icon - LEVO */}
          <Filter className="absolute left-6 top-1/2 transform -translate-y-1/2 text-purple-500/50 w-4 h-4" />
          
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
              setIsFocused(true);
            }}
            placeholder={placeholder}
            className={`w-full pl-16 pr-24 py-6 bg-gray-800/60 backdrop-blur-md border-2 rounded-2xl text-white placeholder-purple-300/70 focus:outline-none transition-all duration-500 text-lg font-medium shadow-2xl ${
              isFocused 
                ? 'border-purple-400 bg-gray-800/80 shadow-purple-500/20' 
                : 'border-purple-500/30 hover:border-purple-400/50'
            }`}
          />
          
          {/* Search icon sa animacijom - DESNO */}
          <Search className={`absolute right-16 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-all duration-300 ${isFocused ? 'text-purple-400 scale-110' : 'text-purple-400'}`} />
          
          {/* Trending icon */}
          <TrendingUp className="absolute right-6 top-1/2 transform -translate-y-1/2 text-purple-500/50 w-5 h-5" />
          
          {searchTerm && (
            <button
              onClick={() => {
                onSearchChange('');
                setShowSuggestions(false);
                setIsFocused(false);
              }}
              className="absolute right-28 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-white transition-all duration-300 hover:scale-110 p-1 rounded-full hover:bg-purple-600/20"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Search stats */}
        {isFocused && (
          <div className="absolute top-full left-0 right-0 mt-2 flex justify-between items-center px-6 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 text-sm text-purple-300">
            <span>🎬 {movies.length} filmova i serija</span>
            <span>⭐ Prosečna ocena: {(movies.reduce((sum, m) => sum + m.rating, 0) / movies.length).toFixed(1)}</span>
          </div>
        )}
      </div>

      {/* POBOLJŠANE Search Suggestions - VIŠE PROSTORA */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-gray-800/95 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-2xl z-50 max-h-96 overflow-y-auto">
          {/* Header za suggestions */}
          <div className="px-6 py-3 border-b border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
            <h4 className="text-white font-bold flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-purple-400" />
              {searchTerm ? `Rezultati za "${searchTerm}"` : 'Preporučeno za vas'}
            </h4>
          </div>
          
          {suggestions.map((movie) => (
            <SuggestionItem
              key={movie.id}
              movie={movie}
              onClick={() => handleSuggestionClick(movie)}
            />
          ))}
          
          {/* Footer za suggestions */}
          <div className="px-6 py-3 border-t border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-center">
            <span className="text-purple-300 text-sm">
              💡 Tip: Pokušaj sa žanrom, režiserom ili godinom
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
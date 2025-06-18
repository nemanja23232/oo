import React, { useState } from 'react';
import { Play, ExternalLink, Youtube, Video, Search, Loader } from 'lucide-react';

interface TrailerSectionProps {
  movieTitle: string;
  originalTitle?: string;
  year: number;
}

export const TrailerSection: React.FC<TrailerSectionProps> = ({ 
  movieTitle, 
  originalTitle, 
  year 
}) => {
  const [showTrailers, setShowTrailers] = useState(false);
  const [loading, setLoading] = useState(false);

  // Generate YouTube search URLs for trailers
  const generateTrailerLinks = () => {
    const searchTitle = originalTitle || movieTitle;
    const queries = [
      `${searchTitle} ${year} trailer`,
      `${searchTitle} official trailer`,
      `${movieTitle} trailer ${year}`,
      `${searchTitle} movie trailer`
    ];

    return queries.map((query, index) => ({
      id: index,
      query,
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
      label: index === 0 ? 'Glavni trailer' : 
             index === 1 ? 'Zvanični trailer' :
             index === 2 ? 'Alternativni trailer' :
             'Dodatni trailer'
    }));
  };

  const trailerLinks = generateTrailerLinks();

  const handleSearchTrailer = async (query: string) => {
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
    }, 1000);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Play className="w-5 h-5 mr-2 text-red-400" />
        🎬 Traileri i video sadržaj
      </h3>

      {!showTrailers ? (
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-lg p-6 border border-red-500/30">
            <Youtube className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Pogledaj trailer</h4>
            <p className="text-gray-300 mb-4">
              Pronađi i pogledaj trailer za <strong className="text-white">{movieTitle}</strong> na YouTube-u
            </p>
            <button
              onClick={() => setShowTrailers(true)}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
            >
              <Play className="w-5 h-5 mr-2" />
              Prikaži trailer opcije
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trailerLinks.map((link) => (
              <div
                key={link.id}
                className="bg-gray-700/50 rounded-lg p-4 border border-red-500/30 hover:border-red-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-600/20 p-2 rounded-lg">
                      <Youtube className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{link.label}</h4>
                      <p className="text-gray-400 text-sm">{link.query}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSearchTrailer(link.query)}
                    disabled={loading}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center group-hover:scale-105 transform duration-300"
                  >
                    {loading ? (
                      <Loader className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Traži
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct YouTube search */}
          <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-lg p-6 border border-red-500/30">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center">
              <Video className="w-5 h-5 mr-2" />
              🔍 Direktna pretraga
            </h4>
            <p className="text-gray-300 mb-4">
              Ili direktno pretraži na YouTube-u za najbolje rezultate:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${originalTitle || movieTitle} ${year} trailer`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                <Youtube className="w-4 h-4 mr-2" />
                YouTube pretraga
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(`${movieTitle} ${year} trailer site:youtube.com`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <Search className="w-4 h-4 mr-2" />
                Google + YouTube
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Popular trailer sites */}
          <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
            <h4 className="text-white font-bold mb-3">📺 Dodatni video sadržaj:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <a
                href={`https://www.imdb.com/find?q=${encodeURIComponent(originalTitle || movieTitle)}&s=tt`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-3 bg-yellow-600/20 hover:bg-yellow-600/30 rounded-lg border border-yellow-500/30 transition-colors group"
              >
                <div className="text-yellow-400 font-bold text-sm group-hover:scale-110 transform transition-transform">IMDb</div>
                <div className="text-gray-400 text-xs">Traileri & klipovi</div>
              </a>
              
              <a
                href={`https://www.movieclips.com/search?q=${encodeURIComponent(movieTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg border border-blue-500/30 transition-colors group"
              >
                <div className="text-blue-400 font-bold text-sm group-hover:scale-110 transform transition-transform">MovieClips</div>
                <div className="text-gray-400 text-xs">Sceni iz filma</div>
              </a>
              
              <a
                href={`https://www.rottentomatoes.com/search?search=${encodeURIComponent(movieTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-3 bg-red-600/20 hover:bg-red-600/30 rounded-lg border border-red-500/30 transition-colors group"
              >
                <div className="text-red-400 font-bold text-sm group-hover:scale-110 transform transition-transform">RT</div>
                <div className="text-gray-400 text-xs">Kritike & traileri</div>
              </a>
              
              <a
                href={`https://www.metacritic.com/search/movie/${encodeURIComponent(movieTitle)}/results`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center p-3 bg-green-600/20 hover:bg-green-600/30 rounded-lg border border-green-500/30 transition-colors group"
              >
                <div className="text-green-400 font-bold text-sm group-hover:scale-110 transform transition-transform">Metacritic</div>
                <div className="text-gray-400 text-xs">Recenzije</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
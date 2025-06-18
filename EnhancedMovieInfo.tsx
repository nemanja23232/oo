import React, { useState, useEffect } from 'react';
import { Globe, Users, Calendar, Clock, Award, Star, TrendingUp, Film, Tv, MapPin, Languages } from 'lucide-react';
import { Movie } from '../data/movies';

interface EnhancedMovieInfoProps {
  movie: Movie;
  tmdbData?: any;
}

export const EnhancedMovieInfo: React.FC<EnhancedMovieInfoProps> = ({ movie, tmdbData }) => {
  const [translatedDescription, setTranslatedDescription] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Enhanced movie information with Serbian translations
  const getEnhancedInfo = () => {
    const info = {
      genres: movie.genre.map(genre => {
        const genreTranslations: Record<string, string> = {
          'Action': 'Akcija',
          'Drama': 'Drama',
          'Comedy': 'Komedija',
          'Thriller': 'Triler',
          'Horror': 'Horor',
          'Romance': 'Romansa',
          'Sci-Fi': 'Naučna fantastika',
          'Fantasy': 'Fantazija',
          'Crime': 'Kriminal',
          'Mystery': 'Misterija',
          'Adventure': 'Avantura',
          'Animation': 'Animacija',
          'Documentary': 'Dokumentarac',
          'Biography': 'Biografija',
          'History': 'Istorijski',
          'War': 'Ratni',
          'Western': 'Vestern',
          'Musical': 'Mjuzikl',
          'Sport': 'Sportski',
          'Family': 'Porodični'
        };
        return genreTranslations[genre] || genre;
      }),
      
      categoryName: {
        'domestic-films': 'Domaći film',
        'foreign-films': 'Strani film',
        'domestic-series': 'Domaća serija',
        'foreign-series': 'Strana serija'
      }[movie.category] || 'Nepoznato',
      
      ratingDescription: movie.rating >= 9 ? 'Remek-delo' :
                        movie.rating >= 8.5 ? 'Izuzetno' :
                        movie.rating >= 8 ? 'Odličo' :
                        movie.rating >= 7.5 ? 'Vrlo dobro' :
                        movie.rating >= 7 ? 'Dobro' :
                        movie.rating >= 6.5 ? 'Solidno' :
                        movie.rating >= 6 ? 'Prosečno' : 'Ispod proseka',
      
      yearCategory: movie.year >= 2020 ? 'Noviji film' :
                   movie.year >= 2010 ? 'Moderan film' :
                   movie.year >= 2000 ? 'Film iz 2000-ih' :
                   movie.year >= 1990 ? 'Film iz 90-ih' :
                   'Klasik'
    };
    
    return info;
  };

  const enhancedInfo = getEnhancedInfo();

  // Simulate translation of description to Serbian
  const translateDescription = async () => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      // For demo purposes, we'll use the existing description
      // In real implementation, you would call a translation API
      setTranslatedDescription(movie.description);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    translateDescription();
  }, [movie.id]);

  return (
    <div className="space-y-6">
      {/* Main Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Info */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center">
            <Film className="w-5 h-5 mr-2" />
            Osnovne informacije
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Tip:</span>
              <span className="text-white font-medium">{enhancedInfo.categoryName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Godina:</span>
              <span className="text-white font-medium">{movie.year} ({enhancedInfo.yearCategory})</span>
            </div>
            {movie.country && (
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Zemlja:</span>
                <span className="text-white font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {movie.country}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Režija:</span>
              <span className="text-white font-medium">{movie.director}</span>
            </div>
          </div>
        </div>

        {/* Rating & Quality */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
          <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2" />
            Ocena i kvalitet
          </h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">{movie.rating.toFixed(1)}</div>
              <div className="text-yellow-300 text-sm font-medium">{enhancedInfo.ratingDescription}</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(movie.rating / 2) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                  />
                ))}
              </div>
            </div>
            <div className="bg-yellow-600/20 rounded-lg p-3 border border-yellow-500/30">
              <div className="text-center">
                <TrendingUp className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                <div className="text-white text-sm font-medium">Preporučeno za gledanje</div>
              </div>
            </div>
          </div>
        </div>

        {/* Series Info (if applicable) */}
        {(movie.seasons || movie.episodes) && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center">
              <Tv className="w-5 h-5 mr-2" />
              Informacije o seriji
            </h3>
            <div className="space-y-3">
              {movie.seasons && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sezona:</span>
                  <span className="text-white font-medium">{movie.seasons}</span>
                </div>
              )}
              {movie.episodes && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Epizoda:</span>
                  <span className="text-white font-medium">{movie.episodes}</span>
                </div>
              )}
              <div className="bg-blue-600/20 rounded-lg p-3 border border-blue-500/30">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                  <div className="text-white text-sm font-medium">
                    {movie.episodes ? `${movie.episodes} epizoda za gledanje` : 'Serija za binge-watching'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Genres */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2" />
          Žanrovi (na srpskom)
        </h3>
        <div className="flex flex-wrap gap-3">
          {enhancedInfo.genres.map((genre, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 rounded-full border border-purple-500/30 font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Enhanced Description */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
        <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center">
          <Languages className="w-5 h-5 mr-2" />
          Detaljni opis
        </h3>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
            <span className="ml-3 text-gray-300">Učitavam detaljne informacije...</span>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              {translatedDescription}
            </p>
            
            {/* Additional context */}
            <div className="bg-green-600/20 rounded-lg p-4 border border-green-500/30">
              <h4 className="text-white font-bold mb-2">💡 Zašto preporučujemo:</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Ocena {movie.rating}/10 - {enhancedInfo.ratingDescription.toLowerCase()}</li>
                <li>• {enhancedInfo.yearCategory} iz {movie.year}. godine</li>
                <li>• Žanr: {enhancedInfo.genres.join(', ')}</li>
                {movie.country && <li>• Produkcija: {movie.country}</li>}
                <li>• Režija: {movie.director}</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* TMDB Additional Info */}
      {tmdbData && (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            Dodatne informacije (TMDB)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tmdbData.overview && (
              <div>
                <h4 className="text-white font-medium mb-2">Originalni opis (engleski):</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{tmdbData.overview}</p>
              </div>
            )}
            <div>
              <h4 className="text-white font-medium mb-2">TMDB statistike:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">TMDB ocena:</span>
                  <span className="text-yellow-400 font-medium">{tmdbData.vote_average?.toFixed(1)}/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Popularnost:</span>
                  <span className="text-blue-400 font-medium">{tmdbData.popularity?.toFixed(0)}</span>
                </div>
                {tmdbData.release_date && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">Datum izlaska:</span>
                    <span className="text-white font-medium">{new Date(tmdbData.release_date).toLocaleDateString('sr-RS')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
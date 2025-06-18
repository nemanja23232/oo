import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Globe, Tv, Film, Play, Loader } from 'lucide-react';
import { Movie } from '../data/movies';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/supabase';
import { useTMDBData } from '../hooks/useTMDBData';
import { ModernRating, CircularRating } from './ModernRating';
import { FavoriteButton, BookmarkButton } from './MicroInteractions';
import { HighlightText, BodyText, Label } from './TypographySystem';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { user } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { poster, loading: tmdbLoading } = useTMDBData(movie.title, movie.originalTitle, movie.year);

  // Load user's favorite/bookmark status
  useEffect(() => {
    const loadUserStatus = async () => {
      if (!user) return;
      
      try {
        // Check if movie is in favorites
        const { data: favoritesData } = await db.favorites.get(user.id);
        const favoriteIds = favoritesData?.map(item => item.movie_id) || [];
        setIsFavorite(favoriteIds.includes(movie.id));
        
        // Check if movie is in watchlist
        const { data: watchlistData } = await db.watchlist.get(user.id);
        const watchlistIds = watchlistData?.map(item => item.movie_id) || [];
        setIsBookmarked(watchlistIds.includes(movie.id));
      } catch (error) {
        console.error('Error loading user status:', error);
      }
    };

    loadUserStatus();
  }, [user, movie.id]);

  const handleFavoriteToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }
    
    setLoading(true);
    
    try {
      if (isFavorite) {
        await db.favorites.remove(user.id, movie.id);
        setIsFavorite(false);
      } else {
        await db.favorites.add(user.id, movie.id);
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookmarkToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }
    
    setLoading(true);
    
    try {
      if (isBookmarked) {
        await db.watchlist.remove(user.id, movie.id);
        setIsBookmarked(false);
      } else {
        await db.watchlist.add(user.id, movie.id);
        setIsBookmarked(true);
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = () => {
    if (movie.category.includes('series')) {
      return <Tv className="w-4 h-4" />;
    }
    return <Film className="w-4 h-4" />;
  };

  const getCategoryColor = () => {
    switch (movie.category) {
      case 'domestic-series':
        return 'bg-emerald-600';
      case 'foreign-series':
        return 'bg-blue-600';
      case 'domestic-films':
        return 'bg-purple-600';
      case 'foreign-films':
        return 'bg-amber-600';
      default:
        return 'bg-gray-600';
    }
  };

  const posterUrl = poster;

  return (
    <Link to={`/film/${movie.id}`}>
      <div 
        className="group bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-purple-500/20 hover:border-purple-400/40 cursor-pointer card-3d transform-gpu glass-dark"
      >
        {/* 🎬 POBOLJŠANI MOVIE POSTER sa boljim loading stanjem */}
        <div className="relative h-80 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
          {tmdbLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 glass">
              <div className="text-center">
                <div className="spinner-large mx-auto mb-3"></div>
                <Label color="primary">Učitavam poster...</Label>
              </div>
            </div>
          ) : posterUrl ? (
            <img 
              src={posterUrl} 
              alt={movie.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : null}
          
          {/* Fallback content sa poboljšanim dizajnom */}
          <div className={`absolute inset-0 flex items-center justify-center ${posterUrl && !tmdbLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <div className="text-center p-6">
              <Film className="w-20 h-20 text-white/70 mx-auto mb-4 animate-float" />
              <HighlightText className="text-xl text-center leading-tight block mb-2">
                {movie.title.length > 20 ? movie.title.substring(0, 20) + '...' : movie.title}
              </HighlightText>
              {movie.originalTitle && (
                <BodyText size="sm" className="text-white/60 text-center">
                  {movie.originalTitle.length > 15 ? movie.originalTitle.substring(0, 15) + '...' : movie.originalTitle}
                </BodyText>
              )}
            </div>
          </div>
          
          {/* 🎭 POBOLJŠANI OVERLAY sa gradijentom */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-full bg-gradient-to-r from-purple-600/90 to-blue-600/90 hover:from-purple-600 hover:to-blue-600 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 font-bold btn-3d backdrop-blur-sm shadow-glow">
                <Play className="w-5 h-5" />
                <span>Pogledaj detalje</span>
              </div>
            </div>
          </div>

          {/* 🏷️ POBOLJŠANI CATEGORY BADGE */}
          <div className={`absolute top-4 right-4 flex items-center px-4 py-2 rounded-xl text-xs text-white font-bold ${getCategoryColor()} shadow-lg backdrop-blur-sm border border-white/20`}>
            {getCategoryIcon()}
            <span className="ml-2">
              {movie.seasons ? `${movie.seasons}S` : movie.year}
            </span>
          </div>

          {/* 🌟 TMDB BADGE sa poboljšanim stilom */}
          {posterUrl && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-black px-3 py-1 rounded-xl text-xs font-bold shadow-lg animate-glow border border-yellow-300/50">
              TMDB
            </div>
          )}

          {/* ⭐ POBOLJŠANI RATING BADGE */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <CircularRating rating={movie.rating} size={55} />
          </div>

          {/* 💖 AKCIJSKI DUGMAD - dodati favorite i bookmark */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FavoriteButton 
              isFavorite={isFavorite}
              onToggle={handleFavoriteToggle}
              size="sm"
            />
            <BookmarkButton 
              isBookmarked={isBookmarked}
              onToggle={handleBookmarkToggle}
              size="sm"
            />
          </div>

          {/* Loading overlay for actions */}
          {loading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Loader className="w-8 h-8 text-white animate-spin" />
            </div>
          )}
        </div>

        {/* 📄 POBOLJŠANI SADRŽAJ KARTICE */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              {/* 🎯 POBOLJŠANI NASLOV sa gradijentom */}
              <HighlightText className="text-xl font-bold mb-2 line-clamp-2 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 block">
                {movie.title}
              </HighlightText>
              {movie.originalTitle && (
                <BodyText size="sm" color="secondary" className="mb-3 line-clamp-1">
                  {movie.originalTitle}
                </BodyText>
              )}
            </div>
          </div>

          {/* 📊 POBOLJŠANI RATING DISPLAY */}
          <div className="flex items-center justify-between">
            <ModernRating rating={movie.rating} size="sm" showLabel={false} />
            <div className="flex items-center space-x-3 text-sm">
              <div className="flex items-center text-purple-300">
                <Calendar className="w-4 h-4 mr-1" />
                <span>📅 {movie.year}</span>
              </div>
              {movie.country && (
                <div className="flex items-center text-purple-300">
                  <Globe className="w-4 h-4 mr-1" />
                  <span>{movie.country}</span>
                </div>
              )}
            </div>
          </div>

          {/* 🎭 POBOLJŠANI GENRE TAGS */}
          <div className="flex flex-wrap gap-2">
            {movie.genre.slice(0, 3).map((g, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 text-xs rounded-full border border-purple-500/30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                {g}
              </span>
            ))}
          </div>

          {/* 📖 POBOLJŠANI OPIS */}
          <BodyText size="sm" className="leading-relaxed line-clamp-3">
            {movie.description}
          </BodyText>

          {/* 👨‍🎬 POBOLJŠANI FOOTER */}
          <div className="flex justify-between items-center pt-4 border-t border-purple-500/20">
            <div>
              <Label size="sm" color="muted">Režija:</Label>
              <BodyText size="sm" color="white" className="font-medium">
                {movie.director}
              </BodyText>
            </div>
            {movie.episodes && (
              <span className="text-purple-300 text-sm font-medium bg-purple-600/20 px-3 py-1 rounded-full border border-purple-500/30 shadow-lg">
                📺 {movie.episodes} ep.
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
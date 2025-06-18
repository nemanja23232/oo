import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { X, Star, Calendar, Globe, Tv, Film, Play, Clock, Users, Award, Loader, Info, Download as DownloadIcon, Video, Heart, Bookmark, Share2, Tag, Check, ExternalLink, Search, Youtube, Magnet, FileText, Shield, AlertTriangle, Server, Copy, CheckCircle, Smartphone, Settings, Terminal, Wifi, Lock, Languages, MapPin, TrendingUp, Zap, Crown, ArrowLeft } from 'lucide-react';
import { movies, Movie } from '../data/movies';
import { DownloadSection } from '../components/DownloadSection';
import { TrailerSection } from '../components/TrailerSection';
import { ModernRating, CircularRating } from '../components/ModernRating';
import { useTMDBData } from '../hooks/useTMDBData';
import toast from 'react-hot-toast';
import { playSuccessSound, playErrorSound } from '../utils/audio';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/supabase';

// Centralizacija boja kategorija
const categoryColors: Record<string, string> = {
  'domestic-series': 'bg-emerald-600',
  'foreign-series': 'bg-blue-600',
  'domestic-films': 'bg-purple-600',
  'foreign-films': 'bg-amber-600',
  'default': 'bg-gray-600'
};

type TabType = 'info' | 'trailers' | 'download' | 'details' | 'reviews';

export const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('info');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const [loading, setLoading] = useState(false);

  // Find the movie by ID
  const movie = movies.find(m => m.id === parseInt(id || '0'));
  
  // If movie not found, redirect to home
  useEffect(() => {
    if (!movie) {
      navigate('/');
    }
  }, [movie, navigate]);

  const { poster, backdrop, tmdbData, loading: tmdbLoading } = useTMDBData(
    movie?.title || '', 
    movie?.originalTitle, 
    movie?.year
  );

  // Load user's favorite/bookmark status
  useEffect(() => {
    const loadUserStatus = async () => {
      if (!user || !movie) return;
      
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
  }, [user, movie]);

  const handleFavoriteToggle = async () => {
    if (!user) {
      toast.error('Morate se prijaviti da biste dodali u omiljene');
      playErrorSound();
      navigate('/login');
      return;
    }
    
    if (!movie) return;
    
    setLoading(true);
    
    try {
      if (isFavorite) {
        await db.favorites.remove(user.id, movie.id);
        setIsFavorite(false);
        toast.success(`${movie.title} uklonjen iz omiljenih!`);
      } else {
        await db.favorites.add(user.id, movie.id);
        setIsFavorite(true);
        toast.success(`${movie.title} dodat u omiljene!`);
      }
      playSuccessSound();
    } catch (error) {
      console.error('Error toggling favorite:', error);
      toast.error('Greška pri dodavanju/uklanjanju iz omiljenih');
      playErrorSound();
    } finally {
      setLoading(false);
    }
  };

  const handleBookmarkToggle = async () => {
    if (!user) {
      toast.error('Morate se prijaviti da biste sačuvali za kasnije');
      playErrorSound();
      navigate('/login');
      return;
    }
    
    if (!movie) return;
    
    setLoading(true);
    
    try {
      if (isBookmarked) {
        await db.watchlist.remove(user.id, movie.id);
        setIsBookmarked(false);
        toast.success(`${movie.title} uklonjen iz liste za gledanje!`);
      } else {
        await db.watchlist.add(user.id, movie.id);
        setIsBookmarked(true);
        toast.success(`${movie.title} dodat u listu za gledanje!`);
      }
      playSuccessSound();
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      toast.error('Greška pri dodavanju/uklanjanju iz liste za gledanje');
      playErrorSound();
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share && movie) {
      navigator.share({
        title: movie.title,
        text: `Pogledaj ${movie.title} na Preporuka filmova`,
        url: window.location.href,
      }).then(() => {
        toast.success('Uspešno podeljeno!');
        playSuccessSound();
      }).catch(() => {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        toast.success('Link kopiran u clipboard!');
        playSuccessSound();
      });
    } else if (movie) {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link kopiran u clipboard!');
      playSuccessSound();
    }
  };

  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-16 h-16 text-purple-400 animate-spin mx-auto mb-4" />
          <div className="text-white text-2xl">Film nije pronađen...</div>
          <Link 
            to="/" 
            className="mt-4 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Nazad na početnu
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = () => {
    if (movie.category.includes('series')) {
      return <Tv className="w-6 h-6" />;
    }
    return <Film className="w-6 h-6" />;
  };

  const getCategoryColor = () => categoryColors[movie.category] || categoryColors.default;

  const getCategoryLabel = () => {
    switch (movie.category) {
      case 'domestic-series':
        return 'Domaća serija';
      case 'foreign-series':
        return 'Strana serija';
      case 'domestic-films':
        return 'Domaći film';
      case 'foreign-films':
        return 'Strani film';
      default:
        return 'Nepoznato';
    }
  };

  // KONZISTENTNO PRAVILO ZA BOJE OCENA
  const getRatingColorClass = (rating: number) => {
    if (rating >= 8.5) return 'text-emerald-400';  // 8.5+ = Zeleno
    if (rating >= 7.0) return 'text-yellow-400';   // 7.0-8.4 = Žuto
    return 'text-red-400';                         // <7.0 = Crveno
  };

  const getRatingLabel = (rating: number) => {
    if (rating >= 9.5) return 'Savršenstvo';
    if (rating >= 9.0) return 'Remek-delo';
    if (rating >= 8.5) return 'Izuzetno';
    if (rating >= 8.0) return 'Odlično';
    if (rating >= 7.5) return 'Vrlo dobro';
    if (rating >= 7.0) return 'Dobro';
    if (rating >= 6.5) return 'Solidno';
    if (rating >= 6.0) return 'Okej';
    return 'Prosečno';
  };

  const getBackgroundImage = () => {
    if (backdrop) {
      return {
        backgroundImage: `url(${backdrop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }
    return {};
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Back to Home Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          to="/"
          className="flex items-center px-4 py-2 bg-black/80 hover:bg-black/95 text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          aria-label="Nazad na početnu"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Početna
        </Link>
      </div>

      {/* 🎬 OGROMNI HEADER - 50% visine stranice */}
      <div 
        className="relative h-[50vh] bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 overflow-hidden flex-shrink-0"
        style={getBackgroundImage()}
      >
        {tmdbLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/70 backdrop-blur-sm">
            <div className="text-center">
              <Loader className="w-16 h-16 text-purple-400 animate-spin mx-auto mb-4" />
              <div className="text-purple-300 text-2xl font-bold">Učitavam TMDB podatke...</div>
            </div>
          </div>
        )}
        
        {/* Poboljšani gradient overlay */}
        <div className={`absolute inset-0 ${backdrop ? 'bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-gray-900/20' : 'bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent'}`}></div>
        
        {/* Category & TMDB badges */}
        <div className="absolute top-8 right-8 z-20 flex flex-col gap-4">
          <div className={`flex items-center px-8 py-4 rounded-2xl text-white font-bold ${getCategoryColor()} shadow-2xl backdrop-blur-sm text-xl border border-white/30`}>
            {getCategoryIcon()}
            <span className="ml-4">{getCategoryLabel()}</span>
          </div>
          {(poster || backdrop) && (
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-2xl text-lg font-bold shadow-2xl border border-yellow-300">
              🎬 TMDB Data
            </div>
          )}
        </div>

        {/* 🎯 GLAVNI SADRŽAJ HEADER-a */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-20">
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">
            
            {/* Levi deo - tekstualni sadržaj */}
            <div className="flex-1 max-w-5xl">
              {/* Naziv filma */}
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                {movie.title}
              </h1>
              {movie.originalTitle && (
                <p className="text-2xl sm:text-3xl xl:text-4xl text-purple-200 mb-8 font-medium drop-shadow-lg">{movie.originalTitle}</p>
              )}
              
              {/* Osnovni podaci */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="transform scale-125">
                  <ModernRating rating={movie.rating} size="lg" />
                </div>
                <div className="flex items-center text-white bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-sm text-xl font-bold border border-white/30">
                  <Calendar className="w-6 h-6 mr-3" />
                  <span>{movie.year}</span>
                </div>
                {movie.country && (
                  <div className="flex items-center text-white bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-sm text-xl font-bold border border-white/30">
                    <Globe className="w-6 h-6 mr-3" />
                    <span>{movie.country}</span>
                  </div>
                )}
                {movie.seasons && (
                  <div className="flex items-center text-white bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-sm text-xl font-bold border border-white/30">
                    <Tv className="w-6 h-6 mr-3" />
                    <span>{movie.seasons} sezona</span>
                  </div>
                )}
                {movie.episodes && (
                  <div className="flex items-center text-white bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-sm text-xl font-bold border border-white/30">
                    <Clock className="w-6 h-6 mr-3" />
                    <span>{movie.episodes} epizoda</span>
                  </div>
                )}
              </div>

              {/* Žanrovi */}
              <div className="flex flex-wrap gap-4">
                {movie.genre.slice(0, 5).map((genre, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600/70 to-pink-600/70 text-white rounded-2xl border border-purple-400/50 font-bold text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-xl"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Desni deo - poster */}
            <div className="w-full xl:w-auto flex justify-center xl:justify-end">
              <div className="w-64 sm:w-72 xl:w-80 h-80 sm:h-96 xl:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 transform hover:scale-105 transition-all duration-300 flex-shrink-0">
                {poster ? (
                  <img 
                    src={poster} 
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <Film className="w-24 h-24 text-white/70" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🗂️ PROŠIRENI TABOVI - 5 tabova */}
      <div className="border-b border-purple-500/30 bg-gray-800/90 backdrop-blur-sm flex-shrink-0">
        <div className="flex justify-around">
          {[
            { id: 'info', label: 'Informacije', icon: Info },
            { id: 'details', label: 'Detalji', icon: Award },
            { id: 'trailers', label: 'Traileri', icon: Video },
            { id: 'download', label: 'Preuzmi', icon: DownloadIcon },
            { id: 'reviews', label: 'Ocene', icon: Star }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as TabType)}
              className={`flex-1 flex items-center justify-center px-4 py-6 font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 ${
                activeTab === id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-b-4 border-purple-400 shadow-lg'
                  : 'text-purple-300 hover:text-white hover:bg-purple-600/20'
              }`}
              aria-label={`Prikaži ${label.toLowerCase()}`}
            >
              <Icon className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 📄 OGROMNI SADRŽAJ - koristi ostatak prostora */}
      <div className="flex-grow overflow-y-auto p-8 sm:p-12">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Akcijski dugmad - MANJE ŠARENO */}
          <div className="flex flex-wrap gap-6 justify-center">
            <button 
              onClick={handleFavoriteToggle}
              disabled={loading}
              className={`flex items-center px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed ${
                isFavorite 
                  ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white focus:ring-red-500/50' 
                  : 'bg-gray-800/50 text-purple-300 hover:bg-gray-700/50 focus:ring-gray-500/50 border border-purple-500/30'
              }`}
              aria-label="Dodaj u omiljene"
            >
              <Heart className={`w-6 h-6 mr-3 ${isFavorite ? 'fill-current' : ''}`} />
              {loading ? 'Učitavam...' : isFavorite ? 'Ukloni iz omiljenih' : 'Dodaj u omiljene'}
            </button>
            <button 
              onClick={handleBookmarkToggle}
              disabled={loading}
              className={`flex items-center px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed ${
                isBookmarked 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white focus:ring-purple-500/50' 
                  : 'bg-gray-800/50 text-purple-300 hover:bg-gray-700/50 focus:ring-gray-500/50 border border-purple-500/30'
              }`}
              aria-label="Sačuvaj za kasnije"
            >
              <Bookmark className={`w-6 h-6 mr-3 ${isBookmarked ? 'fill-current' : ''}`} />
              {loading ? 'Učitavam...' : isBookmarked ? 'Uklonjeno' : 'Sačuvaj za kasnije'}
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center px-8 py-4 bg-gray-800/50 text-purple-300 rounded-2xl font-bold hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-500/50 border border-purple-500/30"
              aria-label="Podeli film"
            >
              <Share2 className="w-6 h-6 mr-3" />
              Podeli
            </button>
          </div>

          {/* TAB CONTENT */}
          {activeTab === 'info' && (
            <div className="space-y-12">
              {/* Osnovne informacije */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                
                {/* Osnovni podaci */}
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 shadow-xl">
                  <h3 className="text-3xl font-bold text-purple-400 mb-8 flex items-center">
                    <Film className="w-8 h-8 mr-4" />
                    Osnovne informacije
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                      <span className="text-gray-300 text-xl">Tip:</span>
                      <span className="text-white font-bold text-xl">{getCategoryLabel()}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                      <span className="text-gray-300 text-xl">Godina:</span>
                      <span className="text-white font-bold text-xl">{movie.year}</span>
                    </div>
                    {movie.country && (
                      <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                        <span className="text-gray-300 text-xl">Zemlja:</span>
                        <span className="text-white font-bold text-xl flex items-center">
                          <MapPin className="w-5 h-5 mr-2" />
                          {movie.country}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-300 text-xl">Režija:</span>
                      <span className="text-white font-bold text-xl">{movie.director}</span>
                    </div>
                  </div>
                </div>

                {/* Ocena i kvalitet */}
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 shadow-xl">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center">
                    <Star className="w-8 h-8 mr-4" />
                    Ocena i kvalitet
                  </h3>
                  <div className="text-center">
                    <div className={`text-7xl font-bold mb-4 ${getRatingColorClass(movie.rating)}`}>
                      {movie.rating.toFixed(1)}
                    </div>
                    <div className={`font-bold text-2xl mb-6 ${getRatingColorClass(movie.rating)}`}>
                      {getRatingLabel(movie.rating)}
                    </div>
                    <div className="bg-green-600/20 rounded-2xl p-6 border border-green-500/30">
                      <div className="text-green-400 text-xl font-bold flex items-center justify-center">
                        <Check className="w-6 h-6 mr-3" />
                        Preporučeno za gledanje
                      </div>
                    </div>
                  </div>
                </div>

                {/* TMDB statistike */}
                {tmdbData && (
                  <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 shadow-xl">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-8 flex items-center">
                      <Award className="w-8 h-8 mr-4" />
                      TMDB statistike
                    </h3>
                    <div className="space-y-6">
                      <div className="text-center py-3 border-b border-gray-700/50">
                        <span className="text-gray-300 text-xl block">TMDB ocena:</span>
                        <div className={`font-bold text-4xl ${getRatingColorClass(tmdbData.vote_average || 0)}`}>
                          {tmdbData.vote_average?.toFixed(1)}/10
                        </div>
                      </div>
                      <div className="text-center py-3 border-b border-gray-700/50">
                        <span className="text-gray-300 text-xl block">Popularnost:</span>
                        <div className="text-blue-400 font-bold text-4xl">{tmdbData.popularity?.toFixed(0)}</div>
                      </div>
                      {tmdbData.release_date && (
                        <div className="text-center py-3">
                          <span className="text-gray-300 text-xl block">Datum izlaska:</span>
                          <div className="text-white font-bold text-xl">
                            {new Date(tmdbData.release_date).toLocaleDateString('sr-RS')}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Žanrovi - ISPRAVLJENA IKONA */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 shadow-xl">
                <h3 className="text-4xl font-bold text-purple-400 mb-10 flex items-center">
                  <Tag className="w-10 h-10 mr-4" />
                  🎭 Žanrovi
                </h3>
                <div className="flex flex-wrap gap-6 justify-center">
                  {movie.genre.map((genre, index) => (
                    <span
                      key={index}
                      className="px-8 py-4 bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-purple-200 rounded-2xl border border-purple-500/40 font-bold text-2xl transform hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* Opis - TEKST LEVO PORAVNAN */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 shadow-xl">
                <h3 className="text-4xl font-bold text-green-400 mb-10 flex items-center">
                  <Users className="w-10 h-10 mr-4" />
                  📖 Detaljni opis
                </h3>
                <div className="max-w-5xl mx-auto">
                  <p className="text-gray-200 text-2xl leading-relaxed mb-10 text-left">
                    {movie.description}
                  </p>
                  
                  <div className="bg-green-600/20 rounded-2xl p-8 border border-green-500/30">
                    <h4 className="text-white font-bold mb-8 text-3xl text-center flex items-center justify-center">
                      <Check className="w-8 h-8 mr-3" />
                      💡 Zašto preporučujemo:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="text-gray-300 space-y-4 text-xl">
                        <li className="flex items-center">
                          <Star className="w-6 h-6 mr-4 text-yellow-400" />
                          Ocena {movie.rating}/10 - {getRatingLabel(movie.rating).toLowerCase()}
                        </li>
                        <li className="flex items-center">
                          <Calendar className="w-6 h-6 mr-4 text-blue-400" />
                          {movie.year >= 2010 ? 'Moderan sadržaj' : 'Klasik'} iz {movie.year}. godine
                        </li>
                        <li className="flex items-center">
                          <Film className="w-6 h-6 mr-4 text-purple-400" />
                          Žanr: {movie.genre.slice(0, 2).join(', ')}
                        </li>
                      </ul>
                      <ul className="text-gray-300 space-y-4 text-xl">
                        {movie.country && (
                          <li className="flex items-center">
                            <Globe className="w-6 h-6 mr-4 text-green-400" />
                            Produkcija: {movie.country}
                          </li>
                        )}
                        <li className="flex items-center">
                          <Users className="w-6 h-6 mr-4 text-orange-400" />
                          Režija: {movie.director}
                        </li>
                        <li className="flex items-center">
                          <Award className="w-6 h-6 mr-4 text-pink-400" />
                          Preporučeno za gledanje
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* TMDB dodatne informacije */}
              {tmdbData && tmdbData.overview && (
                <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 shadow-xl">
                  <h3 className="text-4xl font-bold text-yellow-400 mb-10 flex items-center">
                    <Globe className="w-10 h-10 mr-4" />
                    🌍 Dodatne informacije (TMDB)
                  </h3>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-white font-bold mb-6 text-2xl">Originalni opis (engleski):</h4>
                      <p className="text-gray-300 leading-relaxed text-xl text-left">{tmdbData.overview}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-6 text-2xl">TMDB statistike:</h4>
                      <div className="space-y-6 text-xl">
                        <div className="flex justify-between py-3 border-b border-gray-700/50">
                          <span className="text-gray-300">TMDB ocena:</span>
                          <span className={`font-bold ${getRatingColorClass(tmdbData.vote_average || 0)}`}>
                            {tmdbData.vote_average?.toFixed(1)}/10
                          </span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-700/50">
                          <span className="text-gray-300">Popularnost:</span>
                          <span className="text-blue-400 font-bold">{tmdbData.popularity?.toFixed(0)}</span>
                        </div>
                        {tmdbData.release_date && (
                          <div className="flex justify-between py-3">
                            <span className="text-gray-300">Datum izlaska:</span>
                            <span className="text-white font-bold">
                              {new Date(tmdbData.release_date).toLocaleDateString('sr-RS')}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-12">
              {/* Tehnički detalji */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 shadow-xl">
                <h3 className="text-4xl font-bold text-blue-400 mb-10 flex items-center">
                  <Settings className="w-10 h-10 mr-4" />
                  🔧 Tehnički detalji
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-blue-600/20 rounded-2xl p-6 border border-blue-500/30">
                    <h4 className="text-blue-400 font-bold text-xl mb-4">Kategorija</h4>
                    <p className="text-white text-lg">{getCategoryLabel()}</p>
                  </div>
                  <div className="bg-purple-600/20 rounded-2xl p-6 border border-purple-500/30">
                    <h4 className="text-purple-400 font-bold text-xl mb-4">Godina produkcije</h4>
                    <p className="text-white text-lg">{movie.year}</p>
                  </div>
                  <div className="bg-green-600/20 rounded-2xl p-6 border border-green-500/30">
                    <h4 className="text-green-400 font-bold text-xl mb-4">Zemlja porekla</h4>
                    <p className="text-white text-lg">{movie.country || 'Nepoznato'}</p>
                  </div>
                  {movie.seasons && (
                    <div className="bg-amber-600/20 rounded-2xl p-6 border border-amber-500/30">
                      <h4 className="text-amber-400 font-bold text-xl mb-4">Broj sezona</h4>
                      <p className="text-white text-lg">{movie.seasons}</p>
                    </div>
                  )}
                  {movie.episodes && (
                    <div className="bg-red-600/20 rounded-2xl p-6 border border-red-500/30">
                      <h4 className="text-red-400 font-bold text-xl mb-4">Broj epizoda</h4>
                      <p className="text-white text-lg">{movie.episodes}</p>
                    </div>
                  )}
                  <div className="bg-pink-600/20 rounded-2xl p-6 border border-pink-500/30">
                    <h4 className="text-pink-400 font-bold text-xl mb-4">Režiser</h4>
                    <p className="text-white text-lg">{movie.director}</p>
                  </div>
                </div>
              </div>

              {/* Analiza žanrova */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 shadow-xl">
                <h3 className="text-4xl font-bold text-purple-400 mb-10 flex items-center">
                  <Tag className="w-10 h-10 mr-4" />
                  🎭 Analiza žanrova
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-bold text-2xl mb-6">Glavni žanrovi:</h4>
                    <div className="space-y-4">
                      {movie.genre.map((genre, index) => (
                        <div key={index} className="flex items-center justify-between bg-purple-600/20 rounded-xl p-4 border border-purple-500/30">
                          <span className="text-purple-200 text-lg font-medium">{genre}</span>
                          <div className="w-16 h-2 bg-purple-600/30 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              style={{ width: `${100 - (index * 15)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-2xl mb-6">Karakteristike:</h4>
                    <div className="space-y-4">
                      <div className="bg-blue-600/20 rounded-xl p-4 border border-blue-500/30">
                        <span className="text-blue-200 text-lg">
                          {movie.rating >= 8.5 ? '🏆 Visoko ocenjen sadržaj' :
                           movie.rating >= 7.5 ? '⭐ Kvalitetan sadržaj' :
                           movie.rating >= 7.0 ? '👍 Dobar sadržaj' :
                           '📺 Standardan sadržaj'}
                        </span>
                      </div>
                      <div className="bg-green-600/20 rounded-xl p-4 border border-green-500/30">
                        <span className="text-green-200 text-lg">
                          {movie.year >= 2020 ? '🆕 Noviji sadržaj' :
                           movie.year >= 2010 ? '🎬 Moderan sadržaj' :
                           movie.year >= 2000 ? '📼 Sadržaj iz 2000-ih' :
                           '🎞️ Klasičan sadržaj'}
                        </span>
                      </div>
                      <div className="bg-amber-600/20 rounded-xl p-4 border border-amber-500/30">
                        <span className="text-amber-200 text-lg">
                          {movie.category.includes('series') ? '📺 Serijski format' : '🎬 Filmski format'}
                        </span>
                      </div>
                      <div className="bg-pink-600/20 rounded-xl p-4 border border-pink-500/30">
                        <span className="text-pink-200 text-lg">
                          {movie.category.includes('domestic') ? '🇷🇸 Domaća produkcija' : '🌍 Strana produkcija'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trailers' && (
            <div className="max-w-6xl mx-auto">
              <TrailerSection 
                movieTitle={movie.title}
                originalTitle={movie.originalTitle}
                year={movie.year}
              />
            </div>
          )}

          {activeTab === 'download' && (
            <div className="max-w-6xl mx-auto">
              <DownloadSection 
                movieTitle={movie.title}
                year={movie.year}
                originalTitle={movie.originalTitle}
              />
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-12">
              {/* Ocena pregled */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 shadow-xl">
                <h3 className="text-4xl font-bold text-yellow-400 mb-10 flex items-center">
                  <Star className="w-10 h-10 mr-4" />
                  ⭐ Pregled ocena
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="text-center">
                    <div className="mb-8">
                      <div className={`text-8xl font-bold mb-4 ${getRatingColorClass(movie.rating)}`}>
                        {movie.rating.toFixed(1)}
                      </div>
                      <div className={`text-3xl font-bold mb-2 ${getRatingColorClass(movie.rating)}`}>
                        {getRatingLabel(movie.rating)}
                      </div>
                      <div className="text-gray-400 text-xl">Naša ocena</div>
                    </div>
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-8 h-8 mx-1 ${
                            i < Math.floor(movie.rating / 2) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {tmdbData && (
                    <div className="text-center">
                      <div className="mb-8">
                        <div className={`text-8xl font-bold mb-4 ${getRatingColorClass(tmdbData.vote_average || 0)}`}>
                          {tmdbData.vote_average?.toFixed(1) || 'N/A'}
                        </div>
                        <div className={`text-3xl font-bold mb-2 ${getRatingColorClass(tmdbData.vote_average || 0)}`}>
                          {getRatingLabel(tmdbData.vote_average || 0)}
                        </div>
                        <div className="text-gray-400 text-xl">TMDB ocena</div>
                      </div>
                      <div className="bg-yellow-600/20 rounded-2xl p-6 border border-yellow-500/30">
                        <div className="text-yellow-400 text-xl font-bold">
                          Popularnost: {tmdbData.popularity?.toFixed(0) || 'N/A'}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Preporuke na osnovu ocene */}
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 shadow-xl">
                <h3 className="text-4xl font-bold text-green-400 mb-10 flex items-center">
                  <TrendingUp className="w-10 h-10 mr-4" />
                  📊 Analiza kvaliteta
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-green-600/20 rounded-2xl p-8 border border-green-500/30 text-center">
                    <Crown className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h4 className="text-green-400 font-bold text-xl mb-4">Kvalitet</h4>
                    <div className="text-white text-lg">
                      {movie.rating >= 9.0 ? 'Remek-delo' :
                       movie.rating >= 8.5 ? 'Izuzetno' :
                       movie.rating >= 8.0 ? 'Odlično' :
                       movie.rating >= 7.5 ? 'Vrlo dobro' :
                       movie.rating >= 7.0 ? 'Dobro' :
                       'Solidno'}
                    </div>
                  </div>
                  
                  <div className="bg-blue-600/20 rounded-2xl p-8 border border-blue-500/30 text-center">
                    <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-blue-400 font-bold text-xl mb-4">Preporuka</h4>
                    <div className="text-white text-lg">
                      {movie.rating >= 8.5 ? 'Obavezno gledanje' :
                       movie.rating >= 8.0 ? 'Toplo preporučujemo' :
                       movie.rating >= 7.5 ? 'Preporučujemo' :
                       movie.rating >= 7.0 ? 'Vredi pogledati' :
                       'Za ljubitelje žanra'}
                    </div>
                  </div>
                  
                  <div className="bg-purple-600/20 rounded-2xl p-8 border border-purple-500/30 text-center">
                    <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h4 className="text-purple-400 font-bold text-xl mb-4">Status</h4>
                    <div className="text-white text-lg">
                      {movie.rating >= 9.0 ? 'Kultni status' :
                       movie.rating >= 8.5 ? 'Visoko cenjen' :
                       movie.rating >= 8.0 ? 'Priznati kvalitet' :
                       movie.rating >= 7.5 ? 'Dobra reputacija' :
                       'Standardan sadržaj'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
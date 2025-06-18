import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db, supabase } from '../lib/supabase';
import { movies } from '../data/movies';
import { MovieCard } from '../components/MovieCard';
import { 
  User, 
  Heart, 
  Bookmark, 
  Star, 
  Settings, 
  LogOut, 
  ArrowLeft,
  Film,
  Tv,
  TrendingUp,
  Calendar,
  Award,
  Eye,
  Clock,
  BarChart3,
  Loader,
  Plus,
  Camera,
  Edit3,
  Save,
  X
} from 'lucide-react';
import toast from 'react-hot-toast';
import { playSuccessSound, playErrorSound } from '../utils/audio';

type TabType = 'overview' | 'favorites' | 'watchlist' | 'ratings' | 'profile';

export const DashboardPage: React.FC = () => {
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [userFavorites, setUserFavorites] = useState<number[]>([]);
  const [userWatchlist, setUserWatchlist] = useState<number[]>([]);
  const [userRatings, setUserRatings] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Profile editing states
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [newFullName, setNewFullName] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [profileLoading, setProfileLoading] = useState(false);

  // Load user data from Supabase
  useEffect(() => {
    const loadUserData = async () => {
      if (!user) return;
      
      setLoading(true);
      setError(null);
      
      try {
        // Load favorites
        const { data: favoritesData, error: favoritesError } = await db.favorites.get(user.id);
        if (favoritesError) throw favoritesError;
        
        // Load watchlist
        const { data: watchlistData, error: watchlistError } = await db.watchlist.get(user.id);
        if (watchlistError) throw watchlistError;
        
        // Load ratings
        const { data: ratingsData, error: ratingsError } = await db.ratings.get(user.id);
        if (ratingsError) throw ratingsError;
        
        // Set state with actual data from Supabase
        setUserFavorites(favoritesData?.map(item => item.movie_id) || []);
        setUserWatchlist(watchlistData?.map(item => item.movie_id) || []);
        
        const ratingsMap: Record<number, number> = {};
        ratingsData?.forEach(item => {
          ratingsMap[item.movie_id] = item.rating;
        });
        setUserRatings(ratingsMap);
        
      } catch (err) {
        console.error('Error loading user data:', err);
        setError('Greška pri učitavanju podataka');
        // Set empty state on error
        setUserFavorites([]);
        setUserWatchlist([]);
        setUserRatings({});
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [user]);

  // Initialize profile editing data
  useEffect(() => {
    if (user) {
      setNewFullName(user.user_metadata?.full_name || '');
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error('Slika je prevelika. Maksimalna veličina je 5MB.');
        playErrorSound();
        return;
      }
      
      setAvatarFile(file);
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    
    setProfileLoading(true);
    
    try {
      let avatarUrl = user.user_metadata?.avatar_url;
      
      // Upload avatar if changed
      if (avatarFile) {
        const fileExt = avatarFile.name.split('.').pop();
        const fileName = `${user.id}-${Date.now()}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(fileName, avatarFile);
        
        if (uploadError) throw uploadError;
        
        const { data: urlData } = supabase.storage
          .from('avatars')
          .getPublicUrl(fileName);
        
        avatarUrl = urlData.publicUrl;
      }
      
      // Update user profile
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          full_name: newFullName,
          avatar_url: avatarUrl
        }
      });
      
      if (updateError) throw updateError;
      
      toast.success('Profil je uspešno ažuriran!');
      playSuccessSound();
      setIsEditingProfile(false);
      setAvatarFile(null);
      setAvatarPreview(null);
      
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Greška pri ažuriranju profila');
      playErrorSound();
    } finally {
      setProfileLoading(false);
    }
  };

  const favoriteMovies = movies.filter(movie => userFavorites.includes(movie.id));
  const watchlistMovies = movies.filter(movie => userWatchlist.includes(movie.id));
  const ratedMovies = movies.filter(movie => movie.id in userRatings);

  const stats = {
    totalFavorites: favoriteMovies.length,
    totalWatchlist: watchlistMovies.length,
    totalRatings: ratedMovies.length,
    averageRating: ratedMovies.length > 0 
      ? Object.values(userRatings).reduce((sum, rating) => sum + rating, 0) / Object.values(userRatings).length
      : 0
  };

  const tabs = [
    { id: 'overview', label: 'Pregled', icon: BarChart3 },
    { id: 'favorites', label: 'Omiljeni', icon: Heart },
    { id: 'watchlist', label: 'Lista za gledanje', icon: Bookmark },
    { id: 'ratings', label: 'Ocene', icon: Star },
    { id: 'profile', label: 'Profil', icon: User }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-16 h-16 text-purple-400 animate-spin mx-auto mb-4" />
          <div className="text-white text-2xl font-bold">Učitavam vaše podatke...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/355be36d-2a46-4146-b484-4005ebee7d9d.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-900/95"></div>
      
      <div className="relative">
        {/* Header */}
        <header className="bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 bg-purple-600/20 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Početna
                </Link>
                <div className="flex items-center space-x-4">
                  {/* User Avatar */}
                  {user?.user_metadata?.avatar_url ? (
                    <img
                      src={user.user_metadata.avatar_url}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full border-2 border-purple-400/50"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Dashboard
                    </h1>
                    <p className="text-purple-300">Dobrodošli, {user?.user_metadata?.full_name || user?.email}</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleSignOut}
                className="flex items-center px-4 py-2 bg-red-600/20 text-red-300 rounded-xl hover:bg-red-600/30 transition-all duration-300"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Odjavi se
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Error Message */}
          {error && (
            <div className="mb-8 bg-red-600/20 border border-red-500/30 rounded-xl p-4 text-center">
              <p className="text-red-300">{error}</p>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Omiljeni filmovi</p>
                  <p className="text-3xl font-bold text-white">{stats.totalFavorites}</p>
                </div>
                <Heart className="w-8 h-8 text-red-400" />
              </div>
            </div>
            
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Lista za gledanje</p>
                  <p className="text-3xl font-bold text-white">{stats.totalWatchlist}</p>
                </div>
                <Bookmark className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Ocenjeno</p>
                  <p className="text-3xl font-bold text-white">{stats.totalRatings}</p>
                </div>
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm">Prosečna ocena</p>
                  <p className="text-3xl font-bold text-white">
                    {stats.averageRating > 0 ? stats.averageRating.toFixed(1) : '0.0'}
                  </p>
                </div>
                <Award className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-purple-500/30 overflow-hidden">
            <div className="flex border-b border-purple-500/30">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as TabType)}
                  className={`flex-1 flex items-center justify-center px-6 py-4 font-semibold transition-all duration-300 ${
                    activeTab === id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'text-purple-300 hover:text-white hover:bg-purple-600/20'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>

            <div className="p-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">📊 Pregled aktivnosti</h2>
                    
                    {/* Check if user has any activity */}
                    {stats.totalFavorites === 0 && stats.totalWatchlist === 0 && stats.totalRatings === 0 ? (
                      <div className="text-center py-12">
                        <div className="bg-gray-700/30 rounded-2xl p-12 max-w-2xl mx-auto">
                          <BarChart3 className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                          <h3 className="text-2xl font-bold text-white mb-4">Dobrodošli na vaš dashboard!</h3>
                          <p className="text-gray-300 text-lg mb-8">
                            Počnite da istražujete filmove i serije. Dodajte ih u omiljene, sačuvajte za kasnije ili ocenite.
                          </p>
                          <Link
                            to="/"
                            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                          >
                            <Plus className="w-5 h-5 mr-2" />
                            Istražite filmove
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Recent Favorites */}
                        {favoriteMovies.length > 0 && (
                          <div>
                            <h3 className="text-xl font-semibold text-purple-400 mb-4">Poslednji omiljeni</h3>
                            <div className="space-y-4">
                              {favoriteMovies.slice(0, 3).map(movie => (
                                <Link
                                  key={movie.id}
                                  to={`/film/${movie.id}`}
                                  className="flex items-center space-x-4 bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-colors"
                                >
                                  <Film className="w-8 h-8 text-purple-400" />
                                  <div>
                                    <p className="text-white font-medium">{movie.title}</p>
                                    <p className="text-gray-400 text-sm">{movie.year} • {movie.rating}/10</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Recent Watchlist */}
                        {watchlistMovies.length > 0 && (
                          <div>
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">Lista za gledanje</h3>
                            <div className="space-y-4">
                              {watchlistMovies.slice(0, 3).map(movie => (
                                <Link
                                  key={movie.id}
                                  to={`/film/${movie.id}`}
                                  className="flex items-center space-x-4 bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-colors"
                                >
                                  <Bookmark className="w-8 h-8 text-blue-400" />
                                  <div>
                                    <p className="text-white font-medium">{movie.title}</p>
                                    <p className="text-gray-400 text-sm">{movie.year} • {movie.rating}/10</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Favorites Tab */}
              {activeTab === 'favorites' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">❤️ Omiljeni filmovi i serije</h2>
                  {favoriteMovies.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {favoriteMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gray-700/30 rounded-2xl p-12 max-w-md mx-auto">
                        <Heart className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Nemate omiljene filmove</h3>
                        <p className="text-gray-300 text-lg mb-8">
                          Dodajte filmove u omiljene klikom na ❤️ dugme na stranici filma.
                        </p>
                        <Link
                          to="/"
                          className="inline-flex items-center bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                        >
                          <Heart className="w-5 h-5 mr-2" />
                          Istražite filmove
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Watchlist Tab */}
              {activeTab === 'watchlist' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">🔖 Lista za gledanje</h2>
                  {watchlistMovies.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {watchlistMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gray-700/30 rounded-2xl p-12 max-w-md mx-auto">
                        <Bookmark className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Vaša lista za gledanje je prazna</h3>
                        <p className="text-gray-300 text-lg mb-8">
                          Sačuvajte filmove za kasnije gledanje klikom na 🔖 dugme.
                        </p>
                        <Link
                          to="/"
                          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                        >
                          <Bookmark className="w-5 h-5 mr-2" />
                          Dodajte filmove
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Ratings Tab */}
              {activeTab === 'ratings' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">⭐ Vaše ocene</h2>
                  {ratedMovies.length > 0 ? (
                    <div className="space-y-4">
                      {ratedMovies.map(movie => (
                        <div key={movie.id} className="bg-gray-700/30 rounded-xl p-6 flex items-center justify-between hover:bg-gray-700/50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                              <Film className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-lg">{movie.title}</h3>
                              <p className="text-gray-400">{movie.year} • {movie.director}</p>
                              <div className="flex items-center mt-2">
                                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                <span className="text-yellow-400 font-medium">
                                  Vaša ocena: {userRatings[movie.id]}/10
                                </span>
                              </div>
                            </div>
                          </div>
                          <Link
                            to={`/film/${movie.id}`}
                            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                          >
                            Pogledaj
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gray-700/30 rounded-2xl p-12 max-w-md mx-auto">
                        <Star className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Niste ocenili nijedan film</h3>
                        <p className="text-gray-300 text-lg mb-8">
                          Ocenite filmove koje ste gledali da biste pomogli drugima.
                        </p>
                        <Link
                          to="/"
                          className="inline-flex items-center bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                        >
                          <Star className="w-5 h-5 mr-2" />
                          Počnite sa ocenjivanjem
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">👤 Profil</h2>
                  <div className="max-w-2xl">
                    <div className="bg-gray-700/30 rounded-xl p-6 space-y-6">
                      {!isEditingProfile ? (
                        <>
                          <div className="flex items-center space-x-6">
                            <div className="relative">
                              {user?.user_metadata?.avatar_url ? (
                                <img
                                  src={user.user_metadata.avatar_url}
                                  alt="Avatar"
                                  className="w-20 h-20 rounded-full border-2 border-purple-400/50"
                                />
                              ) : (
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                                  <User className="w-10 h-10 text-white" />
                                </div>
                              )}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-white">
                                {user?.user_metadata?.full_name || 'Korisnik'}
                              </h3>
                              <p className="text-gray-400">{user?.email}</p>
                              <p className="text-purple-300 text-sm">
                                Član od {new Date(user?.created_at || '').toLocaleDateString('sr-RS')}
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-800/50 rounded-lg p-4">
                              <p className="text-gray-400 text-sm">Ukupno aktivnosti</p>
                              <p className="text-2xl font-bold text-white">
                                {stats.totalFavorites + stats.totalWatchlist + stats.totalRatings}
                              </p>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-4">
                              <p className="text-gray-400 text-sm">Prosečna ocena</p>
                              <p className="text-2xl font-bold text-white">
                                {stats.averageRating > 0 ? stats.averageRating.toFixed(1) : '0.0'}
                              </p>
                            </div>
                          </div>
                          
                          <button 
                            onClick={() => setIsEditingProfile(true)}
                            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                          >
                            <Edit3 className="w-5 h-5 mr-2" />
                            Uredi profil
                          </button>
                        </>
                      ) : (
                        <>
                          {/* Profile Editing Form */}
                          <div className="space-y-6">
                            {/* Avatar Upload */}
                            <div className="text-center">
                              <div className="relative inline-block">
                                {avatarPreview || user?.user_metadata?.avatar_url ? (
                                  <img
                                    src={avatarPreview || user?.user_metadata?.avatar_url}
                                    alt="Avatar"
                                    className="w-24 h-24 rounded-full border-2 border-purple-400/50"
                                  />
                                ) : (
                                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                                    <User className="w-12 h-12 text-white" />
                                  </div>
                                )}
                                <label className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full cursor-pointer transition-colors">
                                  <Camera className="w-4 h-4" />
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                    className="hidden"
                                  />
                                </label>
                              </div>
                              <p className="text-gray-400 text-sm mt-2">Kliknite da promenite sliku</p>
                            </div>

                            {/* Full Name Input */}
                            <div>
                              <label className="block text-white font-semibold mb-2">
                                Puno ime
                              </label>
                              <input
                                type="text"
                                value={newFullName}
                                onChange={(e) => setNewFullName(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300"
                                placeholder="Unesite vaše ime"
                              />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-4">
                              <button
                                onClick={handleSaveProfile}
                                disabled={profileLoading}
                                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                              >
                                {profileLoading ? (
                                  <Loader className="w-5 h-5 animate-spin mr-2" />
                                ) : (
                                  <Save className="w-5 h-5 mr-2" />
                                )}
                                Sačuvaj
                              </button>
                              <button
                                onClick={() => {
                                  setIsEditingProfile(false);
                                  setAvatarFile(null);
                                  setAvatarPreview(null);
                                  setNewFullName(user?.user_metadata?.full_name || '');
                                }}
                                className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                              >
                                <X className="w-5 h-5 mr-2" />
                                Otkaži
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clapperboard, Filter, Menu, X, Server, User, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { movies, Movie } from '../data/movies';
import { MovieCard } from './MovieCard';
import { SearchBar } from './SearchBar';
import { CategoryTabs, CategoryType } from './CategoryTabs';
import { Stats } from './Stats';
import { FilterPanel } from './FilterPanel';

interface FilterState {
  rating: number;
  yearFrom: string;
  yearTo: string;
  selectedGenres: string[];
}

export const HomePageContent: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    rating: 1,
    yearFrom: '',
    yearTo: '',
    selectedGenres: []
  });

  const filteredMovies = useMemo(() => {
    let filtered = movies;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(movie => movie.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase())) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (movie.originalTitle && movie.originalTitle.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply advanced filters
    filtered = filtered.filter(movie => {
      // Rating filter
      if (movie.rating < appliedFilters.rating) return false;
      
      // Year filter
      if (appliedFilters.yearFrom && movie.year < parseInt(appliedFilters.yearFrom)) return false;
      if (appliedFilters.yearTo && movie.year > parseInt(appliedFilters.yearTo)) return false;
      
      // Genre filter
      if (appliedFilters.selectedGenres.length > 0) {
        const hasMatchingGenre = appliedFilters.selectedGenres.some(selectedGenre =>
          movie.genre.includes(selectedGenre)
        );
        if (!hasMatchingGenre) return false;
      }
      
      return true;
    });

    return filtered;
  }, [searchTerm, activeCategory, appliedFilters]);

  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryType, number> = {
      all: movies.length,
      'domestic-series': movies.filter(m => m.category === 'domestic-series').length,
      'foreign-series': movies.filter(m => m.category === 'foreign-series').length,
      'domestic-films': movies.filter(m => m.category === 'domestic-films').length,
      'foreign-films': movies.filter(m => m.category === 'foreign-films').length,
    };
    return counts;
  }, []);

  const stats = useMemo(() => {
    const totalMovies = movies.filter(m => m.category.includes('films')).length;
    const totalSeries = movies.filter(m => m.category.includes('series')).length;
    const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
    const uniqueCountries = new Set(movies.map(m => m.country).filter(Boolean)).size;

    return {
      totalMovies,
      totalSeries,
      averageRating,
      countries: uniqueCountries,
    };
  }, []);

  const handleApplyFilters = (filters: FilterState) => {
    setAppliedFilters(filters);
  };

  const handleCategoryClick = (category: CategoryType) => {
    setActiveCategory(category);
    setShowMore(false);
  };

  // Show limited results initially
  const displayedMovies = showMore ? filteredMovies : filteredMovies.slice(0, 8);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with better visibility - UMIRENA POZADINA */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/355be36d-2a46-4146-b484-4005ebee7d9d.png')`,
        }}
      >
        {/* POBOLJŠANA POZADINA - mnogo suptilnija */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-purple-900/75 to-gray-900/85 backdrop-blur-sm">
          {/* Floating particles animation */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Header with larger logo and 3D effects */}
      <header className="relative bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Larger logo with 3D effects */}
              <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-400/40 hover:border-purple-400/60 transition-all duration-300 hover:scale-110 transform hover:rotate-3 card-3d">
                <img 
                  src="/9045a762-b35a-4614-87a0-7904f87e3c92.png" 
                  alt="Preporuka filmova Logo" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse neon-glow">
                  Preporuka filmova
                </h1>
                <p className="text-purple-300 font-medium text-xl">By Kure - Kreiranje po kvalitetnim filmovima</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* User Authentication Buttons */}
              {user ? (
                <div className="flex items-center space-x-4">
                  {/* User Avatar and Name */}
                  <div className="flex items-center space-x-3">
                    {user.user_metadata?.avatar_url ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border-2 border-purple-400/50"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <span className="text-purple-300 font-medium">
                      Dobrodošli, {user.user_metadata?.full_name || user.email?.split('@')[0]}!
                    </span>
                  </div>
                  <Link
                    to="/dashboard"
                    className="hidden md:flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 hover:shadow-2xl btn-3d focus:outline-none focus:ring-4 focus:ring-green-500/50"
                    aria-label="Otvori Dashboard"
                  >
                    <User className="w-5 h-5 mr-2" />
                    👤 Dashboard
                  </Link>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 bg-purple-600/20 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-all duration-300 border border-purple-500/30"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Prijava
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Registracija
                  </Link>
                </div>
              )}

              {/* Plex Server Button with 3D effect */}
              <Link
                to="/plex"
                className="hidden md:flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 hover:shadow-2xl btn-3d focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                aria-label="Otvori Plex Server"
              >
                <Server className="w-5 h-5 mr-2" />
                🎬 Plex Server
              </Link>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="hidden md:flex items-center px-6 py-3 bg-purple-600/20 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-all duration-300 border border-purple-500/30 transform hover:scale-105 btn-3d focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                aria-label="Otvori filtere"
              >
                <Filter className="w-5 h-5 mr-2" />
                🔧 Filteri
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-3 bg-purple-600/20 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                aria-label="Otvori mobilni meni"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-purple-500/20 relative z-40">
          <div className="px-4 py-4 space-y-3">
            {user ? (
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-5 h-5 mr-2" />
                Dashboard
              </Link>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  className="flex items-center px-4 py-3 bg-purple-600/20 text-purple-300 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  Prijava
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5 mr-2" />
                  Registracija
                </Link>
              </div>
            )}
            <Link
              to="/plex"
              className="flex items-center px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Server className="w-5 h-5 mr-2" />
              Plex Server
            </Link>
            <button
              onClick={() => {
                setShowFilters(!showFilters);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center px-4 py-3 bg-purple-600/20 text-purple-300 rounded-xl"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filteri
            </button>
          </div>
        </div>
      )}

      {/* 🚀 MAKSIMALNO PROŠIRENI MAIN CONTAINER - koristi punu širinu */}
      <main className="relative w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-[1600px] mx-auto">
          {/* Plex Server Promotion Banner with 3D effects */}
          <div className="mb-8 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl backdrop-blur-sm card-3d">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Server className="w-12 h-12 text-orange-400 animate-pulse" />
                <div>
                  <h2 className="text-2xl font-bold text-white neon-glow">🚀 Gledaj bez skidanja!</h2>
                  <p className="text-gray-300">Priključi se našem Plex serveru - preko 10,000 filmova i serija besplatno!</p>
                </div>
              </div>
              <Link
                to="/plex"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl btn-3d focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                aria-label="Saznaj više o Plex serveru"
              >
                Saznaj više
              </Link>
            </div>
          </div>

          {/* Enhanced Stats with 3D effects */}
          <Stats {...stats} />

          {/* 🔍 PROŠIRENI SEARCH BAR - maksimalna širina */}
          <div className="mb-8">
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm}
              placeholder="Pretraži po naslovu, režiseru, žanru..."
            />
          </div>

          {/* Category Tabs with enhanced styling */}
          <CategoryTabs 
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryClick}
            counts={categoryCounts}
          />

          {/* Filter Panel */}
          {showFilters && (
            <FilterPanel 
              onClose={() => setShowFilters(false)} 
              onApplyFilters={handleApplyFilters}
            />
          )}

          {/* Results Info with gradient text and 3D effects */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent neon-glow">
              {searchTerm ? `Rezultati pretrage: "${searchTerm}"` : 
               activeCategory === 'all' ? 'Sve preporuke' :
               activeCategory === 'domestic-series' ? 'Domaće serije' :
               activeCategory === 'foreign-series' ? 'Strane serije' :
               activeCategory === 'domestic-films' ? 'Domaći filmovi' :
               'Strani filmovi'}
            </h2>
            <span className="text-purple-300 font-medium bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 shadow-lg">
              {filteredMovies.length} {filteredMovies.length === 1 ? 'rezultat' : 'rezultata'}
            </span>
          </div>

          {/* 🎬 MAKSIMALNO PROŠIRENI MOVIES GRID - koristi punu širinu */}
          {displayedMovies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
                {displayedMovies.map((movie, index) => (
                  <div
                    key={movie.id}
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
              
              {/* Show More Button */}
              {!showMore && filteredMovies.length > 8 && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setShowMore(true)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl btn-3d text-lg focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                    aria-label={`Prikaži još ${filteredMovies.length - 8} filmova`}
                  >
                    📺 Prikaži više ({filteredMovies.length - 8} preostalo)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-purple-500/20 transform hover:scale-105 transition-all duration-300 card-3d">
                <Clapperboard className="w-20 h-20 text-purple-400 mx-auto mb-6 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-4 neon-glow">
                  Nema rezultata
                </h3>
                <p className="text-purple-300">
                  Pokušajte sa drugačijim pojmom pretrage ili kategorijom.
                </p>
              </div>
            </div>
          )}

          {/* Enhanced Footer with 3D effects and professional content - KOMPAKTNIJI I UREDNIJI */}
          <footer className="mt-20 pt-12 border-t border-purple-500/20">
            <div className="text-center">
              <div className="mb-8">
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-purple-400/30 transform hover:scale-110 transition-all duration-300 card-3d">
                    <img 
                      src="/9045a762-b35a-4614-87a0-7904f87e3c92.png" 
                      alt="Preporuka filmova Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent neon-glow">
                    Preporuka filmova
                  </h3>
                </div>
                <p className="text-purple-300 mb-6 max-w-3xl mx-auto text-lg">
                  Profesionalna platforma za otkrivanje kvalitetnih filmskih sadržaja. 
                  Kurirano na osnovu vašeg ukusa za filmove poput Inception, Interstellar, The Nice Guys.
                  Filmovi i serije sa jakom atmosferom, zanimljivim pričama i stilom.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                {/* Clickable Categories - KLIKABILNI LINKOVI */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform hover:scale-105 transition-all duration-300 card-3d">
                  <h4 className="text-lg font-semibold text-white mb-3">Kategorije</h4>
                  <ul className="space-y-2 text-purple-300">
                    <li>
                      <Link 
                        to="/"
                        onClick={() => handleCategoryClick('domestic-films')}
                        className="hover:text-white transition-colors cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded p-1 block"
                        aria-label="Prikaži domaće filmove"
                      >
                        Domaći filmovi ({categoryCounts['domestic-films']})
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/"
                        onClick={() => handleCategoryClick('foreign-films')}
                        className="hover:text-white transition-colors cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded p-1 block"
                        aria-label="Prikaži strane filmove"
                      >
                        Strani filmovi ({categoryCounts['foreign-films']})
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/"
                        onClick={() => handleCategoryClick('domestic-series')}
                        className="hover:text-white transition-colors cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded p-1 block"
                        aria-label="Prikaži domaće serije"
                      >
                        Domaće serije ({categoryCounts['domestic-series']})
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/"
                        onClick={() => handleCategoryClick('foreign-series')}
                        className="hover:text-white transition-colors cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded p-1 block"
                        aria-label="Prikaži strane serije"
                      >
                        Strane serije ({categoryCounts['foreign-series']})
                      </Link>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform hover:scale-105 transition-all duration-300 card-3d">
                  <h4 className="text-lg font-semibold text-white mb-3">Žanrovi</h4>
                  <ul className="space-y-2 text-purple-300">
                    <li>🧠 Psihološki trileri</li>
                    <li>🌀 Mind-bending filmovi</li>
                    <li>⚡ Stilizovana akcija</li>
                    <li>🎭 Atmosferične drame</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform hover:scale-105 transition-all duration-300 card-3d">
                  <h4 className="text-lg font-semibold text-white mb-3">Statistike</h4>
                  <ul className="space-y-2 text-purple-300">
                    <li>📊 Ukupno: {movies.length} naslova</li>
                    <li>⭐ Prosečna ocena: {stats.averageRating.toFixed(1)}</li>
                    <li>🌍 Zemlje: {stats.countries}</li>
                    <li>🔄 Ažurirano: 2025</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-8 border-t border-purple-500/20">
                <p className="text-purple-400 text-sm">
                  © 2025-2026 Preporuka filmova. Sva prava zadržana. Napravljeno od strane Kure.
                </p>
                <p className="text-purple-500 text-xs mt-2">
                  Profesionalna platforma za otkrivanje kvalitetnih filmskih sadržaja za zahtevne gledaoce.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};
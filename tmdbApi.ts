const TMDB_API_KEY = '5826b8c66fe801964101a98831097999';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export interface TMDBMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  adult: boolean;
}

export interface TMDBSearchResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

// Search for movies by title
export const searchMovies = async (query: string, year?: number): Promise<TMDBMovie[]> => {
  try {
    const yearParam = year ? `&year=${year}` : '';
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}${yearParam}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }
    
    const data: TMDBSearchResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

// Search for TV shows by title
export const searchTVShows = async (query: string, year?: number): Promise<any[]> => {
  try {
    const yearParam = year ? `&first_air_date_year=${year}` : '';
    const response = await fetch(
      `${TMDB_BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}${yearParam}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching TV shows:', error);
    return [];
  }
};

// Get poster URL
export const getPosterUrl = (posterPath: string | null, size: 'w200' | 'w300' | 'w400' | 'w500' | 'w780' | 'original' = 'w500'): string | null => {
  if (!posterPath) return null;
  return `${TMDB_IMAGE_BASE_URL}/${size}${posterPath}`;
};

// Get backdrop URL
export const getBackdropUrl = (backdropPath: string | null, size: 'w300' | 'w780' | 'w1280' | 'original' = 'w1280'): string | null => {
  if (!backdropPath) return null;
  return `${TMDB_IMAGE_BASE_URL}/${size}${backdropPath}`;
};

// Enhanced search that tries both movies and TV shows
export const searchContent = async (title: string, originalTitle?: string, year?: number): Promise<{
  poster: string | null;
  backdrop: string | null;
  tmdbData: any;
}> => {
  try {
    // Try searching with original title first if available
    const searchQuery = originalTitle || title;
    
    // Search movies first
    const movieResults = await searchMovies(searchQuery, year);
    if (movieResults.length > 0) {
      const bestMatch = movieResults[0];
      return {
        poster: getPosterUrl(bestMatch.poster_path, 'w500'),
        backdrop: getBackdropUrl(bestMatch.backdrop_path, 'w1280'),
        tmdbData: bestMatch
      };
    }
    
    // If no movie found, try TV shows
    const tvResults = await searchTVShows(searchQuery, year);
    if (tvResults.length > 0) {
      const bestMatch = tvResults[0];
      return {
        poster: getPosterUrl(bestMatch.poster_path, 'w500'),
        backdrop: getBackdropUrl(bestMatch.backdrop_path, 'w1280'),
        tmdbData: bestMatch
      };
    }
    
    // If original title search failed, try with regular title
    if (originalTitle && originalTitle !== title) {
      const fallbackMovies = await searchMovies(title, year);
      if (fallbackMovies.length > 0) {
        const bestMatch = fallbackMovies[0];
        return {
          poster: getPosterUrl(bestMatch.poster_path, 'w500'),
          backdrop: getBackdropUrl(bestMatch.backdrop_path, 'w1280'),
          tmdbData: bestMatch
        };
      }
      
      const fallbackTV = await searchTVShows(title, year);
      if (fallbackTV.length > 0) {
        const bestMatch = fallbackTV[0];
        return {
          poster: getPosterUrl(bestMatch.poster_path, 'w500'),
          backdrop: getBackdropUrl(bestMatch.backdrop_path, 'w1280'),
          tmdbData: bestMatch
        };
      }
    }
    
    return {
      poster: null,
      backdrop: null,
      tmdbData: null
    };
  } catch (error) {
    console.error('Error searching content:', error);
    return {
      poster: null,
      backdrop: null,
      tmdbData: null
    };
  }
};

// Cache for storing TMDB data to avoid repeated API calls
const tmdbCache = new Map<string, any>();

export const getCachedContent = async (title: string, originalTitle?: string, year?: number) => {
  const cacheKey = `${title}-${originalTitle || ''}-${year || ''}`;
  
  if (tmdbCache.has(cacheKey)) {
    return tmdbCache.get(cacheKey);
  }
  
  const result = await searchContent(title, originalTitle, year);
  tmdbCache.set(cacheKey, result);
  
  return result;
};
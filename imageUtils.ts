// Utility functions for handling movie images

export const getMoviePosterUrl = (movieTitle: string, year?: number): string => {
  // For now, we'll use placeholder images from Pexels
  // Later this can be replaced with TMDB API integration
  
  const placeholderImages = [
    'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    'https://images.pexels.com/photos/7991471/pexels-photo-7991471.jpeg',
    'https://images.pexels.com/photos/7991622/pexels-photo-7991622.jpeg',
    'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg',
    'https://images.pexels.com/photos/7991581/pexels-photo-7991581.jpeg',
    'https://images.pexels.com/photos/7991582/pexels-photo-7991582.jpeg',
    'https://images.pexels.com/photos/7991583/pexels-photo-7991583.jpeg',
    'https://images.pexels.com/photos/7991584/pexels-photo-7991584.jpeg',
  ];
  
  // Simple hash function to consistently assign images to movies
  const hash = movieTitle.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const imageIndex = Math.abs(hash) % placeholderImages.length;
  return `${placeholderImages[imageIndex]}?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop`;
};

export const getMovieBackdropUrl = (movieTitle: string): string => {
  // Backdrop images for modal headers
  const backdropImages = [
    'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    'https://images.pexels.com/photos/7991471/pexels-photo-7991471.jpeg',
    'https://images.pexels.com/photos/7991622/pexels-photo-7991622.jpeg',
    'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg',
  ];
  
  const hash = movieTitle.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const imageIndex = Math.abs(hash) % backdropImages.length;
  return `${backdropImages[imageIndex]}?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop`;
};

// Future: TMDB API integration
export const fetchMovieDataFromTMDB = async (movieTitle: string, year?: number) => {
  // This will be implemented when we add TMDB API
  // Will return: poster_path, backdrop_path, overview, cast, etc.
  return null;
};
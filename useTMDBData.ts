import { useState, useEffect } from 'react';
import { getCachedContent } from '../services/tmdbApi';

interface TMDBData {
  poster: string | null;
  backdrop: string | null;
  tmdbData: any;
  loading: boolean;
  error: string | null;
}

export const useTMDBData = (title: string, originalTitle?: string, year?: number): TMDBData => {
  const [data, setData] = useState<TMDBData>({
    poster: null,
    backdrop: null,
    tmdbData: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setData(prev => ({ ...prev, loading: true, error: null }));
        
        const result = await getCachedContent(title, originalTitle, year);
        
        if (isMounted) {
          setData({
            poster: result.poster,
            backdrop: result.backdrop,
            tmdbData: result.tmdbData,
            loading: false,
            error: null
          });
        }
      } catch (error) {
        if (isMounted) {
          setData(prev => ({
            ...prev,
            loading: false,
            error: error instanceof Error ? error.message : 'Failed to fetch TMDB data'
          }));
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [title, originalTitle, year]);

  return data;
};
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // KRITIČNA KONFIGURACIJA za reset password
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
});

// Auth helper functions
export const auth = {
  // Sign up with email and password
  signUp: async (email: string, password: string, userData?: { full_name?: string }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
        // DODATO: Redirect URL za email confirmation
        emailRedirectTo: `${window.location.origin}/login`
      }
    });
    return { data, error };
  },

  // Sign in with email and password
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Get current user
  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },

  // POBOLJŠANA Reset password funkcija
  resetPassword: async (email: string) => {
    // KRITIČNO: Koristimo tačan format URL-a koji Supabase očekuje
    const redirectTo = `${window.location.origin}/reset-password`;
    
    console.log('Sending reset email with redirect:', redirectTo);
    
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectTo,
      // DODATO: Dodatne opcije za bolju kompatibilnost
      captchaToken: undefined
    });
    
    return { data, error };
  },

  // Update user profile
  updateProfile: async (updates: { full_name?: string; avatar_url?: string }) => {
    const { data, error } = await supabase.auth.updateUser({
      data: updates
    });
    return { data, error };
  },

  // NOVA: Update password funkcija
  updatePassword: async (newPassword: string) => {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword
    });
    return { data, error };
  }
};

// Database helper functions
export const db = {
  // User favorites
  favorites: {
    add: async (userId: string, movieId: number) => {
      const { data, error } = await supabase
        .from('user_favorites')
        .insert({ user_id: userId, movie_id: movieId });
      return { data, error };
    },

    remove: async (userId: string, movieId: number) => {
      const { error } = await supabase
        .from('user_favorites')
        .delete()
        .eq('user_id', userId)
        .eq('movie_id', movieId);
      return { error };
    },

    get: async (userId: string) => {
      const { data, error } = await supabase
        .from('user_favorites')
        .select('movie_id')
        .eq('user_id', userId);
      return { data, error };
    }
  },

  // User watchlist
  watchlist: {
    add: async (userId: string, movieId: number) => {
      const { data, error } = await supabase
        .from('user_watchlist')
        .insert({ user_id: userId, movie_id: movieId });
      return { data, error };
    },

    remove: async (userId: string, movieId: number) => {
      const { error } = await supabase
        .from('user_watchlist')
        .delete()
        .eq('user_id', userId)
        .eq('movie_id', movieId);
      return { error };
    },

    get: async (userId: string) => {
      const { data, error } = await supabase
        .from('user_watchlist')
        .select('movie_id')
        .eq('user_id', userId);
      return { data, error };
    }
  },

  // User ratings
  ratings: {
    add: async (userId: string, movieId: number, rating: number) => {
      const { data, error } = await supabase
        .from('user_ratings')
        .upsert({ user_id: userId, movie_id: movieId, rating });
      return { data, error };
    },

    remove: async (userId: string, movieId: number) => {
      const { error } = await supabase
        .from('user_ratings')
        .delete()
        .eq('user_id', userId)
        .eq('movie_id', movieId);
      return { error };
    },

    get: async (userId: string) => {
      const { data, error } = await supabase
        .from('user_ratings')
        .select('movie_id, rating')
        .eq('user_id', userId);
      return { data, error };
    }
  }
};
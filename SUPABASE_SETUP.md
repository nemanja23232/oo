# Supabase Setup Guide

## 1. Kreiranje Supabase projekta

1. Idite na [supabase.com](https://supabase.com)
2. Kliknite "Start your project"
3. Kreirajte novi projekat
4. Sačekajte da se projekat kreira (2-3 minuta)

## 2. Dobijanje API ključeva

1. U Supabase dashboard-u idite na Settings → API
2. Kopirajte:
   - Project URL
   - anon/public key

## 3. Environment varijable

1. Kreirajte `.env` fajl u root direktorijumu
2. Dodajte vaše Supabase kredencijale:

```env
VITE_SUPABASE_URL=https://qiprjutegbfyembqwnpz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpcHJqdXRlZ2JmeWVtYnF3bnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDk0MDgsImV4cCI6MjA2NTcyNTQwOH0.idQe-4CNzmWH3mjdUYJa9GTdCEo42ihG3zYfXvR2NWQ
```

## 4. Kreiranje tabela

Idite u SQL Editor u Supabase dashboard-u i izvršite sledeći SQL:

```sql
-- Enable RLS (Row Level Security)
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create user_favorites table
CREATE TABLE user_favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  movie_id INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, movie_id)
);

-- Create user_watchlist table
CREATE TABLE user_watchlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  movie_id INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, movie_id)
);

-- Create user_ratings table
CREATE TABLE user_ratings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  movie_id INTEGER NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 10),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, movie_id)
);

-- Enable RLS on all tables
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_watchlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_ratings ENABLE ROW LEVEL SECURITY;

-- Create policies for user_favorites
CREATE POLICY "Users can view own favorites" ON user_favorites
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own favorites" ON user_favorites
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own favorites" ON user_favorites
  FOR DELETE USING (auth.uid() = user_id);

-- Create policies for user_watchlist
CREATE POLICY "Users can view own watchlist" ON user_watchlist
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own watchlist" ON user_watchlist
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own watchlist" ON user_watchlist
  FOR DELETE USING (auth.uid() = user_id);

-- Create policies for user_ratings
CREATE POLICY "Users can view own ratings" ON user_ratings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own ratings" ON user_ratings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own ratings" ON user_ratings
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own ratings" ON user_ratings
  FOR DELETE USING (auth.uid() = user_id);
```

## 5. Konfiguracija autentifikacije

1. U Supabase dashboard-u idite na Authentication → Settings
2. Podesiti:
   - Site URL: `http://localhost:5173` (za development)
   - Redirect URLs: `http://localhost:5173/**`
   - Email confirmation: Disable (za development)

## 6. Testiranje

1. Pokrenite aplikaciju: `npm run dev`
2. Idite na `/signup` i kreirajte test nalog
3. Prijavite se na `/login`
4. Testiranje dashboard-a na `/dashboard`

## Napomene

- Za produkciju, promenite Site URL i Redirect URLs
- Omogućite email confirmation za produkciju
- Dodajte custom SMTP za email-ove
- Konfigurišite dodatne auth providere ako je potrebno
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, ArrowLeft, Loader, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, auth } from '../lib/supabase';
import toast from 'react-hot-toast';
import { playSuccessSound, playErrorSound } from '../utils/audio';

export const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValidSession, setIsValidSession] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  // POBOLJŠANA LOGIKA ZA PROVERU SESIJE
  useEffect(() => {
    const checkSession = async () => {
      try {
        // PRVO: Proveravamo URL parametre za access_token
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get('access_token');
        const refreshToken = urlParams.get('refresh_token');
        const type = urlParams.get('type');
        
        console.log('URL params:', { accessToken: !!accessToken, refreshToken: !!refreshToken, type });

        if (accessToken && type === 'recovery') {
          console.log('Recovery tokens found in URL, setting session...');
          
          // Postavljamo sesiju sa tokenima iz URL-a
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken || ''
          });
          
          if (error) {
            console.error('Error setting session:', error);
            setIsValidSession(false);
          } else {
            console.log('Session set successfully:', data);
            setIsValidSession(true);
            
            // Čistimo URL od parametara
            window.history.replaceState({}, document.title, '/reset-password');
          }
        } else {
          // Proveravamo postojeću sesiju
          const { data: { session }, error } = await supabase.auth.getSession();
          
          console.log('Current session:', session);
          console.log('Session error:', error);

          if (session && session.user) {
            console.log('Valid session found, user can reset password');
            setIsValidSession(true);
          } else {
            console.log('No valid session found');
            setIsValidSession(false);
          }
        }
      } catch (error) {
        console.error('Error checking session:', error);
        setIsValidSession(false);
      } finally {
        setCheckingSession(false);
      }
    };

    // SLUŠAMO PROMENE U AUTENTIFIKACIJI
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session);
        
        if (event === 'PASSWORD_RECOVERY' || (event === 'SIGNED_IN' && session)) {
          console.log('Password recovery session detected');
          setIsValidSession(true);
          setCheckingSession(false);
        } else if (event === 'SIGNED_OUT') {
          setIsValidSession(false);
        }
      }
    );

    checkSession();

    return () => subscription.unsubscribe();
  }, []);

  const validateForm = () => {
    if (password !== confirmPassword) {
      toast.error('Lozinke se ne poklapaju');
      playErrorSound();
      return false;
    }
    if (password.length < 6) {
      toast.error('Lozinka mora imati najmanje 6 karaktera');
      playErrorSound();
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      console.log('Attempting to update password...');
      
      // KORISTIMO POBOLJŠANU auth.updatePassword funkciju
      const { error } = await auth.updatePassword(password);

      if (error) {
        throw error;
      }

      console.log('Password updated successfully');
      toast.success('Lozinka je uspešno promenjena!');
      playSuccessSound();
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error: any) {
      console.error('Error updating password:', error);
      toast.error(error.message || 'Greška pri promeni lozinke');
      playErrorSound();
    } finally {
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-16 h-16 text-purple-400 animate-spin mx-auto mb-4" />
          <div className="text-white text-2xl font-bold">Proveravamo sesiju...</div>
          <p className="text-purple-300 mt-2">Molimo sačekajte...</p>
        </div>
      </div>
    );
  }

  if (!isValidSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/355be36d-2a46-4146-b484-4005ebee7d9d.png')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-900/95"></div>
        
        <div className="relative flex items-center justify-center min-h-screen px-4 py-8">
          <div className="w-full max-w-md">
            <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-red-500/30 shadow-2xl text-center">
              <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-4">Nevažeći link</h1>
              <p className="text-gray-300 mb-6">
                Link za resetovanje lozinke je nevažeći ili je istekao. 
                Molimo zatražite novi link za resetovanje.
              </p>
              
              <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                <h4 className="text-yellow-400 font-semibold mb-2">💡 Mogući uzroci:</h4>
                <ul className="text-gray-300 text-sm space-y-1 text-left">
                  <li>• Link je stariji od 1 sata</li>
                  <li>• Link je već korišćen</li>
                  <li>• Niste kliknuli direktno iz emaila</li>
                  <li>• Browser je blokirao cookies</li>
                  <li>• URL je oštećen prilikom kopiranja</li>
                </ul>
              </div>

              <div className="space-y-4">
                <Link
                  to="/forgot-password"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Zatražite novi link
                </Link>
                <Link
                  to="/login"
                  className="block w-full bg-gray-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-700 transition-colors"
                >
                  Nazad na prijavu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/355be36d-2a46-4146-b484-4005ebee7d9d.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-900/95"></div>
      
      <div className="relative flex items-center justify-center min-h-screen px-4 py-8">
        {/* Back to Login Button */}
        <Link
          to="/login"
          className="absolute top-8 left-8 flex items-center px-4 py-2 bg-black/80 hover:bg-black/95 text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Nazad na prijavu
        </Link>

        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-400/40">
              <img 
                src="/9045a762-b35a-4614-87a0-7904f87e3c92.png" 
                alt="Preporuka filmova Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Nova lozinka
            </h1>
            <p className="text-purple-300 text-lg">Unesite vašu novu lozinku</p>
          </div>

          {/* Reset Password Form */}
          <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-white font-semibold mb-2">
                  Nova lozinka
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 bg-gray-700/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-white font-semibold mb-2">
                  Potvrdite novu lozinku
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 bg-gray-700/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4">
                <h4 className="text-blue-400 font-semibold mb-2">Zahtevi za lozinku:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li className={`flex items-center ${password.length >= 6 ? 'text-green-400' : 'text-gray-400'}`}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Najmanje 6 karaktera
                  </li>
                  <li className={`flex items-center ${password === confirmPassword && password.length > 0 ? 'text-green-400' : 'text-gray-400'}`}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Lozinke se poklapaju
                  </li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Loader className="w-5 h-5 animate-spin mr-2" />
                    Menjam lozinku...
                  </div>
                ) : (
                  'Promeni lozinku'
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Setili ste se lozinke?{' '}
                <Link
                  to="/login"
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Prijavite se
                </Link>
              </p>
            </div>
          </div>

          {/* Success Message */}
          <div className="mt-6 bg-green-600/20 border border-green-500/30 rounded-xl p-4 text-center">
            <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-2" />
            <p className="text-green-300 text-sm">
              <strong>Uspešno!</strong> Sesija za resetovanje je aktivna. Možete promeniti lozinku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
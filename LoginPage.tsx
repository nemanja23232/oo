import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Loader, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { playSuccessSound, playErrorSound } from '../utils/audio';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(email, password);
    
    if (error) {
      toast.error(error.message);
      playErrorSound();
      setLoading(false);
    } else {
      toast.success('Uspešno ste se prijavili!');
      playSuccessSound();
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/355be36d-2a46-4146-b484-4005ebee7d9d.png')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-900/95"></div>
      
      <div className="relative flex items-center justify-center min-h-screen px-4 py-8">
        {/* Back to Home Button */}
        <Link
          to="/"
          className="absolute top-8 left-8 flex items-center px-4 py-2 bg-black/80 hover:bg-black/95 text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Početna
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
              Dobrodošli nazad
            </h1>
            <p className="text-purple-300 text-lg">Prijavite se na vaš nalog</p>
          </div>

          {/* Login Form */}
          <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email adresa
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300"
                    placeholder="vas@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-white font-semibold mb-2">
                  Lozinka
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

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors font-semibold"
                >
                  Zaboravili ste lozinku?
                </Link>
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
                    Prijavljivanje...
                  </div>
                ) : (
                  'Prijavite se'
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Nemate nalog?{' '}
                <Link
                  to="/signup"
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Registrujte se
                </Link>
              </p>
            </div>
          </div>

          {/* Demo Account Info */}
          <div className="mt-6 bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-center">
            <p className="text-blue-300 text-sm">
              <strong>Demo nalog:</strong> demo@example.com / password123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
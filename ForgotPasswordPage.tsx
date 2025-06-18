import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Loader, CheckCircle, AlertCircle } from 'lucide-react';
import { auth } from '../lib/supabase';
import toast from 'react-hot-toast';
import { playSuccessSound, playErrorSound } from '../utils/audio';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Molimo unesite email adresu');
      playErrorSound();
      return;
    }

    setLoading(true);

    try {
      console.log('Sending reset email to:', email);

      // KORISTIMO POBOLJŠANU auth.resetPassword funkciju
      const { error } = await auth.resetPassword(email);

      if (error) {
        throw error;
      }

      setEmailSent(true);
      toast.success('Email za resetovanje lozinke je poslat!');
      playSuccessSound();
    } catch (error: any) {
      console.error('Error sending reset email:', error);
      toast.error(error.message || 'Greška pri slanju emaila');
      playErrorSound();
    } finally {
      setLoading(false);
    }
  };

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
              Zaboravili ste lozinku?
            </h1>
            <p className="text-purple-300 text-lg">
              {emailSent 
                ? 'Proverite vaš email' 
                : 'Unesite email da resetujete lozinku'
              }
            </p>
          </div>

          {/* Form or Success Message */}
          <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
            {!emailSent ? (
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <Loader className="w-5 h-5 animate-spin mr-2" />
                      Šalje se email...
                    </div>
                  ) : (
                    'Pošalji link za resetovanje'
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email je poslat!</h3>
                  <p className="text-gray-300">
                    Poslali smo vam link za resetovanje lozinke na adresu:
                  </p>
                  <p className="text-green-400 font-semibold mt-2">{email}</p>
                </div>

                <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-2">📧 Sledeći koraci:</h4>
                  <ol className="text-gray-300 text-sm space-y-1 text-left">
                    <li>1. Proverite vaš email inbox</li>
                    <li>2. Kliknite na "Reset Password" link u emailu</li>
                    <li>3. Automatski ćete biti preusmereni na stranicu za novu lozinku</li>
                    <li>4. Unesite novu lozinku i sačuvajte</li>
                    <li>5. Prijavite se sa novom lozinkom</li>
                  </ol>
                </div>

                <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-xl p-4">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                  <p className="text-yellow-300 text-sm">
                    <strong>Važno:</strong> Ako ne vidite email, proverite spam/junk folder. 
                    Link je valjan 1 sat.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEmailSent(false);
                    setEmail('');
                  }}
                  className="w-full bg-gray-600 text-white py-3 rounded-xl font-medium hover:bg-gray-700 transition-colors"
                >
                  Pošalji ponovo
                </button>
              </div>
            )}

            {/* Back to Login Link */}
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

          {/* Demo Account Info */}
          <div className="mt-6 bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-center">
            <p className="text-blue-300 text-sm">
              <strong>Za testiranje:</strong> Možete koristiti demo nalog: demo@example.com / password123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
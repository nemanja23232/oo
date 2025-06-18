import React from 'react';
import { Star, TrendingUp, Award, Heart, Zap, Crown } from 'lucide-react';

interface ModernRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  animated?: boolean;
}

export const ModernRating: React.FC<ModernRatingProps> = ({ 
  rating, 
  size = 'md', 
  showLabel = true,
  animated = true 
}) => {
  // 🎨 POBOLJŠANA KOLOR PALETA ZA OCENE - KONZISTENTNO PRAVILO
  const getRatingColor = (rating: number) => {
    if (rating >= 8.5) return 'from-emerald-400 to-green-500';     // 8.5+ = Zeleno
    if (rating >= 7.0) return 'from-yellow-400 to-amber-500';     // 7.0-8.4 = Žuto
    return 'from-red-400 to-orange-500';                          // <7.0 = Crveno
  };

  // 🏆 POBOLJŠANE IKONICE - jasniji značaj
  const getRatingIcon = (rating: number) => {
    if (rating >= 9.0) return Crown;      // Kruna za remek-dela
    if (rating >= 8.5) return Award;      // Nagrada za izuzetne
    if (rating >= 8.0) return Zap;        // Munja za odlične
    if (rating >= 7.5) return TrendingUp; // Trend za vrlo dobre
    if (rating >= 7.0) return Star;       // Zvezda za dobre
    if (rating >= 6.0) return Heart;      // Srce za solidne
    return Star;                          // Osnovna zvezda za ostale
  };

  // 📝 POBOLJŠANI LABELI - jasniji opisi
  const getRatingLabel = (rating: number) => {
    if (rating >= 9.5) return 'Savršenstvo';
    if (rating >= 9.0) return 'Remek-delo';
    if (rating >= 8.5) return 'Izuzetno';
    if (rating >= 8.0) return 'Odlično';
    if (rating >= 7.5) return 'Vrlo dobro';
    if (rating >= 7.0) return 'Dobro';
    if (rating >= 6.5) return 'Solidno';
    if (rating >= 6.0) return 'Okej';
    if (rating >= 5.0) return 'Prosečno';
    return 'Slabo';
  };

  const sizeClasses = {
    sm: 'w-4 h-4 text-xs',
    md: 'w-5 h-5 text-sm',
    lg: 'w-6 h-6 text-base'
  };

  const containerSizes = {
    sm: 'px-2 py-1',
    md: 'px-3 py-1.5',
    lg: 'px-4 py-2'
  };

  const Icon = getRatingIcon(rating);
  const colorClass = getRatingColor(rating);

  return (
    <div className={`inline-flex items-center bg-gradient-to-r ${colorClass} rounded-full ${containerSizes[size]} shadow-lg backdrop-blur-sm border border-white/20 ${animated ? 'transform hover:scale-110 transition-all duration-300 hover:shadow-xl' : ''}`}>
      <Icon className={`${sizeClasses[size]} text-white mr-1 ${animated ? 'animate-pulse' : ''}`} />
      <span className="text-white font-bold">{rating.toFixed(1)}</span>
      {showLabel && size !== 'sm' && (
        <span className="text-white/90 text-xs ml-2 font-medium">
          {getRatingLabel(rating)}
        </span>
      )}
    </div>
  );
};

// 🎯 POBOLJŠANI CIRCULAR RATING - bolje animacije i boje
export const CircularRating: React.FC<{ rating: number; size?: number }> = ({ 
  rating, 
  size = 60 
}) => {
  const percentage = (rating / 10) * 100;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  // 🎨 POBOLJŠANA KOLOR PALETA - konzistentna sa ModernRating
  const getColor = (rating: number) => {
    if (rating >= 8.5) return '#10B981'; // emerald-500 - Zeleno
    if (rating >= 7.0) return '#F59E0B'; // amber-500 - Žuto
    return '#EF4444';                    // red-500 - Crveno
  };

  const getBackgroundColor = (rating: number) => {
    if (rating >= 8.5) return 'rgba(16, 185, 129, 0.1)'; // emerald
    if (rating >= 7.0) return 'rgba(245, 158, 11, 0.1)'; // amber
    return 'rgba(239, 68, 68, 0.1)';                     // red
  };

  return (
    <div 
      className="relative inline-flex items-center justify-center transform hover:scale-110 transition-all duration-300"
      style={{ backgroundColor: getBackgroundColor(rating) }}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle sa animacijom */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(rating)}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out animate-pulse"
          style={{
            filter: `drop-shadow(0 0 8px ${getColor(rating)}60)`,
            strokeDashoffset: 0
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-sm drop-shadow-lg">
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

// 🌟 NOVI RATING COMPONENT - za posebne slučajeve
export const PremiumRating: React.FC<{ rating: number }> = ({ rating }) => {
  const getRatingEmoji = (rating: number) => {
    if (rating >= 9.5) return '👑'; // Kruna
    if (rating >= 9.0) return '🏆'; // Trofej
    if (rating >= 8.5) return '⭐'; // Zvezda
    if (rating >= 8.0) return '💎'; // Dijamant
    if (rating >= 7.5) return '🔥'; // Vatra
    if (rating >= 7.0) return '✨'; // Sparkles
    if (rating >= 6.0) return '👍'; // Palac gore
    return '📺'; // TV
  };

  const colorClass = rating >= 8.5 ? 'from-emerald-400 to-green-500' :
                    rating >= 7.0 ? 'from-yellow-400 to-amber-500' :
                    'from-red-400 to-orange-500';

  return (
    <div className={`inline-flex items-center bg-gradient-to-r ${colorClass} rounded-xl px-4 py-2 shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/20`}>
      <span className="text-2xl mr-2">{getRatingEmoji(rating)}</span>
      <span className="text-white font-bold text-lg">{rating.toFixed(1)}</span>
    </div>
  );
};
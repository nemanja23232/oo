import React, { useState } from 'react';
import { Heart, Bookmark, Share2, Star, ThumbsUp, Eye, Clock } from 'lucide-react';

// 🎯 MIKRO-INTERAKCIJE - suptilne animacije koje poboljšavaju UX

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white',
    warning: 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white',
    error: 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        rounded-xl font-bold
        transition-all duration-300
        transform hover:scale-105 hover:shadow-2xl
        ${isPressed ? 'scale-95' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        focus:outline-none focus:ring-4 focus:ring-purple-500/50
        relative overflow-hidden
        ${className}
      `}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 bg-white/20 transform scale-0 rounded-full transition-transform duration-300 hover:scale-100"></span>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
};

// ❤️ ANIMIRANI FAVORITE BUTTON
export const FavoriteButton: React.FC<{ 
  isFavorite?: boolean; 
  onToggle?: (e: React.MouseEvent) => void;
  size?: 'sm' | 'md' | 'lg';
}> = ({ isFavorite = false, onToggle, size = 'md' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    onToggle?.(e);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${sizeClasses[size]}
        rounded-full
        flex items-center justify-center
        transition-all duration-300
        ${isFavorite 
          ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg' 
          : 'bg-gray-700/50 text-gray-400 hover:bg-red-500/20 hover:text-red-400'
        }
        ${isHovered ? 'scale-110' : ''}
        ${isAnimating ? 'animate-bounce' : ''}
        focus:outline-none focus:ring-4 focus:ring-red-500/50
      `}
    >
      <Heart 
        className={`
          ${iconSizes[size]} 
          transition-all duration-300
          ${isFavorite ? 'fill-current scale-110' : ''}
          ${isAnimating ? 'animate-pulse' : ''}
        `} 
      />
    </button>
  );
};

// 🔖 ANIMIRANI BOOKMARK BUTTON
export const BookmarkButton: React.FC<{ 
  isBookmarked?: boolean; 
  onToggle?: (e: React.MouseEvent) => void;
  size?: 'sm' | 'md' | 'lg';
}> = ({ isBookmarked = false, onToggle, size = 'md' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle?.(e);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${sizeClasses[size]}
        rounded-full
        flex items-center justify-center
        transition-all duration-300
        ${isBookmarked 
          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
          : 'bg-gray-700/50 text-gray-400 hover:bg-purple-500/20 hover:text-purple-400'
        }
        ${isHovered ? 'scale-110 rotate-12' : ''}
        focus:outline-none focus:ring-4 focus:ring-purple-500/50
      `}
    >
      <Bookmark 
        className={`
          ${iconSizes[size]} 
          transition-all duration-300
          ${isBookmarked ? 'fill-current' : ''}
        `} 
      />
    </button>
  );
};

// ⭐ ANIMIRANI RATING SELECTOR
export const RatingSelector: React.FC<{ 
  rating?: number; 
  onRatingChange?: (rating: number) => void;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
}> = ({ rating = 0, onRatingChange, maxRating = 5, size = 'md' }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= (hoverRating || rating);
        
        return (
          <button
            key={index}
            onClick={() => onRatingChange?.(starValue)}
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(0)}
            className={`
              transition-all duration-200
              hover:scale-125
              focus:outline-none focus:ring-2 focus:ring-yellow-500/50 rounded
              ${isActive ? 'text-yellow-400' : 'text-gray-400'}
            `}
          >
            <Star 
              className={`
                ${sizeClasses[size]}
                transition-all duration-200
                ${isActive ? 'fill-current drop-shadow-lg' : ''}
                hover:rotate-12
              `} 
            />
          </button>
        );
      })}
    </div>
  );
};

// 📤 ANIMIRANI SHARE BUTTON
export const ShareButton: React.FC<{ 
  onShare?: () => void;
  size?: 'sm' | 'md' | 'lg';
}> = ({ onShare, size = 'md' }) => {
  const [isShared, setIsShared] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleShare = () => {
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
    onShare?.();
  };

  return (
    <button
      onClick={handleShare}
      className={`
        ${sizeClasses[size]}
        rounded-full
        flex items-center justify-center
        transition-all duration-300
        ${isShared 
          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
          : 'bg-gray-700/50 text-gray-400 hover:bg-cyan-500/20 hover:text-cyan-400'
        }
        hover:scale-110
        focus:outline-none focus:ring-4 focus:ring-cyan-500/50
      `}
    >
      <Share2 
        className={`
          ${iconSizes[size]} 
          transition-all duration-300
          ${isShared ? 'rotate-12 scale-110' : ''}
        `} 
      />
    </button>
  );
};

// 👁️ VIEW COUNTER sa animacijom
export const ViewCounter: React.FC<{ views: number; animated?: boolean }> = ({ 
  views, 
  animated = true 
}) => {
  return (
    <div className={`flex items-center space-x-2 text-gray-400 ${animated ? 'hover:text-white transition-colors duration-300' : ''}`}>
      <Eye className={`w-4 h-4 ${animated ? 'hover:scale-110 transition-transform duration-300' : ''}`} />
      <span className="text-sm font-medium">
        {views > 1000 ? `${(views / 1000).toFixed(1)}k` : views} pregleda
      </span>
    </div>
  );
};

// ⏱️ WATCH TIME INDICATOR
export const WatchTimeIndicator: React.FC<{ 
  duration: number; // u minutima
  watched?: number; // u minutima
}> = ({ duration, watched = 0 }) => {
  const percentage = (watched / duration) * 100;

  return (
    <div className="flex items-center space-x-2 text-gray-400">
      <Clock className="w-4 h-4" />
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">{duration}min</span>
        {watched > 0 && (
          <div className="w-16 h-1 bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// 👍 LIKE BUTTON sa animacijom
export const LikeButton: React.FC<{ 
  likes?: number;
  isLiked?: boolean;
  onToggle?: (isLiked: boolean) => void;
}> = ({ likes = 0, isLiked = false, onToggle }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    onToggle?.(!isLiked);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        flex items-center space-x-2 px-3 py-2 rounded-lg
        transition-all duration-300
        ${isLiked 
          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
          : 'bg-gray-700/50 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400'
        }
        ${isAnimating ? 'animate-pulse' : ''}
        hover:scale-105
        focus:outline-none focus:ring-4 focus:ring-blue-500/50
      `}
    >
      <ThumbsUp 
        className={`
          w-4 h-4 
          transition-all duration-300
          ${isLiked ? 'fill-current scale-110' : ''}
          ${isAnimating ? 'animate-bounce' : ''}
        `} 
      />
      <span className="text-sm font-medium">
        {likes > 1000 ? `${(likes / 1000).toFixed(1)}k` : likes}
      </span>
    </button>
  );
};
import React from 'react';
import { 
  Film, Tv, Star, Calendar, Globe, Users, Award, Play, Download, 
  Search, Filter, Menu, X, Server, Heart, Bookmark, Share2,
  Zap, Crown, TrendingUp, Clock, MapPin, Languages, Shield,
  Wifi, Lock, Terminal, Copy, CheckCircle, Smartphone, AlertTriangle,
  Settings, ExternalLink, Youtube, Video, Magnet, FileText,
  Loader, Info
} from 'lucide-react';

// 🎨 POBOLJŠANE IKONICE sa mikro-animacijama i hover efektima

interface EnhancedIconProps {
  icon: React.ComponentType<any>;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  animated?: boolean;
  glowing?: boolean;
}

export const EnhancedIcon: React.FC<EnhancedIconProps> = ({
  icon: Icon,
  className = '',
  size = 'md',
  color = 'primary',
  animated = true,
  glowing = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'text-purple-400',
    secondary: 'text-blue-400',
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400',
    info: 'text-cyan-400'
  };

  const glowClasses = {
    primary: 'drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]',
    secondary: 'drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]',
    success: 'drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]',
    warning: 'drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]',
    error: 'drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]',
    info: 'drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]'
  };

  return (
    <Icon 
      className={`
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        ${animated ? 'transition-all duration-300 hover:scale-110 hover:rotate-12' : ''} 
        ${glowing ? glowClasses[color] : ''}
        ${className}
      `} 
    />
  );
};

// 🎭 SPECIJALIZOVANE IKONICE za različite kontekste

export const CategoryIcon: React.FC<{ category: string; className?: string }> = ({ category, className = '' }) => {
  const getIcon = () => {
    switch (category) {
      case 'domestic-films': return { icon: Film, color: 'text-purple-400', emoji: '🎬' };
      case 'foreign-films': return { icon: Film, color: 'text-amber-400', emoji: '🌟' };
      case 'domestic-series': return { icon: Tv, color: 'text-emerald-400', emoji: '📺' };
      case 'foreign-series': return { icon: Tv, color: 'text-blue-400', emoji: '🌍' };
      default: return { icon: Film, color: 'text-gray-400', emoji: '🎭' };
    }
  };

  const { icon: Icon, color, emoji } = getIcon();

  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-lg mr-2">{emoji}</span>
      <Icon className={`w-5 h-5 ${color} transition-all duration-300 hover:scale-110`} />
    </div>
  );
};

export const RatingIcon: React.FC<{ rating: number; className?: string }> = ({ rating, className = '' }) => {
  const getIcon = () => {
    if (rating >= 9.0) return { icon: Crown, color: 'text-emerald-400', emoji: '👑' };
    if (rating >= 8.5) return { icon: Award, color: 'text-blue-400', emoji: '🏆' };
    if (rating >= 8.0) return { icon: Zap, color: 'text-purple-400', emoji: '⚡' };
    if (rating >= 7.5) return { icon: TrendingUp, color: 'text-indigo-400', emoji: '📈' };
    if (rating >= 7.0) return { icon: Star, color: 'text-yellow-400', emoji: '⭐' };
    if (rating >= 6.0) return { icon: Heart, color: 'text-orange-400', emoji: '💖' };
    return { icon: Star, color: 'text-gray-400', emoji: '📺' };
  };

  const { icon: Icon, color, emoji } = getIcon();

  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-sm mr-1">{emoji}</span>
      <Icon className={`w-4 h-4 ${color} animate-pulse`} />
    </div>
  );
};

export const ActionIcon: React.FC<{ 
  action: 'play' | 'download' | 'favorite' | 'bookmark' | 'share'; 
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ action, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const getIcon = () => {
    switch (action) {
      case 'play': return { icon: Play, color: 'text-green-400', emoji: '▶️' };
      case 'download': return { icon: Download, color: 'text-blue-400', emoji: '⬇️' };
      case 'favorite': return { icon: Heart, color: 'text-red-400', emoji: '❤️' };
      case 'bookmark': return { icon: Bookmark, color: 'text-purple-400', emoji: '🔖' };
      case 'share': return { icon: Share2, color: 'text-cyan-400', emoji: '📤' };
      default: return { icon: Play, color: 'text-gray-400', emoji: '🎭' };
    }
  };

  const { icon: Icon, color, emoji } = getIcon();

  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-sm mr-2">{emoji}</span>
      <Icon className={`${sizeClasses[size]} ${color} transition-all duration-300 hover:scale-125 hover:rotate-12`} />
    </div>
  );
};

// 🌟 ANIMIRANE IKONICE za posebne efekte
export const PulsingIcon: React.FC<{ 
  icon: React.ComponentType<any>; 
  className?: string;
  color?: string;
}> = ({ icon: Icon, className = '', color = 'text-purple-400' }) => {
  return (
    <Icon className={`${color} animate-pulse hover:animate-bounce transition-all duration-300 ${className}`} />
  );
};

export const RotatingIcon: React.FC<{ 
  icon: React.ComponentType<any>; 
  className?: string;
  color?: string;
}> = ({ icon: Icon, className = '', color = 'text-blue-400' }) => {
  return (
    <Icon className={`${color} animate-spin hover:animate-pulse transition-all duration-300 ${className}`} />
  );
};

export const FloatingIcon: React.FC<{ 
  icon: React.ComponentType<any>; 
  className?: string;
  color?: string;
}> = ({ icon: Icon, className = '', color = 'text-green-400' }) => {
  return (
    <Icon className={`${color} animate-float hover:animate-bounce transition-all duration-300 ${className}`} />
  );
};
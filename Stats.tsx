import React from 'react';
import { Film, Tv, Star, Globe, TrendingUp, Award } from 'lucide-react';

interface StatsProps {
  totalMovies: number;
  totalSeries: number;
  averageRating: number;
  countries: number;
}

export const Stats: React.FC<StatsProps> = ({ 
  totalMovies, 
  totalSeries, 
  averageRating, 
  countries 
}) => {
  const stats = [
    { 
      icon: Film, 
      label: 'Filmova', 
      value: totalMovies, 
      color: 'text-amber-400', 
      bgColor: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      description: 'Kvalitetnih filmova',
      gradient: 'from-amber-400 to-orange-400'
    },
    { 
      icon: Tv, 
      label: 'Serija', 
      value: totalSeries, 
      color: 'text-blue-400', 
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      description: 'Preporučenih serija',
      gradient: 'from-blue-400 to-cyan-400'
    },
    { 
      icon: Star, 
      label: 'Prosečna ocena', 
      value: averageRating.toFixed(1), 
      color: 'text-yellow-400', 
      bgColor: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-500/30',
      description: 'Visok kvalitet',
      gradient: 'from-yellow-400 to-amber-400'
    },
    { 
      icon: Globe, 
      label: 'Zemalja', 
      value: countries, 
      color: 'text-emerald-400', 
      bgColor: 'from-emerald-500/20 to-green-500/20',
      borderColor: 'border-emerald-500/30',
      description: 'Svetska kinematografija',
      gradient: 'from-emerald-400 to-green-400'
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map(({ icon: Icon, label, value, color, bgColor, borderColor, description, gradient }, index) => (
        <div 
          key={index} 
          className={`bg-gradient-to-br ${bgColor} backdrop-blur-sm rounded-2xl p-6 text-center border ${borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105 group card-3d shadow-2xl hover:shadow-3xl`}
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          <div className="relative">
            <Icon className={`w-12 h-12 mx-auto mb-4 ${color} group-hover:scale-110 transition-transform duration-300 animate-float`} />
            
            {/* Floating particles around icon */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 ${color.replace('text-', 'bg-')} rounded-full opacity-60 particle`}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${20 + i * 20}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Enhanced 3D number display */}
          <div className={`text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2 group-hover:text-purple-300 transition-colors neon-glow transform group-hover:scale-110 duration-300`}>
            {value}
          </div>
          
          <div className="text-purple-300 text-sm font-medium uppercase tracking-wide mb-2">
            {label}
          </div>
          
          <div className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </div>
          
          {/* Enhanced progress bar with 3D effect */}
          <div className="mt-3 w-full bg-gray-700/30 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 group-hover:animate-shimmer shadow-lg`}
              style={{
                width: index === 2 ? `${(parseFloat(value.toString()) / 10) * 100}%` : '100%',
                boxShadow: `0 0 10px ${color.replace('text-', '')}`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
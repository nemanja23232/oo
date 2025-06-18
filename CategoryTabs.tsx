import React from 'react';
import { Tv, Film, Globe, Home } from 'lucide-react';

export type CategoryType = 'all' | 'domestic-series' | 'foreign-series' | 'domestic-films' | 'foreign-films';

interface CategoryTabsProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
  counts: Record<CategoryType, number>;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ 
  activeCategory, 
  onCategoryChange, 
  counts 
}) => {
  const categories = [
    { id: 'all', label: 'Sve', icon: Globe, color: 'text-white' },
    { id: 'domestic-series', label: 'Domaće serije', icon: Home, color: 'text-emerald-400' },
    { id: 'foreign-series', label: 'Strane serije', icon: Tv, color: 'text-blue-400' },
    { id: 'domestic-films', label: 'Domaći filmovi', icon: Home, color: 'text-purple-400' },
    { id: 'foreign-films', label: 'Strani filmovi', icon: Film, color: 'text-amber-400' },
  ] as const;

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map(({ id, label, icon: Icon, color }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id as CategoryType)}
          className={`
            flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105
            ${activeCategory === id 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl scale-105 border-2 border-purple-400' 
              : 'bg-gray-800/50 backdrop-blur-sm text-purple-300 hover:bg-purple-600/20 hover:text-white border border-purple-500/30'
            }
          `}
        >
          <Icon className={`w-4 h-4 mr-2 ${activeCategory === id ? 'text-white' : color}`} />
          <span className="font-semibold">{label}</span>
          <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
            activeCategory === id 
              ? 'bg-white/20 text-white' 
              : 'bg-purple-600/30 text-purple-200'
          }`}>
            {counts[id as CategoryType]}
          </span>
        </button>
      ))}
    </div>
  );
};
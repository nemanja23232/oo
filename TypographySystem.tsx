import React from 'react';

// 📝 POBOLJŠANA TIPOGRAFSKA HIJERARHIJA - konzistentna kroz ceo sajt

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'white';
  gradient?: boolean;
  glow?: boolean;
}

// 🎯 GLAVNI NASLOVI
export const MainHeading: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  color = 'primary',
  gradient = true,
  glow = true
}) => {
  const colorClasses = {
    primary: gradient ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent' : 'text-purple-400',
    secondary: gradient ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent' : 'text-blue-400',
    accent: gradient ? 'bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent' : 'text-amber-400',
    muted: 'text-gray-300',
    white: 'text-white'
  };

  return (
    <h1 className={`
      text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
      font-bold 
      leading-tight 
      ${colorClasses[color]}
      ${glow ? 'neon-glow' : ''}
      ${className}
    `}>
      {children}
    </h1>
  );
};

// 📰 SEKUNDARNI NASLOVI
export const SectionHeading: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  color = 'primary',
  gradient = true
}) => {
  const colorClasses = {
    primary: gradient ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent' : 'text-purple-400',
    secondary: gradient ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent' : 'text-blue-400',
    accent: gradient ? 'bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent' : 'text-amber-400',
    muted: 'text-gray-300',
    white: 'text-white'
  };

  return (
    <h2 className={`
      text-2xl sm:text-3xl lg:text-4xl 
      font-bold 
      leading-tight 
      ${colorClasses[color]}
      ${className}
    `}>
      {children}
    </h2>
  );
};

// 🏷️ PODNASLOVI
export const SubHeading: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  color = 'secondary'
}) => {
  const colorClasses = {
    primary: 'text-purple-300',
    secondary: 'text-blue-300',
    accent: 'text-amber-300',
    muted: 'text-gray-400',
    white: 'text-white'
  };

  return (
    <h3 className={`
      text-lg sm:text-xl lg:text-2xl 
      font-semibold 
      leading-relaxed 
      ${colorClasses[color]}
      ${className}
    `}>
      {children}
    </h3>
  );
};

// 📄 TELO TEKSTA
export const BodyText: React.FC<TypographyProps & { size?: 'sm' | 'md' | 'lg' }> = ({ 
  children, 
  className = '', 
  color = 'muted',
  size = 'md'
}) => {
  const colorClasses = {
    primary: 'text-purple-200',
    secondary: 'text-blue-200',
    accent: 'text-amber-200',
    muted: 'text-gray-300',
    white: 'text-white'
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base lg:text-lg',
    lg: 'text-lg lg:text-xl'
  };

  return (
    <p className={`
      ${sizeClasses[size]}
      leading-relaxed 
      ${colorClasses[color]}
      ${className}
    `}>
      {children}
    </p>
  );
};

// 🏷️ LABELI
export const Label: React.FC<TypographyProps & { size?: 'sm' | 'md' | 'lg' }> = ({ 
  children, 
  className = '', 
  color = 'muted',
  size = 'sm'
}) => {
  const colorClasses = {
    primary: 'text-purple-300',
    secondary: 'text-blue-300',
    accent: 'text-amber-300',
    muted: 'text-gray-400',
    white: 'text-white'
  };

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <span className={`
      ${sizeClasses[size]}
      font-medium 
      uppercase 
      tracking-wide 
      ${colorClasses[color]}
      ${className}
    `}>
      {children}
    </span>
  );
};

// 💫 ISTAKNUTI TEKST
export const HighlightText: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  color = 'accent',
  gradient = true,
  glow = false
}) => {
  const colorClasses = {
    primary: gradient ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' : 'text-purple-400',
    secondary: gradient ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent' : 'text-blue-400',
    accent: gradient ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent' : 'text-amber-400',
    muted: 'text-gray-300',
    white: 'text-white'
  };

  return (
    <span className={`
      font-bold 
      ${colorClasses[color]}
      ${glow ? 'neon-glow' : ''}
      ${className}
    `}>
      {children}
    </span>
  );
};

// 📊 NUMERIČKI PRIKAZ
export const NumberDisplay: React.FC<TypographyProps & { 
  value: number | string;
  suffix?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({ 
  value, 
  suffix = '', 
  className = '', 
  color = 'accent',
  size = 'lg',
  gradient = true,
  glow = true
}) => {
  const colorClasses = {
    primary: gradient ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent' : 'text-purple-400',
    secondary: gradient ? 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent' : 'text-blue-400',
    accent: gradient ? 'bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent' : 'text-amber-400',
    muted: 'text-gray-300',
    white: 'text-white'
  };

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl lg:text-5xl',
    xl: 'text-5xl lg:text-6xl xl:text-7xl'
  };

  return (
    <div className={`
      ${sizeClasses[size]}
      font-bold 
      ${colorClasses[color]}
      ${glow ? 'neon-glow' : ''}
      ${className}
    `}>
      {value}{suffix && <span className="text-sm ml-1 opacity-80">{suffix}</span>}
    </div>
  );
};

// 🎭 CAPTION TEKST
export const Caption: React.FC<TypographyProps> = ({ 
  children, 
  className = '', 
  color = 'muted'
}) => {
  const colorClasses = {
    primary: 'text-purple-400',
    secondary: 'text-blue-400',
    accent: 'text-amber-400',
    muted: 'text-gray-500',
    white: 'text-white'
  };

  return (
    <span className={`
      text-xs 
      ${colorClasses[color]}
      ${className}
    `}>
      {children}
    </span>
  );
};

// 🔗 LINK TEKST
export const LinkText: React.FC<TypographyProps & { 
  href?: string;
  onClick?: () => void;
  external?: boolean;
}> = ({ 
  children, 
  className = '', 
  color = 'primary',
  href,
  onClick,
  external = false
}) => {
  const colorClasses = {
    primary: 'text-purple-400 hover:text-purple-300',
    secondary: 'text-blue-400 hover:text-blue-300',
    accent: 'text-amber-400 hover:text-amber-300',
    muted: 'text-gray-400 hover:text-gray-300',
    white: 'text-white hover:text-gray-200'
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { 
    href, 
    ...(external && { target: '_blank', rel: 'noopener noreferrer' })
  } : { onClick };

  return (
    <Component
      {...props}
      className={`
        ${colorClasses[color]}
        transition-all duration-300
        hover:underline
        focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded
        ${className}
      `}
    >
      {children}
    </Component>
  );
};
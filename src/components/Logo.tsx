import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true,
  textColor = 'text-slate-900'
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex min-w-0 items-center gap-2.5 ${className}`}>
      {/* SVG Emblem representing Ayudh Vikas (AV) Logo */}
      <svg 
        viewBox="0 0 200 200" 
        className={`${sizeMap[size]} shrink-0 drop-shadow-sm`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1: Back Red Outer Frame */}
        <rect 
          x="12" 
          y="12" 
          width="152" 
          height="152" 
          rx="26" 
          fill="#EE2B2B" 
        />
        
        {/* Layer 2: Middle Green Frame */}
        <rect 
          x="24" 
          y="12" 
          width="152" 
          height="152" 
          rx="26" 
          fill="#10B981" 
        />

        {/* Layer 3: Front Blue Frame */}
        <rect 
          x="36" 
          y="24" 
          width="152" 
          height="152" 
          rx="26" 
          fill="#253894" 
        />
        
        {/* Inner White Card */}
        <rect 
          x="52" 
          y="40" 
          width="120" 
          height="120" 
          rx="18" 
          fill="#FFFFFF" 
        />

        {/* Stylized 'A' Letter in Navy Blue */}
        <path 
          d="M 64 126 L 88 62 L 108 62 L 126 126 L 106 126 L 100 102 L 82 102 L 76 126 Z M 86 86 L 96 86 L 91 68 Z" 
          fill="#233876" 
        />

        {/* Stylized 'V' Letter in Crimson Red */}
        <path 
          d="M 98 62 L 118 62 L 134 106 L 148 62 L 168 62 L 142 126 L 122 126 Z" 
          fill="#A82222" 
        />
      </svg>

      {showText && (
        <div className="min-w-0 flex flex-col leading-tight">
          <span className={`whitespace-nowrap text-sm font-black tracking-tight sm:text-base lg:text-lg ${textColor}`}>
            AYUDH <span className="text-crimson">VIKAS</span>
          </span>
          <span className={`-mt-0.5 text-[9px] font-bold uppercase tracking-widest ${
            textColor.includes('ivory') || textColor.includes('white') ? 'text-gold' : 'text-emerald-700'
          }`}>
            Manpower Solutions
          </span>
        </div>
      )}
    </div>
  );
};

import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  filled?: boolean;
}

export const AirbnbLogo: React.FC<IconProps> = ({ size = 32, color = '#FF385C' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 1C18.008 1 19.463 1.963 20.751 4.269L21.284 5.261C24.731 11.711 29 20.148 29 23.5C29 28.173 25.527 31 21.5 31C18.418 31 16.033 29.252 15 27.15C13.967 29.252 11.582 31 8.5 31C4.473 31 1 28.173 1 23.5C1 20.148 5.269 11.711 8.716 5.261L9.249 4.269C10.537 1.963 11.992 1 14 1H16ZM16 3.5H13C11.742 3.5 10.739 4.142 9.673 6.048L9.156 7.01C5.811 13.256 2.5 20.301 2.5 23.5C2.5 26.657 4.966 28.5 8 28.5C10.617 28.5 12.66 26.921 13.5 25C13.9 24.08 15.1 24.08 15.5 25C16.34 26.921 18.383 28.5 21 28.5C24.034 28.5 26.5 26.657 26.5 23.5C26.5 20.301 23.189 13.256 19.844 7.01L19.327 6.048C18.261 4.142 17.258 3.5 16 3.5ZM16 11C18.2091 11 20 12.7909 20 15C20 17.2091 18.2091 19 16 19C13.7909 19 12 17.2091 12 15C12 12.7909 13.7909 11 16 11ZM16 13.5C15.1716 13.5 14.5 14.1716 14.5 15C14.5 15.8284 15.1716 16.5 16 16.5C16.8284 16.5 17.5 15.8284 17.5 15C17.5 14.1716 16.8284 13.5 16 13.5Z"
      fill={color}
    />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ size = 14, color = '#222222', filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill={filled ? color : 'none'} stroke={color} strokeWidth="2">
    <path d="M15.088 4.254a1 1 0 0 1 1.824 0l3.702 8.784 9.479.791a1 1 0 0 1 .568 1.748l-7.18 6.257 2.148 9.278a1 1 0 0 1-1.488 1.081L16 27.27l-8.141 4.922a1 1 0 0 1-1.488-1.081l2.148-9.278-7.18-6.257a1 1 0 0 1 .568-1.748l9.479-.791 3.702-8.784z" />
  </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ size = 16, color = '#222222' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M27 18v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V18" />
    <path d="M16 3v16" />
    <path d="m8 10 8-7 8 7" />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ size = 16, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill={filled ? '#FF385C' : 'rgba(0, 0, 0, 0.4)'} stroke={filled ? '#FF385C' : '#FFFFFF'} strokeWidth="2.5">
    <path d="M16 28C7 20 3 15 3 9.5 3 5.4 6.4 2 10.5 2 13 2 15 3.3 16 5.2 17 3.3 19 2 21.5 2 25.6 2 29 5.4 29 9.5 29 15 25 20 16 28Z" />
  </svg>
);

export const GridDotsIcon: React.FC<IconProps> = ({ size = 16, color = '#222222' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
    <circle cx="2" cy="2" r="1.5" />
    <circle cx="8" cy="2" r="1.5" />
    <circle cx="14" cy="2" r="1.5" />
    <circle cx="2" cy="8" r="1.5" />
    <circle cx="8" cy="8" r="1.5" />
    <circle cx="14" cy="8" r="1.5" />
    <circle cx="2" cy="14" r="1.5" />
    <circle cx="8" cy="14" r="1.5" />
    <circle cx="14" cy="14" r="1.5" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ size = 16, color = '#222222' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 10 16l10 10" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ size = 16, color = '#222222' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6l10 10-10 10" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 16, color = '#222222' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 6 20 20M26 6 6 26" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size = 14, color = '#FFFFFF' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13" cy="13" r="9" />
    <path d="m20 20 8 8" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ size = 16, color = '#222222' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="13" />
    <path d="M3 16h26M16 3a21 21 0 0 1 6 13 21 21 0 0 1-6 13 21 21 0 0 1-6-13 21 21 0 0 1 6-13Z" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ size = 16, color = '#222222' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
    <path d="M4 8h24M4 16h24M4 24h24" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ size = 16, color = '#717171' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-3.02 5.49 12.43 12.43 0 0 1 6.45 4.4A12.57 12.57 0 0 1 16 28.7z" />
  </svg>
);

export const LaurelWreathIcon: React.FC<IconProps> = ({ size = 28, color = '#222222' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.8">
    <path d="M6 8c2 4 4 12 10 16M26 8c-2 4-4 12-10 16M10 10c0 3 2 7 6 9M22 10c0 3-2 7-6 9" strokeLinecap="round" />
  </svg>
);

export const AmenityIcon: React.FC<{ type: string; size?: number; color?: string }> = ({
  type,
  size = 24,
  color = '#222222'
}) => {
  switch (type) {
    case 'hot-tub':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16a1 1 0 0 1 1 1v4a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-4a1 1 0 0 1 1-1Z" />
          <path d="M7 8c0-1.5 1-2.5 1-4M12 8c0-1.5 1-2.5 1-4M17 8c0-1.5 1-2.5 1-4" />
        </svg>
      );
    case 'pool':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 18c2 1 4 1 6 0s4-1 6 0 4 1 6 0M2 21c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />
          <path d="M18 10a2 2 0 1 0-4 0v2M12 6a2 2 0 1 0-4 0v6" />
        </svg>
      );
    case 'wifi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
        </svg>
      );
    case 'desk':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="10" rx="1" />
          <path d="M6 19v-4M18 19v-4M9 15h6" />
        </svg>
      );
    case 'parking':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </svg>
      );
    case 'ac':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="8" rx="2" />
          <path d="M6 17v2M12 17v2M18 17v2M7 10h10" />
        </svg>
      );
    case 'kitchen':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4v16M20 4v16M12 4v16M8 8h8M8 14h8" />
        </svg>
      );
    case 'tv':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="13" rx="2" />
          <path d="m8 3 4 4 4-4" />
        </svg>
      );
    case 'washer':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="13" r="5" />
          <path d="M6 6h.01M9 6h.01" />
        </svg>
      );
    case 'fire':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          <path d="M4 21h16" />
        </svg>
      );
    case 'fan':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c.5-2.5 2-4.5 4.5-5 3.5-.7 5.5 1.3 5 4.5-.5 2.5-2.5 4-5 4.5" />
          <path d="M12 12c-2.5.5-4.5 2-5 4.5-.7 3.5 1.3 5.5 4.5 5 2.5-.5 4-2.5 4.5-5" />
          <path d="M12 12c-.5-2.5-2-4.5-4.5-5-3.5-.7-5.5 1.3-5 4.5.5 2.5 2.5 4 5 4.5" />
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      );
    case 'door':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 21h16" />
          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
          <circle cx="9" cy="12" r="1" fill={color} />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
};

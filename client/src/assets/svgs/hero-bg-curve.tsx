import React from 'react';

const HeroBgCurve = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Enhanced orange gradient with smoother transitions */}
        <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c04800" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#e85c00" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#ff7518" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#c04800" stopOpacity="0.9" />
        </linearGradient>

        {/* Center glow effect */}
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ff7518" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff7518" stopOpacity="0" />
        </radialGradient>

        {/* Enhanced glow filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="15" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Subtle texture overlay */}
        <pattern id="noise" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="#000000" fillOpacity="0.05" />
          <rect width="1" height="1" fill="#ffffff" fillOpacity="0.05" x="30" y="30" />
          <rect width="1" height="1" fill="#ffffff" fillOpacity="0.05" x="70" y="70" />
          <rect width="1" height="1" fill="#ffffff" fillOpacity="0.05" x="10" y="90" />
          <rect width="1" height="1" fill="#ffffff" fillOpacity="0.05" x="90" y="10" />
        </pattern>
      </defs>

      <path
        d="M200,0
           L600,0
           C480,300 450,600 550,1000
           L250,1000
           C350,600 320,300 200,0 Z"
        fill="url(#orangeGradient)"
        filter="url(#glow)"
      />

      <path
        d="M400,0
           C300,300 290,600 400,1000"
        stroke="#ffffff"
        strokeWidth="1"
        strokeOpacity="0.1"
        fill="none"
      />

      {/* Texture overlay */}
      <rect x="0" y="0" width="800" height="1000" fill="url(#noise)" fillOpacity="0.5" />
    </svg>
  );
};

export default HeroBgCurve;

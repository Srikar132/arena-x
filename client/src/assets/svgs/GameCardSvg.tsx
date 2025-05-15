import { ArrowRight, ArrowRightLeft } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define the props interface with TypeScript
interface GameCardSvgProps {
  imageUrl: string;
  title: string;
  className?: string;
  id?: string;
  onClick?: () => void;
}

const GameCardSvg: React.FC<GameCardSvgProps> = ({
  imageUrl,
  title,
  className = '',
  id = `game-${Math.random().toString(36).substr(2, 9)}`,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Create unique IDs for SVG elements
  const cardClipId = `card-clip-${id}`;
  const borderGradientId = `border-gradient-${id}`;
  const hoverGradientId = `hover-gradient-${id}`;
  const imageClipId = `image-clip-${id}`;

  // Define padding between border and image
  const padding = 10;

  return (
    <div
      className={`flex flex-col items-center ${className} relative transition-transform duration-300 ${
        isHovered ? '' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* SVG Card */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="75%"
        viewBox="0 0 300 450"
        className="w-full max-w-xs cursor-pointer"
      >
        <defs>
          {/* Clip path for the card outline */}
          <clipPath id={cardClipId}>
            <path d="M40,0 H280 L300,20 V430 L260,450 H20 L0,430 V40 L40,0 Z" />
          </clipPath>

          {/* Clip path for the image with padding */}
          <clipPath id={imageClipId}>
            <path
              d={`M${40 + padding},${padding} H${280 - padding} L${300 - padding},${
                20 + padding
              } V${430 - padding} L${260 - padding},${450 - padding} H${20 + padding} L${padding},${
                430 - padding
              } V${40 + padding} L${40 + padding},${padding} Z`}
            />
          </clipPath>

          {/* Normal border gradient */}
          <linearGradient id={borderGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="10%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Hover border gradient */}
          <linearGradient id={hoverGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="#FF9900" />
          </linearGradient>
        </defs>

        {/* Outer border - changes color on hover */}
        <path
          d="M40,0 H280 L300,20 V430 L260,450 H20 L0,430 V40 L40,0 Z"
          fill="#0F0F0F"
          stroke={isHovered ? '#FF6B00' : '#ffffff'}
          strokeWidth="3"
          className="transition-colors duration-300"
        />

        {/* Inner gradient border with padding via scaling */}
        <g>
          <path
            d="M40,0 H280 L300,20 V430 L260,450 H20 L0,430 V40 L40,0 Z"
            fill="none"
            stroke={`url(#${isHovered ? hoverGradientId : borderGradientId})`}
            strokeWidth="3"
          />
        </g>

        <path
          d="M40,0 H280 L300,20 V430 L260,450 H20 L0,430 V40 L40,0 Z"
          fill="#0F0F0F"
          clipPath={`url(#${cardClipId})`}
        />

        <g clipPath={`url(#${imageClipId})`}>
          <image
            href={imageUrl}
            x="0"
            y="0"
            width="300"
            height="450"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Overlay for hover effect */}
          {isHovered && (
            <rect
              x="0"
              y="0"
              width="300"
              height="450"
              fill="rgba(255, 107, 0, 0.2)"
              className="transition-opacity duration-300"
            />
          )}
        </g>
      </svg>

      {/* Title below the card - changes color on hover */}
      <h3
        className={`font-furore text-xl mt-4 tracking-wider transition-colors duration-300 ${
          isHovered ? 'text-orange-500' : 'text-white'
        }`}
      >
        {title}
      </h3>
      <div className="absolute group top-0 left-0 right-0 bottom-28 flex-center">
        <Link to="/games">
          <button
            title="click"
            className="w-12 h-12 hidden group-hover:flex  cursor-pointer -rotate-45 items-center justify-center rounded-full bg-orange-500 hover:bg-orange-700 p-2"
          >
            <ArrowRight className="font-thin" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameCardSvg;

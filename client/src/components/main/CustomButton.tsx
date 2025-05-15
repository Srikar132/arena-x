import React from 'react';
import { cn } from '../../lib/utils';

interface CustomButtonProps {
  onClick?: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const CustomButton = ({
  onClick,
  title,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  className,
}: CustomButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-furore tracking-wider transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50';

  // Size variations
  const sizeStyles = {
    sm: 'text-xs py-2 px-3',
    md: 'text-sm py-3 px-5',
    lg: 'text-base py-4 px-6',
  };

  const variantStyles = {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/30',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700',
    outline: 'bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10',
    ghost: 'bg-transparent hover:bg-gray-800 text-white',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <div className="p-1 border-x border-orange-600 rounded-full">
      <button
        type={type}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          widthStyles,
          disabledStyles,
          className
        )}
        aria-disabled={disabled}
      >
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}

        <span className="uppercase">{title}</span>

        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}

        {/* Button shine effect overlay */}
        <span className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
          <span className="absolute -left-4 w-12 h-full transform -skew-x-12 bg-white/10 opacity-0 group-hover:animate-shine" />
        </span>
      </button>
    </div>
  );
};

export default CustomButton;

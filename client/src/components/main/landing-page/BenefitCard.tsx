import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';

interface BenefitCardProps {
  id: number;
  icon: any;
  title: string;
  description: string;
  highlight?: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-6 rounded-lg border bg-zinc-900  flex flex-col gap-4 ${
        isHovered ? 'border border-orange-500' : 'border-zinc-800/40'
      } transition-all duration-300 `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
        <Icon size={24} className={`${isHovered ? 'text-orange-500' : 'text-zinc-200'}`} />
      </div>

      <h3 className={`text-xl font-bold mt-2 ${isHovered ? 'text-orange-500' : 'text-zinc-200'}`}>
        {title}
      </h3>

      <p className="text-sm opacity-80">{description}</p>

      <div className="mt-2">
        <button
          className={`flex items-center text-sm font-semibold gap-1  ${
            isHovered ? 'text-orange-500 cursor-pointer underline-offset-4' : 'text-gray-300'
          }`}
        >
          Chat Now
          {isHovered ? <ArrowUpRight size={16} /> : <span className="ml-1">→</span>}
        </button>
      </div>
    </div>
  );
};

export default BenefitCard;

import { ArrowRight, Calendar, User, Users } from 'lucide-react';
import { useState } from 'react';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { formatDate } from '../../lib/utils';

// TypeScript interface for tournament data
interface Tournament {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  participants: number;
  maxTeams: number;
  currentTeams: number;
  entryFee: number | 'Free Entry';
  coinReward: number;
  startDate: string;
  isPlaying?: boolean;
  isFree?: string;
  buttonColor?: 'orange' | 'green'; // Color of the action button
}

// Props interface for our component
interface TournamentCardProps {
  tournament: Tournament;
  onClick?: () => void;
  isHighlighted?: boolean;
}

export default function TournamentCard({
  tournament,
  onClick,
  isHighlighted = false,
}: TournamentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/overview/tournaments/tournament/${slugify(tournament.title.toLowerCase())}`}
      className={`w-full   rounded-2xl overflow-hidden bg-zinc-900  text-white transition-all duration-300 border ${
        isHovered
          ? 'border-orange-500 shadow-lg shadow-orange-900/20'
          : isHighlighted
          ? 'border-orange-500'
          : 'border-gray-800'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-46 overflow-hidden">
        <img
          src={tournament.imageUrl}
          alt={tournament.title}
          className={`w-full h-full p-2 rounded-3xl object-cover transition-transform duration-300`}
        />

        {/* Playing badge */}
        {tournament.isPlaying && (
          <div
            className={`absolute bottom-0 left-4 text-xs px-3 py-1 rounded-full flex items-center group-hover:bg-orange-500 ${
              isHovered
                ? ' bg-orange-500 text-white transform-transition duration-300'
                : 'border border-green-500 text-white bg-gray-950'
            }`}
          >
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            <span className="font-sans">Playing</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {/* Title */}
        <h3
          className={`font-furore text-md mb-1 ${
            isHighlighted || isHovered
              ? 'text-orange-500 transform duration-300 transition-all'
              : 'text-white'
          }`}
        >
          {tournament.title}
        </h3>
        <p className="text-gray-400 text-xs mb-3">{tournament.subtitle}</p>

        {/* Rewards & Entry Row */}
        <div className="flex items-center gap-2 mb-4">
          {/* Coin Reward */}
          <div className="flex items-center">
            <div className="bg-yellow-500 text-white w-4 h-4 rounded-full flex items-center justify-center mr-2">
              <span className="text-xs font-bold">
                <BiRupee />
              </span>
            </div>
            <span className="text-xs font-medium">{tournament.coinReward}</span>
          </div>

          {/* Entry Fee */}
          <div className="flex items-center">
            <div className="bg-emerald-800 text-white w-4 h-4 rounded-full flex items-center justify-center mr-2">
              <span className="text-xs font-bold">
                <BiRupee />
              </span>
            </div>
            <span className="text-xs text-emerald-400 font-medium">
              {typeof tournament.entryFee === 'number' ? `${tournament.entryFee.toFixed(2)}` : ''}
            </span>
          </div>

          {/* Free Entry Badge */}
          {tournament.isFree && (
            <div className="bg-zinc-800/20 flex text-white text-xs px-2 py-1 rounded-xl">
              <Calendar size={12} className="mr-1" />
              Free Entry
            </div>
          )}
        </div>

        {/* Date Row */}
        <div className="p-2 rounded items-center bg-zinc-800/50 inline-flex text-xs text-gray-400 mb-4">
          <Calendar size={16} className="mr-1" />
          <span>{formatDate(tournament.startDate)}</span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800 mb-3"></div>

        {/* Teams & Players Footer */}
        <div className="flex items-center justify-between">
          {/* Teams */}
          <div className="flex items-center text-xs text-gray-400">
            <Users
              size={16}
              className={`mr-2 ${isHovered ? 'text-orange-500' : 'text-gray-500'} `}
            />
            <span>
              {tournament.currentTeams}/{tournament.maxTeams} Teams
            </span>
          </div>

          {/* Players */}
          <div className="text-xs flex text-gray-400">
            <User
              size={16}
              className={`mr-2 ${isHovered ? 'text-orange-500' : 'text-gray-500'} `}
            />
            {tournament.participants} Players
          </div>

          {/* Action Button */}
          <button
            onClick={onClick}
            aria-label="View tournament details"
            className={`w-8 h-8 rounded-full ${
              isHovered ? 'bg-orange-500' : 'bg-green-500'
            } flex items-center justify-center transition-all`}
          >
            <ArrowRight size={16} className={`text-white `} />
          </button>
        </div>
      </div>
    </Link>
  );
}

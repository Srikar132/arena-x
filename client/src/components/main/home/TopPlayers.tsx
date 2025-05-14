import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import TopPlayerCard from './TopPlayer';

// Sample fake player data
const topPlayers = [
  {
    id: 1,
    name: 'Jane Cooper',
    role: 'Duelist',
    score: 4.5,
    rank: 'Diamond',
    region: 'EUW',
    team: 'FIRE',
    avatarUrl: '/api/placeholder/80/80',
    hasNotification: true,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Controller',
    score: 4.8,
    rank: 'Platinum',
    region: 'NA',
    team: 'STORM',
    avatarUrl: '/api/placeholder/80/80',
    hasNotification: false,
  },
  {
    id: 3,
    name: 'Sofia Rodriguez',
    role: 'Sentinel',
    score: 5.0,
    rank: 'Immortal',
    region: 'LATAM',
    team: 'SHADOW',
    avatarUrl: '/api/placeholder/80/80',
    hasNotification: true,
  },
  {
    id: 4,
    name: 'Zara Hassan',
    role: 'Initiator',
    score: 4.9,
    rank: 'Radiant',
    region: 'ME',
    team: 'APEX',
    avatarUrl: '/api/placeholder/80/80',
    hasNotification: true,
  },
  {
    id: 5,
    name: 'Yuki Tanaka',
    role: 'Duelist',
    score: 4.7,
    rank: 'Diamond',
    region: 'JP',
    team: 'BLAZE',
    avatarUrl: '/api/placeholder/80/80',
    hasNotification: false,
  },
];

const TopPlayers = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const maxIndex = topPlayers.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 3 >= 0 ? prev - 3 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 3 < maxIndex ? prev + 3 : prev));
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 mt-20 ">
      <div className="w-full mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-bold font-furore text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl tracking-wider text-white">
            Top Players
          </h1>

          <div className="flex items-center gap-x-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              type="button"
              className={`rounded-full  cursor-pointer border border-orange-500 p-2 flex items-center justify-center w-10 h-10
                ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-500/20'}`}
            >
              <ArrowLeft className="text-white" size={20} />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className={`rounded-full cursor-pointer border border-orange-500 p-2 flex items-center justify-center w-10 h-10
                `}
            >
              <ArrowRight className="text-white" size={20} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-5">
            {topPlayers.slice(currentIndex, currentIndex + 3).map((player) => (
              <div key={player.id} className="w-full">
                <TopPlayerCard
                  name={player.name}
                  role={player.role}
                  score={player.score}
                  rank={player.rank}
                  region={player.region}
                  team={player.team}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPlayers;

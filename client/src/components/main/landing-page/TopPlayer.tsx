import { UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

interface TopPlayerCardProps {
  name?: string;
  role?: string;
  score?: number;
  rank?: string;
  region?: string;
  team?: string;
  avatarUrl?: string;
}

export default function TopPlayerCard({
  name = 'Jane Cooper',
  role = 'Duelist',
  score = 3.5,
  rank = 'Diamond',
  region = 'EUW',
  team = 'FIRE',
  avatarUrl = 'https://tse3.mm.bing.net/th?id=OIP.nQtFHlkYut68QLwy11sv3AHaHa&pid=Api&P=0&h=180',
}: TopPlayerCardProps) {
  const maxScore = 5;
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 >= 0.5;

  return (
    <Link
      to={`/player/${slugify(name.toLowerCase())}`}
      className="flex cursor-pointer flex-col group transition-colors duration-200 border-2 border-zinc-900 hover:border-orange-500 bg-zinc-900 rounded-xl p-4 text-white w-full "
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center overflow-hidden">
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-400 text-lg">{role}</p>
          </div>
        </div>
        <div className="w-10 h-10 group-hover:bg-orange-500 rounded-full bg-zinc-700 flex-center p-2">
          <UserPlus className="grou" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm mb-2">Score</span>
          <div className="flex">
            {[...Array(fullStars)].map((_, i) => (
              <svg
                key={`star-full-${i}`}
                className="w-6 h-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            {hasHalfStar && (
              <div className="relative w-6 h-6">
                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="absolute top-0 left-0 w-3 h-6 overflow-hidden">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
            {[...Array(maxScore - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
              <svg
                key={`star-empty-${i}`}
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-400 text-sm mb-2">Rank</span>
          <div className="flex items-center justify-center">
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 12L12 22L22 12L12 2Z"
                stroke="white"
                strokeWidth="2"
                fill="currentColor"
              />
            </svg>
            <span>{rank}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-400 text-sm mb-2">Region</span>
          <span>{region}</span>
        </div>

        <div className="flex flex-col">
          <span className="text-gray-400 text-sm mb-2">Team</span>
          <span className="text-green-500">{team}</span>
        </div>
      </div>
    </Link>
  );
}

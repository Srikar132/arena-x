import React from 'react';

interface ActivePlayersProps {
  players: {
    id: string;
    avatar: string;
    alt?: string;
  }[];
  totalCount: number;
  maxVisible?: number;
}

const ActivePlayers: React.FC<ActivePlayersProps> = ({ players, totalCount, maxVisible = 4 }) => {
  const visiblePlayers = players.slice(0, maxVisible);

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center">
        {/* Player avatars with overlap effect */}
        <div className="flex -space-x-3">
          {visiblePlayers.map((player, index) => (
            <div
              key={player.id}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-black relative"
              style={{
                zIndex: visiblePlayers.length - index,
              }}
            >
              <img
                src={player.avatar}
                alt={player.alt || `Player ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Counter bubble showing additional players */}
          {totalCount > maxVisible && (
            <div
              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm border-2 border-black relative"
              style={{ zIndex: 0 }}
            >
              {totalCount - maxVisible}+
            </div>
          )}
        </div>
      </div>

      {/* Label */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
        <span className="text-white text-lg font-medium">Active Players</span>
      </div>
    </div>
  );
};

export default ActivePlayers;

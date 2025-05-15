import { useState } from 'react';
import GameCardSvg from '../../../assets/svgs/GameCardSvg';
import CustomButton from '../CustomButton';

const gameData = [
  {
    id: 1,
    title: 'COSMIC RUSH',
    imageUrl: 'https://www.nextstudios.com/index/img/games/en/510-703-bycs.jpg?v=2',
  },
  {
    id: 2,
    title: 'APOCALYPSE',
    imageUrl: 'https://wallpapers.com/images/hd/anthem-game-1080-x-2160-4hymwofpafe012uw.jpg',
  },
  {
    id: 3,
    title: 'CYBER HUNTER',
    imageUrl: 'https://prodigits.co.uk/content4/wallpapers/2024/p2/28/f8a58043.jpg',
  },
  {
    id: 4,
    title: 'PIXEL PARADISE',
    imageUrl:
      'https://rukminim2.flixcart.com/image/850/1000/kim1aq80-0/physical-game/r/m/q/full-game-with-all-mods-single-multi-players-free-fire-digital-original-imafyd8azuxvvkyy.jpeg?q=90&crop=false',
  },
  // {
  //   id: 5,
  //   title: 'QUANTUM LEAP',
  //   imageUrl: 'https://www.nextstudios.com/index/img/games/en/510-703-bycs.jpg?v=2',
  // },
  // {
  //   id: 6,
  //   title: 'NEON DYNASTY',
  //   imageUrl: 'https://www.nextstudios.com/index/img/games/en/510-703-lgtgp.jpg?v=2',
  // },
];

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const handleGameClick = (gameId: number) => {
    setSelectedGame(gameId);
    console.log(`Selected game: ${gameId}`);
  };

  return (
    <section className="w-full common-padding mt-10">
      <div className="w-full container common-padding !py-5 mx-auto max-w-6xl rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="font-thin font-furore text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl tracking-wider text-white">
            Games
          </h1>
          <CustomButton
            title={'view more'}
            className="max-sm:px-1 py-2 font-serif max-sm:text-xs max-sm:py-1"
          />
        </div>
        <div className="absolute left-0 bottom-0 w-16 h-1 bg-orange-500 rounded"></div>
        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {gameData.map((game) => (
            <div key={game.id} className="flex justify-center">
              <GameCardSvg
                id={`game-${game.id}`}
                imageUrl={game.imageUrl}
                title={game.title}
                className="transition-all duration-300"
                onClick={() => handleGameClick(game.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;

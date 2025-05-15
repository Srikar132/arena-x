import GameCardSvg from '../../assets/svgs/GameCardSvg';
import CustomButton from './CustomButton';

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
  {
    id: 5,
    title: 'QUANTUM LEAP',
    imageUrl: 'https://www.nextstudios.com/index/img/games/en/510-703-bycs.jpg?v=2',
  },
  // {
  //   id: 6,
  //   title: 'NEON DYNASTY',
  //   imageUrl: 'https://www.nextstudios.com/index/img/games/en/510-703-lgtgp.jpg?v=2',
  // },
];

const Games = ({ className, parentStyles }: { className?: string; parentStyles?: string }) => {
  return (
    <section className={`w-full mt-10 relative ${parentStyles}`}>
      <div className={`w-full container  rounded-xl ${className}`}>
        <div className="flex items-center justify-between">
          <h1 className="font-thin font-furore text-xl lg:text-2xl xl:text-3xl tracking-wider text-white">
            Games
          </h1>
          <CustomButton
            title={'view more'}
            className="max-sm:px-1 py-2 font-serif !lowercase text-xs max-sm:py-1"
          />
        </div>
        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {gameData.map((game) => (
            <div key={game.id} className="flex justify-center">
              <GameCardSvg
                id={`game-${game.id}`}
                imageUrl={game.imageUrl}
                title={game.title}
                className="transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;

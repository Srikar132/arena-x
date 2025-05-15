import GameCardSvg from '../../assets/svgs/GameCardSvg';
import { gameData } from '../../data/home';
import CustomButton from './CustomButton';

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

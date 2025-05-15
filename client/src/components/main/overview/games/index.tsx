import GameCardSvg from '../../../../assets/svgs/GameCardSvg';
import { gameData } from '../../../../data/home';

const index = () => {
  return (
    <section className="w-full h-full flex flex-col common-padding gap-y-5">
      <h1 className="text-3xl first-letter:text-5xl font-furore font-bold">Games</h1>

      <div className="grid mt-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
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
    </section>
  );
};

export default index;

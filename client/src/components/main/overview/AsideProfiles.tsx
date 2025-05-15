import { Link } from 'react-router-dom';
import { gameData } from '../../../data/home';

const AsideProfiles = () => {
  return (
    <section className="px-2 py-5">
      <div className="flex flex-col gap-y-5">
        {gameData.map((game, i) => (
          <Link to="/overview" key={i}>
            <div className="h-14 w-14 border border-2 border-transparent hover:border-orange-500 duration-300 transition-colors flex-center rounded-full overflow-hidden object-cover">
              <img src={game.imageUrl} alt="game" className="w-full h-full" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AsideProfiles;

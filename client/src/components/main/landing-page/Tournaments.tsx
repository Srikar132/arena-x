import { dummyTournaments } from '../../../data/home';
import CustomButton from '../CustomButton';
import TournamentCard from '../TournamentCard';

const Tournaments = () => {
  return (
    <section className="w-full common-padding mt-10">
      <div className="w-full container common-padding !py-5 mx-auto max-w-6xl rounded-xl border border-zinc-700/70 shadow-2xl">
        <div className="flex items-center justify-between">
          <h1 className="font-thin font-furore text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl tracking-wider text-white">
            Tournaments
          </h1>
          <CustomButton
            title={'view more'}
            className="max-sm:px-1 py-2 font-serif !lowercase text-xs max-sm:py-1"
          />
        </div>

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
          {dummyTournaments.slice(2).map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;

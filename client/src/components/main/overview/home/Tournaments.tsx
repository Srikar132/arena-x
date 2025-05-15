import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CustomButton from '../../CustomButton';
import TournamentCard from '../../TournamentCard';
import { NavButton } from '../Navigation';

const Tournaments = () => {
  const location = useLocation();
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data only once when component mounts
  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        setLoading(true);
        // In the future, replace this with your actual API call
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();

        // Using dummy data for now
        import('../../../../data/home').then(({ dummyTournaments }) => {
          setTournaments(dummyTournaments as any);
          setLoading(false);
        });
      } catch (error) {
        console.error('Error fetching tournaments:', error);
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Filter tournaments based on their status
  const activeTournaments = tournaments.filter(
    (tournament: any) => tournament.status! === 'active'
  );
  const upcomingTournaments = tournaments.filter(
    (tournament: any) => tournament.status! === 'upcoming'
  );
  const finishedTournaments = tournaments.filter(
    (tournament: any) => tournament.status! === 'finished'
  );

  return (
    <section className="w-full mt-10 common-padding relative">
      <div className="w-full container rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="font-thin font-furore text-lg lg:text-2xl xl:text-3xl tracking-wider text-white">
            Tournaments
          </h1>
          <CustomButton
            title="view more"
            className="max-sm:px-1 py-2 font-serif !lowercase text-xs max-sm:py-1"
          />
        </div>

        {/* Tabs */}
        <nav className="w-full flex mt-10 items-center justify-between">
          <div className="flex-center gap-x-5">
            <NavButton
              className="font-sans capitalize min-w-24 "
              title="All"
              path="/overview"
              isActive={isActive('/overview')}
            />
            <NavButton
              className="font-sans capitalize min-w-24"
              title="Active"
              path="/overview/active"
              isActive={isActive('/overview/active')}
            />
            <NavButton
              className="font-sans capitalize min-w-24"
              title="upcoming"
              path="/overview/upcoming"
              isActive={isActive('/overview/upcoming')}
            />
            <NavButton
              className="font-sans capitalize min-w-24"
              title="finished"
              path="/overview/finished"
              isActive={isActive('/overview/finished')}
            />
          </div>
        </nav>

        {loading ? (
          <div className="flex items-center justify-center h-40">
            <p className="text-white">Loading tournaments...</p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<TournamentGrid tournaments={tournaments} />} />
            <Route path="/active" element={<TournamentGrid tournaments={activeTournaments} />} />
            <Route
              path="/upcoming"
              element={<TournamentGrid tournaments={upcomingTournaments} />}
            />
            <Route
              path="/finished"
              element={<TournamentGrid tournaments={finishedTournaments} />}
            />
          </Routes>
        )}
      </div>
    </section>
  );
};

// Reusable grid component to display tournaments
const TournamentGrid = ({ tournaments }: { tournaments: any }) => {
  return (
    <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {tournaments.length > 0 ? (
        tournaments.map((tournament: any) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <p className="text-white">No tournaments found</p>
        </div>
      )}
    </div>
  );
};

export default Tournaments;

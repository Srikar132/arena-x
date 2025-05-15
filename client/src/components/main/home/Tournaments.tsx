import { useState } from 'react';
import TournamentCard from './TournamentCard';
import BackgroundFilter from './BackdropFilter';

const dummyTournaments = [
  {
    id: 't1',
    title: 'Superliga Weekly',
    subtitle: 'Torneo Individual',
    imageUrl: 'https://res.cloudinary.com/lmn/image/upload/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/u/n/n/unnamed-12fb2.jpg',
    participants: 128,
    maxTeams: 12,
    currentTeams: 12,
    entryFee: 99.99,
    coinReward: 75,
    startDate: '2025-10-07T05:30:00',
    isPlaying: true,
    isFree: 'Free entry'
  },
  {
    id: 't2',
    title: "Champion's Cup",
    subtitle: 'Team Tournament',
    imageUrl: 'https://igfv3.s3.amazonaws.com/9c0ae6ab13a1c1e66eabdb3794d8d41e_1000.jpg',
    participants: 64,
    maxTeams: 16,
    currentTeams: 9,
    entryFee: 24.99,
    coinReward: 150,
    startDate: '2025-10-15T18:00:00',
    isPlaying: true,
    isFree: 'Free entry'
  },
  {
    id: 't3',
    title: 'Weekend Warrior',
    subtitle: 'Solo Challenge',
    imageUrl: 'https://i.ytimg.com/vi/vRr41KzQdCw/maxresdefault.jpg',
    participants: 256,
    maxTeams: 32,
    currentTeams: 28,
    entryFee: 9.99,
    coinReward: 120,
    startDate: '2025-10-12T12:00:00',
    isPlaying: true,
    isFree: 'Free entry'
  },
  // {
  //   id: 't4',
  //   title: 'Pro League Finals',
  //   subtitle: 'Professional Tournament',
  //   imageUrl: 'https://cdnb.artstation.com/p/assets/covers/images/000/682/237/large/jedd-chevrier-spark-boxart-small.jpg?1430690572',
  //   participants: 32,
  //   maxTeams: 8,
  //   currentTeams: 8,
  //   entryFee: 99.99,
  //   coinReward: 500,
  //   startDate: '2025-11-01T20:00:00',
  //   isPlaying: true,
  //   isFree: 'Free entry'
  // },
  // {
  //   id: 't5',
  //   title: 'Rookie Challenge',
  //   subtitle: 'Beginner Friendly',
  //   imageUrl: 'https://th.bing.com/th/id/OIP.R7wjPVH6uyvjqUYgEEMBewHaLL?&rs=1&pid=ImgDetMain',
  //   participants: 50,
  //   maxTeams: 10,
  //   currentTeams: 3,
  //   entryFee: 99.99,
  //   coinReward: 25,
  //   startDate: '2025-10-20T16:30:00',
  //   isPlaying: true,
  //   isFree: 'Free entry'
  // },
];

const Tournaments = () => {
  const [selectedTournament, setSelectedTournament] = useState<string | null>(null);

    const handleClick = (tournamentId: string) => {
    setSelectedTournament(tournamentId);
    console.log(`Selected tournament: ${tournamentId}`);
  };

  return (
    <section className="w-full common-padding mt-10">
      <div className="w-full container common-padding !py-5 mx-auto max-w-6xl rounded-xl border border-zinc-800/40 shadow-2xl">
        <h1 className="font-thin font-furore text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl tracking-wider text-white">
          Tournaments
        </h1>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 mb-14">
          {dummyTournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              onClick={() => handleClick(tournament.id)}
            />
          ))}
        </div>

        {selectedTournament && (
          <div className="mt-6 p-4 bg-black rounded-lg text-white">
            <p>Selected tournament ID: {selectedTournament}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tournaments;

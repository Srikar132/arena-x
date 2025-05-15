import { Link } from 'react-router-dom';
import { playerData } from '../../../data/home';
import CustomButton from '../CustomButton';
import Games from '../Games';
import LastWinners from '../LastWinners';
import ActivePlayers from '../Activeplayers';
import BackgroundFilter from './BackdropFilter';
import Navbar from './Navbar';
import PlayEarnEnjoy from '../PlayEarnEnjoy';
import Testimonials from './Testimonials';
import TopPlayers from './TopPlayers';
import Tournaments from './Tournaments';

const Home = () => {
  return (
    <div className="w-full">
      <section className="relative  common-padding w-full antialiased overflow-hidden">
        <Navbar />

        <div className="container mx-auto max-w-5xl  flex  relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 w-full max-w-6xl mx-auto">
            <div className="flex flex-col mt-36 gap-6">
              <PlayEarnEnjoy />
              <div className="flex flex-col gap-1 text-end font-furore text-2xl md:text-4xl lg:text-5xl xl:text-7xl uppercase tracking-tighter">
                <span className="text-white">ULTIMATE</span>
                <span className="text-orange-500">GAMERS&apos;S</span>
                <span className="text-white">HAVEN</span>
              </div>
              <div className="mt-6 flex justify-end">
                <Link to="/overview">
                  <CustomButton title="Get Started" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block" aria-hidden="true"></div>

            <div className="hidden lg:flex flex-col items-end  gap-4">
              <LastWinners className="bg-white/10 mt-32 mb-20 max-w-fit  backdrop-blur-sm border border-white/10" />

              <ActivePlayers players={playerData} totalCount={10} maxVisible={4} />
            </div>
          </div>
        </div>

        <BackgroundFilter />
      </section>

      <TopPlayers />
      <Tournaments />
      <Games className="max-w-6xl mx-auto" parentStyles="common-padding" />
      <Testimonials />
    </div>
  );
};

export default Home;

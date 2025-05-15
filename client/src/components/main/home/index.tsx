import { playerData } from '../../../data/home';
import CustomButton from '../CustomButton';
import ActivePlayers from './Activeplayers';
import BackgroundFilter from './BackdropFilter';
import Games from './Games';
import Navbar from './Navbar';
import PlayEarnEnjoy from './PlayEarnEnjoy';
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
                <CustomButton title="Join Now" onClick={() => {}} />
              </div>
            </div>

            <div className="hidden lg:block" aria-hidden="true"></div>

            <div className="hidden lg:flex flex-col items-end  gap-4">
              <div className="bg-white/10 mt-32 mb-20 max-w-fit  backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h3 className="capitalize text-xl mb-3 flex items-center gap-x-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-red-600 via-orange-400 to-orange-500" />
                  last winners
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="w-full p-2 flex items-center gap-2">
                      <div className="rounded-full overflow-hidden h-10 w-10">
                        <img src={'arena-x.png'} className="w-full h-full" />
                      </div>
                      <div className="flex flex-col gap-2 pr-10">
                        <span className="font-semibold text-sm font-furore">JACK SPARROW</span>
                        <span className="font-thin text-xs text-green-500">50+</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <ActivePlayers players={playerData} totalCount={10} maxVisible={4} />
            </div>
          </div>
        </div>

        <BackgroundFilter />
      </section>

      <TopPlayers />
      <Tournaments />
      <Games />
      <Testimonials />
    </div>
  );
};

export default Home;

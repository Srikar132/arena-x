import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './home';
import Tournaments from './tournaments';
import ALLGames from './games';
import Teams from './teams';
import Navigation from './Navigation';
import Footer from '../Footer';
import Games from '../Games';
import Statistics from './Statistics';
import AsideProfiles from './AsideProfiles';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <main className="flex-1 flex min-h-screen">
        {/* Sidebar (Profiles + Navigation) */}
        <aside className="hidden lg:flex">
          <div className="p-4 border-b border-gray-200">
            <div className="profiles">
              <AsideProfiles />
            </div>
          </div>
          <div className="p-4 navigation-menu h-screen bg-zinc-900">
            <Navigation />
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex flex-col mt-10 w-full">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/tournaments/*" element={<Tournaments />} />
            <Route path="/games/*" element={<ALLGames />} />
            <Route path="/teams/*" element={<Teams />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default Index;

import { Users2 } from 'lucide-react';
import { ReactNode } from 'react';
import { BiGame, BiHome, BiTrophy, BiUserX } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import CustomButton from '../CustomButton';

interface NavButtonProps {
  icon?: ReactNode;
  path: string;
  isActive: boolean;
  className?: string;
  title?: string;
}

export const NavButton = ({ icon, title, path, isActive, className = '' }: NavButtonProps) => {
  return (
    <Link to={path} className="min-h-10">
      <CustomButton
        icon={icon}
        title={title}
        showBorder={false}
        className={`px-2 py-2 flex-center ${className}`}
        variant={isActive ? 'primary' : 'secondary'}
      />
    </Link>
  );
};

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="flex flex-col items-center  py-4">
      <NavButton
        icon={<BiHome className="text-xl" />}
        path="/overview"
        isActive={isActive('/overview')}
      />

      <div className="rounded-full mt-5 bg-zinc-800 flex flex-col gap-y-4 px-2 py-4">
        <NavButton
          icon={<BiTrophy className="text-xl" />}
          path="/overview/tournaments"
          isActive={isActive('/overview/tournaments')}
        />
        <NavButton
          icon={<BiGame className="text-xl" />}
          path="/overview/games"
          isActive={isActive('/overview/games')}
        />
        <NavButton
          icon={<BiUserX className="text-xl" />}
          path="/overview/teams"
          isActive={isActive('/overview/teams')}
        />
      </div>
    </nav>
  );
};

export default Navigation;

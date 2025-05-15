import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { LOGO } from '../../../assets';
import { navItems } from '../../../data/home';
import ConnectToWallet from '../ConnectToWallet';
import CustomButton from '../CustomButton';
import NotificationBtn from '../NotificationBtn';

const Navbar = () => {
  return (
    <div className="w-full  common-padding  max-w-7xl mx-auto grid grid-cols-2 items-center md:grid-cols-3 ">
      <div className="flex items-center sm:gap-x-2 ">
        <Link to="/" className="hover:text-white   tracking-wider font-medium uppercase">
          <div className="flex gap-2 items-center">
            <div className="rounded-full overflow-hidden h-10 w-10 object-cover">
              <img src={LOGO} alt="arena-x" />
            </div>
            <span className="text-sm sm:text-xl font-furore  tracking-widest">Arena</span>
          </div>
        </Link>
      </div>

      <nav className="hidden md:flex  items-center justify-center gap-x-4 ">
        {navItems.map((item, i) => (
          <Link to={item.path}>
            <span
              className="text-sm tracking-wide  hover:underline underline-offset-4 transition-all duration-200  capitalize font-sans "
              key={i}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-x-0.5 md:gap-x-2">
        <ConnectToWallet />
        <NotificationBtn />
        <CustomButton
          title={'LOGIN'}
          className="max-sm:px-1 py-2 max-sm:text-xs max-sm:py-1"
          icon={<BiLogIn size={17} />}
        />
      </div>
    </div>
  );
};

export default Navbar;

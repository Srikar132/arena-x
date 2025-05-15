import { Link } from 'react-router-dom';
import { LOGO } from '../../../assets';
import ConnectToWallet from '../ConnectToWallet';
import NotificationBtn from '../NotificationBtn';

const Header = () => {
  return (
    <div className="w-full bg-zinc-900  common-padding !py-3  flex items-center justify-between ">
      <div className="flex items-center sm:gap-x-2 ">
        <Link to="/" className="hover:text-white   tracking-wider font-medium uppercase">
          <div className="flex gap-2 items-center">
            <div className="rounded-full overflow-hidden h-14 w-14 object-cover">
              <img src={LOGO} alt="arena-x" />
            </div>
            <span className="text-sm sm:text-xl font-furore  tracking-widest">Arena</span>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-end gap-x-0.5 md:gap-x-2">
        <ConnectToWallet />
        <NotificationBtn />
      </div>
    </div>
  );
};

export default Header;

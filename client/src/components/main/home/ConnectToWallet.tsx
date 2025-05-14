import { PiWalletFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const ConnectToWallet = () => {
  return (
    <Link
      to="/connect-to-wallet"
      aria-label="Connect to Wallet"
      className="flex items-center gap-2 rounded-full  md:bg-orange-500/30 backdrop-opacity-10 p-1 pl-1 pr-3 shadow-md  hover:shadow-lg hover:scale-[1.02] duration-200 max-md:pr-1"
    >
      <div className="rounded-full bg-white/80 text-orange-500 md:text-gray max-md:bg-transparent p-1   md:bg-orange-500 md:text-white flex items-center justify-center">
        <PiWalletFill size={20} />
      </div>
      <span className="hidden max-md:!hidden md:inline-block text-xs  text-white whitespace-nowrap">
        Connect Wallet
      </span>
    </Link>
  );
};

export default ConnectToWallet;

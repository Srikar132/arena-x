import { PiWalletFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const ConnectToWallet = () => {
  return (
    <Link
      to="/connect-to-wallet"
      aria-label="Connect to Wallet"
      className="flex items-center gap-2 rounded-full bg-orange-500/20 p-1 pl-2 pr-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
    >
      <div className="flex items-center justify-center rounded-full bg-orange-500 text-white p-1">
        <PiWalletFill size={20} />
      </div>
      <span className="hidden sm:inline text-sm text-white font-medium">Connect Wallet</span>
    </Link>
  );
};

export default ConnectToWallet;

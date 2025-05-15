import { BsBellFill } from 'react-icons/bs';

const NotificationBtn = ({ hasNotification = true }) => {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="relative p-2 rounded-full bg-orange-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-300"
    >
      <BsBellFill size={18} />

      {hasNotification && (
        <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-400 rounded-full animate-pulse" />
      )}
    </button>
  );
};

export default NotificationBtn;

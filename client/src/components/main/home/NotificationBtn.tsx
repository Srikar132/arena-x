import { BsBellFill } from 'react-icons/bs';

const NotificationBtn = ({ hasNotification = true }) => {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="relative cursor-pointer p-2 max-md:text-orange-500 md:bg-orange-500 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300"
    >
      <BsBellFill size={18} />

      {hasNotification && (
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-200 rounded-full animate-pulse" />
      )}
    </button>
  );
};

export default NotificationBtn;

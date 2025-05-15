import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import { BiArrowFromLeft } from 'react-icons/bi';

const LastWinners = ({ className }: { className?: string }) => {
  return (
    <div className={`rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="capitalize text-xl mb-3 flex items-center gap-x-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-red-600 via-orange-400 to-orange-500" />
          last winners
        </h3>
        <Link to="/overview/last-winners">
          <CustomButton
            icon={<BiArrowFromLeft className="mx-auto text-xs -rotate-45" />}
            className="!px-1 !py-1 flex-center "
            showBorder={false}
            variant="secondary"
          />
        </Link>
      </div>
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
  );
};

export default LastWinners;

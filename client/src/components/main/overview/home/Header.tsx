import { useEffect, useState } from 'react';
import LastWinners from '../../LastWinners';

interface HeaderProps {
  images: string[];
}

const Header = ({ images }: HeaderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(imageInterval);
    };
  }, [currentImageIndex, images.length]);

  return (
    <header className="w-full common-padding flex flex-wrap gap-5 relative">
      <div className="flex-1 basis-2xl relative rounded-lg border h-72  border-zinc-800 relative overflow-hidden">
        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 h-1/2 w-1 bg-zinc-700 rounded-full overflow-hidden flex flex-col justify-end">
          <div
            className="bg-orange-500 w-full transition-all duration-100 ease-linear"
            style={{ height: `${progress}%` }}
          />
        </div>
        <img
          src={images[currentImageIndex]}
          alt={`Carousel image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Last winners section */}
      <LastWinners className="bg-zinc-900 max-lg:w-full sm:min-w-sm" />
    </header>
  );
};

export default Header;

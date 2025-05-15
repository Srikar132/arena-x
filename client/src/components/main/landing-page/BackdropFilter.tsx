import { BADGE_IMAGE, DAIMONDS_IMAGE, HERO_IMAGE } from '../../../assets';
import HeroBgCurve from '../../../assets/svgs/hero-bg-curve';
import { cn } from '../../../lib/utils';
const BackgroundFilter = () => (
  <>
    <div className="-z-20 inset-0 absolute top-0 backdrop-blur-2xl ">
      <div className="absolute top-10 left-10 w-40 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob" />

      <div className="absolute top-10 right-0   md:w-44 md:h-44 max-sm:w-20 max-sm:h-20 lg:w-[30rem] lg:h-[30rem] bg-gradient-to-r from-transparent via-green-300 to-green-700 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob" />
    </div>

    <div
      className={cn(
        'pointer-events-none absolute inset-0 [background-size:80px_80px] select-none -z-10',
        '[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]'
      )}
    />

    <div className="absolute inset-0 -z-5 overflow-hidden max-sm:hidden">
      <div className="absolute h-full max-h-[1000px] w-full top-0 left-1/2 -translate-x-1/2 max-w-4xl">
        <HeroBgCurve />
      </div>

      <div className="absolute h-full max-h-[1000px]  left-1/2 -translate-x-1/2 w-full max-w-md flex justify-center items-end">
        <img
          src={HERO_IMAGE}
          alt="Gaming Character"
          className="pointer-events-none object-contain h-4/5 max-h-[80vh] ml-20 brightness-200 transform translate-y-5"
        />
      </div>

      <div className="absolute inset-0  bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d]" />
    </div>

    <div className="absolute hidden lg:block top-30 right-20 h-36 w-36">
      <img src={DAIMONDS_IMAGE} alt="daimond" className="obect-contain" />
    </div>

    <div className="absolute hidden lg:block bottom-20 left-10 h-30 w-30">
      <img src={BADGE_IMAGE} alt="badge" className="obect-contain" />
    </div>
  </>
);

export default BackgroundFilter;

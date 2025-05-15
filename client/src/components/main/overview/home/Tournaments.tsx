import CustomButton from '../../CustomButton';

const Tournaments = () => {
  return (
    <section className={`w-full mt-10 common-padding relative`}>
      <div className={`w-full container  rounded-xl`}>
        <div className="flex items-center justify-between">
          <h1 className="font-thin font-furore text-lg lg:text-2xl xl:text-3xl tracking-wider text-white">
            Tournaments
          </h1>
          <CustomButton
            title={'view more'}
            className="max-sm:px-1 py-2 font-serif !lowercase text-xs max-sm:py-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Tournaments;

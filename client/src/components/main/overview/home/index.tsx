import { images } from '../../../../data/overview';
import Games from '../../Games';
import Statistics from '../Statistics';
import Header from './Header';
import Tournaments from './Tournaments';

const index = () => {
  return (
    <section className="w-full  h-full flex flex-col gap-y-5">
      <Header images={images} />
      <Tournaments />

      <Statistics />
      <Games className="common-padding" />
    </section>
  );
};

export default index;

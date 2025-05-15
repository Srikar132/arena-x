import { images } from '../../../../data/overview';
import Games from '../../Games';
import Header from './Header';
import Tournaments from './Tournaments';

const index = () => {
  return (
    <div className="w-full  h-full flex flex-col gap-y-5">
      <Header images={images} />
      <Tournaments />
      <Games className="common-padding" />
    </div>
  );
};

export default index;

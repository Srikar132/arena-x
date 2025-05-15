import React from 'react';
import { TOURNAMENT_HEADER } from '../../../../assets';
import Tournaments from '../home/Tournaments';

const index = () => {
  return (
    <section className="w-full  h-full flex flex-col gap-y-5">
      <header className="w-full h-72 common-padding">
        <div className="w-full h-full rounded-lg overflow-hidden object-cover">
          <img src={TOURNAMENT_HEADER} alt="TOURNAMENTS" className="w-full h-full" />
        </div>
      </header>
      <Tournaments />
    </section>
  );
};

export default index;

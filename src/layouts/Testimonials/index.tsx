import React from 'react';
import PeopleSaid from './PeopleSaid';
import MoveButton from './MoveButton';

const Testimonials = () => {
  return (
    <section className="ct-section-bg-gradient py-28 mt-8">
      <div className="ct-container">
        <div className="mb-[54px] text-center">
          <h4 className="text-gray-400">TESTIMONIALS</h4>
          <h2 className="ct-section-title-sub">What people say about us?</h2>
        </div>
        <div className="relative px-[12.5%]">
          <PeopleSaid />
          <div className="ct-absolute-translate-center flex justify-between w-full">
            <MoveButton isBack />
            <MoveButton isNext />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

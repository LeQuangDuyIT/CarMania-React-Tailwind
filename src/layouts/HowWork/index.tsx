import React, { Fragment } from 'react';
import classNames from 'classnames';
import { howWorkSVG } from '../../utils/svg';
import pickUpDateSVG from '../../assets/symbols/pick-up-date.png';

const threeStepsToRent = [
  {
    symbol: howWorkSVG.pickLocation,
    title: 'Pick Your location',
    sub: 'Choose your location and find your best car.',
    hasBackground: false
  },
  {
    symbol: <img src={pickUpDateSVG} alt="pick-up Date" />,
    title: 'Pick-up date/time',
    sub: 'Select your pick up date and time to book your car.',
    hasBackground: true
  },
  {
    symbol: howWorkSVG.bookCar,
    title: 'Book your Desired Car',
    sub: 'We will deliver it directly to you.',
    hasBackground: false
  }
] as const;

const HowWork = () => {
  return (
    <section className="ct-container mt-28 px-[5.5%]">
      <div className="mb-8 text-center">
        <h4 className="text-gray-400">HOW IT WORK</h4>
        <h2 className="ct-section-title-sub">
          Rent your desired car with following 3 working steps
        </h2>
      </div>
      <div className="flex justify-around">
        {threeStepsToRent.map((step, index) => (
          <Fragment key={index}>
            <div className="w-[240px] text-center">
              <span
                className={classNames(
                  'flex justify-center items-center w-[129px] h-[129px] mx-auto mb-8  rounded-3xl',
                  {
                    'ct-teal-gardient shadow-pick-up-date-box': step.hasBackground,
                    'shadow-lg': !step.hasBackground
                  }
                )}
              >
                {step.symbol}
              </span>
              <h4 className="mb-2 font-bold">{step.title}</h4>
              <p>{step.sub}</p>
            </div>
            {index < threeStepsToRent.length - 1 && (
              <span className="w-[173px] h-fit mt-[64px] mx-4 border-t-[2px] border-dashed border-t-gray-400"></span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowWork;

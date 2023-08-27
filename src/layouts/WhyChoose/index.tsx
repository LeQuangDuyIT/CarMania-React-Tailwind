import classNames from 'classnames';
import HyundaiOrangeCar from '../../assets/cars/Hyundai-Orange-WhyChoose.png';
import { whyChooseSVG } from '../../utils/svg';

const reasonToChoose = [
  {
    symbol: whyChooseSVG.cheap,
    title: 'Cheapest Market Price Guaranteed',
    sub: 'We refund 100% if you find cheaper alternative'
  },
  {
    symbol: whyChooseSVG.driver,
    title: 'Hire Driver',
    sub: 'Don’t have a driver? We got you covered with that too'
  },
  {
    symbol: whyChooseSVG.sameDay,
    title: 'Same Day Delivery',
    sub: 'Book and we will deliver it directly to you within 24 Hours'
  },
  {
    symbol: whyChooseSVG.support,
    title: '24/7 Support',
    sub: 'Contact us if you have any issues'
  }
] as const;

const WhyChoose = () => {
  return (
    <section className="ct-section-bg-gradient mt-24 py-28">
      <div className="ct-container px-[5.5%] flex justify-between gap-20 ">
        <div className="relative basis-1/2 bg-why-choose-city-map bg-contain bg-no-repeat bg-right-bottom">
          <img
            className="absolute bottom-[-7.5%] right-0"
            src={HyundaiOrangeCar}
            alt="Car Mania"
            width={481}
          />
        </div>
        <div>
          <h4 className="text-gray-400">WHY CHOOSE US</h4>
          <h2 className="ct-section-title-sub">
            Get the best experience of
            <br /> rental cars
          </h2>
          <ul className="mt-8">
            {reasonToChoose.map((reason, index) => (
              <li
                key={index}
                className={classNames('flex gap-4', {
                  'mb-6': index !== reasonToChoose.length - 1
                })}
              >
                <div className="w-[44px] h-[44px] flex justify-center items-center rounded-xl shadow-why-choose-reason-symbol-box">
                  {reason.symbol}
                </div>
                <div>
                  <h4 className="font-bold">{reason.title}</h4>
                  <p>{reason.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

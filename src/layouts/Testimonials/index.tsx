import { useState, useEffect } from 'react';
import PeopleSaid from './PeopleSaid';
import MoveButton from './MoveButton';
import peopleSaidData, { PeopleSaidDataType } from '../../utils/people-said-data';

const Testimonials = () => {
  const [activedInterval, setActivedInterval] = useState<boolean>(true);
  const [currentPeople, setCurrentPeople] = useState<PeopleSaidDataType>(peopleSaidData[0]);

  useEffect(() => {
    let index: number = peopleSaidData.findIndex(people => people._id === currentPeople._id);
    let timer: number;

    const incrementIndex = () => {
      index = (index + 1) % peopleSaidData.length;
      setCurrentPeople(peopleSaidData[index]);
    };
    if (activedInterval) {
      timer = setInterval(incrementIndex, 4000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [currentPeople, activedInterval]);

  const handleMoveSlide = (step: number) => {
    let index: number = peopleSaidData.findIndex(people => people._id === currentPeople._id);
    index = (index + step) % peopleSaidData.length;
    setCurrentPeople(peopleSaidData[index]);
  };

  const shouldBack: boolean = currentPeople._id !== peopleSaidData[0]._id;
  const shouldNext: boolean = currentPeople._id !== peopleSaidData[peopleSaidData.length - 1]._id;

  return (
    <section className="ct-section-bg-gradient py-28 mt-8">
      <div className="ct-container">
        <div className="mb-[54px] text-center">
          <h4 className="text-gray-400">TESTIMONIALS</h4>
          <h2 className="ct-section-title-sub">What people say about us?</h2>
        </div>
        <div
          className="relative px-[12.5%]"
          onMouseEnter={() => setActivedInterval(false)}
          onMouseLeave={() => setActivedInterval(true)}
        >
          <PeopleSaid data={currentPeople} />
          <div className="ct-absolute-translate-center flex justify-between w-full">
            <MoveButton
              className={shouldBack ? 'bg-teal text-white' : 'bg-white'}
              isBack
              onMoveSlide={shouldBack ? () => handleMoveSlide(-1) : undefined}
            />
            <MoveButton
              className={shouldNext ? 'bg-teal text-white' : 'bg-white'}
              isNext
              onMoveSlide={shouldNext ? () => handleMoveSlide(1) : undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

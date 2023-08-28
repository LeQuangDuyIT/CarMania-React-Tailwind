import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import peopleSaidData, { PeopleSaidDataType } from '../../../utils/people-said-data';

interface PropsType {
  data: PeopleSaidDataType;
}

const PeopleSaid: React.FC<PropsType> = ({ data }) => {
  const { _id, photo, name, content } = data;
  const [ativedAnimation, setActivedAnimation] = useState<boolean>(true);

  useEffect(() => {
    setActivedAnimation(true);
    const timer: number = setTimeout(() => {
      setActivedAnimation(false);
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [data]);

  return (
    <div
      className={classNames('flex gap-20', { 'ct-animation-slide-in-from-right': ativedAnimation })}
    >
      <div className="relative basis-1/2 h-[550px] overflow-hidden">
        <img
          className="align-middle rounded-3xl h-full w-full object-cover"
          src={photo}
          alt={name}
        />
      </div>
      <div className="relative basis-1/2 flex flex-col justify-center">
        <p className="text-2xl leading-relaxed">{content}</p>
        <h4 className="mt-8 text-3xl font-bold">{name}</h4>
        <div className="absolute bottom-0 left-0 flex gap-1">
          {peopleSaidData.map(people => (
            <span
              key={people._id}
              className={`${people._id === _id ? 'bg-teal' : 'bg-gray-300'} block w-10 h-1`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleSaid;

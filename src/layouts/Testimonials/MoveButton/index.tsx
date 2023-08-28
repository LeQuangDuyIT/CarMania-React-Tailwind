import React from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

interface PropsType {
  isBack?: boolean;
  isNext?: boolean;
}

const MoveButton: React.FC<PropsType> = ({ isNext, isBack }) => {
  return (
    <button className="w-14 h-14 rounded-full bg-white shadow-why-choose-reason-symbol-box">
      {isNext && <ArrowLongRightIcon className="w-8 h-8 m-auto" />}
      {isBack && <ArrowLongLeftIcon className="w-8 h-8 m-auto" />}
    </button>
  );
};

export default MoveButton;

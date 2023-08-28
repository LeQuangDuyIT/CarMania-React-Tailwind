import React from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

interface PropsType {
  isBack?: boolean;
  isNext?: boolean;
  className?: string;
  onMoveSlide?: () => void;
}

const MoveButton: React.FC<PropsType> = ({ isNext, isBack, className, onMoveSlide }) => {
  return (
    <button
      className={`${className} w-14 h-14 rounded-full shadow-why-choose-reason-symbol-box`}
      onClick={onMoveSlide}
    >
      {isNext && <ArrowLongRightIcon className="w-8 h-8 m-auto" />}
      {isBack && <ArrowLongLeftIcon className="w-8 h-8 m-auto" />}
    </button>
  );
};

export default MoveButton;

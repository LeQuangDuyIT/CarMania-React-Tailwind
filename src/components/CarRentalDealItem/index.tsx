import { StarIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

import { CarRentalDataObj } from '../../utils/car-rental-data';
import PersonIcon from '../../assets/symbols/person-icon.png';
import GearLeverIcon from '../../assets/symbols/gear-lever-icon.png';
import AirIcon from '../../assets/symbols/air-icon.png';
import CarDoorIcon from '../../assets/symbols/car-door-icon.png';

interface PropsType {
  data: CarRentalDataObj;
}

const CarRentalDealItem: React.FC<PropsType> = ({ data }) => {
  const { carName, carImage, price, passengers, doors, stars } = data;
  return (
    <div className="flex flex-col w-[calc(25%-24px*0.75)] border rounded-xl">
      <div className="h-[198px] bg-[#F7F7FB] m-2 px-4 py-8 rounded-xl overflow-hidden">
        <img className="w-full h-auto align-middle" src={carImage} alt={carName} />
      </div>
      <div className="flex flex-col gap-2 grow py-2 px-4">
        <div className="flex items-center gap-2">
          <StarIcon className="w-4 h-4 text-yellow-300" />
          <span className="font-bold text-sm">{stars}</span>
          <span className="text-xs text-gray-400">[100+ Review]</span>
        </div>
        <h3 className="grow font-bold text-left">{carName}</h3>
        <ul className="grid grid-rows-2 grid-cols-2 gap-y-2 gap-x-8 py-2">
          <li className="flex items-center gap-2 text-xs text-gray-400">
            <img className="opacity-40" src={PersonIcon} alt="" width={16} />
            <span>{passengers} Passengers</span>
          </li>
          <li className="flex items-center gap-2 text-xs text-gray-400">
            <img className="opacity-40" src={GearLeverIcon} alt="" width={16} />
            <span>Manual</span>
          </li>
          <li className="flex items-center gap-2 text-xs text-gray-400">
            <img className="opacity-40" src={AirIcon} alt="" width={16} />
            <span>Air Conditioning</span>
          </li>
          <li className="flex items-center gap-2 text-xs text-gray-400">
            <img className="opacity-40" src={CarDoorIcon} alt="" width={16} />
            <span>{doors} Doors</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center px-4 border-t h-16 text-sm">
        <div className="flex items-center gap-1">
          <span className="font-bold">
            Rs. <span className="text-xl">{price.toLocaleString('en-US')}</span>
          </span>
          <span className="text-gray-400">/day</span>
        </div>
        <button className="flex items-center gap-2 font-bold text-teal">
          <span>Rent Now</span>
          <ArrowLongRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CarRentalDealItem;

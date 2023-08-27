import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import CarRentalDealItem from '../../components/CarRentalDealItem';
import carRentalData from '../../utils/car-rental-data';

const CarRentalDeals = () => {
  return (
    <section className="ct-container mt-36 text-center">
      <div className="mb-[54px]">
        <h4 className="text-gray-400">POPULAR RENTAL DEALS</h4>
        <h2 className="ct-section-title-sub">Most popular cars rental deals</h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {carRentalData.map(carData => (
          <CarRentalDealItem key={carData._id} data={carData} />
        ))}
      </div>
      <div className="mt-[54px]">
        <button className="flex items-center gap-4 px-10 py-4 border rounded-full mx-auto font-bold">
          <span>Show All Vehicles</span>
          <ArrowLongRightIcon className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CarRentalDeals;

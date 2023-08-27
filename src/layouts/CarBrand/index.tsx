import React from 'react';
import Volkswagen from '../../assets/car-brand/Volkswagen.png';
import BMW from '../../assets/car-brand/BMW.png';
import Tata from '../../assets/car-brand/Tata.png';
import Mahindra from '../../assets/car-brand/Mahindra.png';
import Mazda from '../../assets/car-brand/Mazda.png';
import Toyota from '../../assets/car-brand/Toyota.png';
import Ford from '../../assets/car-brand/Ford.png';
import Nissan from '../../assets/car-brand/Nissan.png';

const cardBrandList = [
  { name: Volkswagen, logo: Volkswagen },
  { name: BMW, logo: BMW },
  { name: Tata, logo: Tata },
  { name: Mahindra, logo: Mahindra },
  { name: Mazda, logo: Mazda },
  { name: Toyota, logo: Toyota },
  { name: Ford, logo: Ford },
  { name: Nissan, logo: Nissan }
] as const;

const CarBrand = () => {
  return (
    <div className='ct-container flex justify-around items-center mt-8'>
      {cardBrandList.map(brand => (
        <img key={brand.name} src={brand.logo} alt={brand.name} width={64}/>
      ))}
    </div>
  );
};

export default CarBrand;

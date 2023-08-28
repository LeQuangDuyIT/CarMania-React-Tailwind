import i18_0001 from '../assets/cars-to-rental/i20-2018-model-noida-India.png';
import tata_0002 from '../assets/cars-to-rental/tata-zest-xe-petrol.png';
import suzuki_0003 from '../assets/cars-to-rental/suzuki-grand-vitara-t.png';
import hyundai_0004 from '../assets/cars-to-rental/hyundai-creta-2019-20-orange.png';

export interface CarRentalDataType {
  _id: string;
  carName: string;
  carImage: string;
  carBrand: string;
  price: number;
  passengers: number;
  doors: number;
  stars: number;
}

const carRentalData = [
  {
    _id: '0001',
    carName: 'i20 2018 Model - Noida, India',
    carImage: i18_0001,
    carBrand: 'i20',
    price: 1800,
    passengers: 4,
    doors: 4,
    stars: 4.8
  },
  {
    _id: '0002',
    carName: 'Tata Zest - XE Petrol',
    carImage: tata_0002,
    carBrand: 'tata',
    price: 1000,
    passengers: 4,
    doors: 4,
    stars: 4.2
  },
  {
    _id: '0003',
    carName: 'Suzuki Grand Vitara T',
    carImage: suzuki_0003,
    carBrand: 'suzuki',
    price: 2200,
    passengers: 4,
    doors: 4,
    stars: 4.9
  },
  {
    _id: '0004',
    carName: 'Hyundai Creta 2019-20 (Passion Orange)',
    carImage: hyundai_0004,
    carBrand: 'hyundai',
    price: 2000,
    passengers: 2,
    doors: 2,
    stars: 4.4
  }
] as const;

export default carRentalData;

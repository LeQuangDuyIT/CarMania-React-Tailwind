import AppStoreDownload from '../../assets/download-app/AppStore.png';
import GooglePlayDownload from '../../assets/download-app/GooglePlay.png';
import AudiRedCar from '../../assets/cars/Audi-Red-Hero.png';
import { easyUnderlineSVG } from '../../utils/svg';

const Hero = () => {
  return (
    <section className="ct-container grow flex items-center relative">
      <div className="basis-1/2">
        <h1 className="text-[64px] font-bold leading-tight">
          Rent your favorite car in{' '}
          <span className="relative text-teal">
            Easy<span className="absolute bottom-[-25%] left-0">{easyUnderlineSVG}</span>
          </span>{' '}
          steps.
        </h1>
        <p className="mt-4 text-gray-400 text-lg font-thin">
          Get a car wherever and whenever you need it with your <br />
          iOS or Android device.
        </p>
        <div className="flex gap-3 mt-8">
          <button>
            <img src={AppStoreDownload} alt="Download App Store" width={130} />
          </button>
          <button>
            <img src={GooglePlayDownload} alt="Download Google Play" width={130} />
          </button>
        </div>
      </div>
      <img
        className="w-[850px] absolute right-0 translate-x-[25%]"
        src={AudiRedCar}
        alt="Car Mania"
      />
    </section>
  );
};

export default Hero;
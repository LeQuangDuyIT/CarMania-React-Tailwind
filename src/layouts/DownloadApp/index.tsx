import AppStoreDownload from '../../assets/download-app/AppStore.png';
import GooglePlayDownload from '../../assets/download-app/GooglePlay.png';
import MockupApp01 from '../../assets/mockups/mockup-app-01.png';
import MockupApp02 from '../../assets/mockups/mockup-app-02.png';

const DownloadApp = () => {
  return (
    <section className="relative h-[180px] mt-72 bg-[#010101]">
      <div className="ct-container ct-teal-gardient-2 h-[360px] flex absolute bottom-0 left-1/2 translate-x-[-50%] rounded-3xl">
        <div className="basis-1/2 flex flex-col justify-center ml-[7.5%]">
          <h3 className="text-[40px] font-bold leading-tight mb-2">
            Download Carmania App
            <br />
            for free
          </h3>
          <p>For faster, easier booking and exclusive deals.</p>
          <div className="flex gap-3 mt-10">
            <button>
              <img src={AppStoreDownload} alt="Download App Store" width={130} />
            </button>
            <button>
              <img src={GooglePlayDownload} alt="Download Google Play" width={130} />
            </button>
          </div>
        </div>
        <div className="flex basis-1/2 mr-[7.5%] absolute right-0 bottom-[-12px]">
          <img className="basis-1/2 h-[calc(360px+90px)]" src={MockupApp01} alt="Car Mania App 1" />
          <img className="basis-1/2 h-[calc(360px+90px)]" src={MockupApp02} alt="Car Mania App 2" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

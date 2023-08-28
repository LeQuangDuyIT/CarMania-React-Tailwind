import PageLayout from './layouts/PageLayout';
import Header from './layouts/Header';
import Hero from './layouts/Hero';
import RentalBar from './layouts/RentalBar';
import CarBrand from './layouts/CarBrand';
import HowWork from './layouts/HowWork';
import WhyChoose from './layouts/WhyChoose';
import CarRentalDeals from './layouts/CarRentalDeals';
import Testimonials from './layouts/Testimonials';
import DownloadApp from './layouts/DownloadApp';
import Footer from './layouts/Footer';

const App = () => {
  return (
    <PageLayout>
      <div className="flex flex-col h-[709px] ct-top-site-gradient relative">
        <Header />
        <Hero />
        <RentalBar />
      </div>
      <div className="mt-[43px] pt-16">
        <CarBrand />
        <HowWork />
        <WhyChoose />
        <CarRentalDeals />
        <Testimonials />
        <DownloadApp />
        <Footer />
      </div>
    </PageLayout>
  );
};

export default App;

import React, {useState, useEffect} from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Stats from '../partials/Stats';
import Carousel from '../partials/Carousel';
import Tabs from '../partials/Tabs';
import Process from '../partials/Process';
import PricingTables from '../partials/PricingTables';
import TestimonialsBlocks from '../partials/TestimonialsBlocks';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesAnimation from '../partials/FeaturesAnimation';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Home() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      console.log(windowSize)
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header/>

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <div className="invisible absolute md:visible md:relative">
          <Stats />
        </div>

    
        
        <div >
          <Carousel />
        </div>
        
        {/*<Tabs />*/}
        {/*<Process />*/}
        {/*<PricingTables />*/}
        {/*<TestimonialsBlocks />*/}
        <FeaturesBlocks />
        {/*<FeaturesAnimation />*/}
        {/*<Cta />*/}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
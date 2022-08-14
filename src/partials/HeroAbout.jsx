import React from 'react';

import HeroBg from '../images/hero-bg-03.jpg';
import schlick from '../images/schlick_cartoon.png'
import HeroImage from '../images/about-hero.jpg';

function HeroAbout() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <img className="absolute inset-0 w-full h-full object-cover opacity-25" src={schlick} width="1440" height="577" alt="About" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <div className="relative flex justify-center items-center">
            
          
           
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroAbout;
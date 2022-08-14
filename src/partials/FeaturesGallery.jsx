import React from 'react';

import AboutImage01 from '../images/about-grid-01.jpg';
import AboutImage02 from '../images/about-grid-02.jpg';
import AboutImage03 from '../images/about-grid-03.jpg';
import AboutImage04 from '../images/about-grid-04.jpg';
import AboutImage05 from '../images/about-grid-05.jpg';
import AboutImage06 from '../images/about-grid-06.jpg';

function FeaturesGallery() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-6 pb-12 md:pt-8 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">I can turn your ideas into reality through IT solutions.</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Ever since I started programming, I have been obsessed with creating new applications that can contribute to the world. If you are in need of a developer that can help put your companies ideas into fruition, feel free to contact me. I would be happy to help.</p>
          </div>

          

          {/* Images grid
          <div className="grid grid-cols-12 gap-3 mt-12 md:mt-20" data-aos-id-gallery>
            <img className="col-span-4" src={AboutImage01} width="360" height="270" alt="About grid 01" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" />
            <img className="col-span-3" src={AboutImage02} width="270" height="270" alt="About grid 02" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="100" />
            <img className="col-span-5" src={AboutImage03} width="450" height="270" alt="About grid 03" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="200" />
            <img className="col-span-3" src={AboutImage04} width="270" height="270" alt="About grid 04" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="300" />
            <img className="col-span-5" src={AboutImage05} width="450" height="270" alt="About grid 05" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="400" />
            <img className="col-span-4" src={AboutImage06} width="360" height="270" alt="About grid 06" data-aos="fade-down" data-aos-anchor="[data-aos-id-gallery]" data-aos-delay="500" />
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default FeaturesGallery;

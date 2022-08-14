import React from 'react';

function Stats() {
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid grid-cols-2 gap-4 grid-flow-col lg:gap-6 md:grid-cols-3" data-aos-id-stats>
            {/* 1st item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]">
              <div className="font-red-hat-display text-2xl font-extrabold tracking-tighter mb-1">Software Engineer</div>
              <div className="text-gray-600 dark:text-gray-400">Graduated from Texas State university with a degree in Computer Science.</div>
            </div>
            {/* 2nd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="100">
              <div className="font-red-hat-display text-2xl font-extrabold tracking-tighter mb-1">UI/UX Designer</div>
              <div className="text-gray-600 dark:text-gray-400">3 Years Experience of creating different designing web and mobile applications.</div>
            </div>
            {/* 3rd item */}
            <div className="bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl" data-aos="fade-down" data-aos-anchor="[data-aos-id-stats]" data-aos-delay="200">
              <div className="font-red-hat-display text-2xl font-extrabold tracking-tighter mb-1">Web Developer</div>
              <div className="text-gray-600 dark:text-gray-400">Developed and deployed multple websites from online games to clones. </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
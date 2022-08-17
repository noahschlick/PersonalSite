import React from 'react';

function FeaturesAnimation({type, skills}) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-5 md:py-5">

          {/* Section header 
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-red-hat-display mb-4">Custom built ecosystem</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est.</p>
          </div>*/}

          {/* Custom animation */}
          <div className="max-w-3xl mx-auto">
            <div className="relative flex justify-center items-center overflow-hidden mb-20">

              
             

              {/* Moving tags */}
              <div className="absolute inset-0">
                <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent 
                                dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center 
                                tags-animation tags-2">
                                  {skills[type][0]}
                </div>
                <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:bg-indigo-500 dark:from-transparent 
                                dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center 
                                tags-animation tags-5">
                                  {skills[type][1]}
                </div>
                <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 to-teal-400 dark:bg-teal-500 dark:from-transparent 
                                dark:to-transparent dark:bg-opacity-25 rounded-full inline-flex items-center justify-center 
                                tags-animation tags-10">
                                  {skills[type][2]}
                </div>
                <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 
                              to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full 
                              inline-flex items-center justify-center tags-animation mt-14">
                                  {skills[type][3]}
                </div>
                <div className="absolute font-medium px-4 py-2 text-white dark:text-pink-500 bg-gradient-to-tr from-pink-500 
                              to-pink-400 dark:bg-pink-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full 
                              inline-flex items-center justify-center tags-animation tags-4 mt-14">
                                  {skills[type][4]}
                </div>
                <div className="absolute font-medium px-4 py-2 text-white dark:text-teal-500 bg-gradient-to-tr from-teal-500 
                              to-teal-400 dark:bg-teal-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full 
                              inline-flex items-center justify-center tags-animation tags-7 mt-14">
                                  {skills[type][5]}
                </div>

                <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500 
                              to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full
                               inline-flex items-center justify-center tags-animation mt-28 tags-2">
                                  {skills[type][6]}
                </div>
                <div className="absolute font-medium px-4 py-2 text-white dark:text-indigo-500 bg-gradient-to-tr from-indigo-500
                               to-indigo-400 dark:bg-indigo-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full 
                               inline-flex items-center justify-center tags-animation tags-5 mt-28">
                                  {skills[type][7]}
                </div>
                <div className="absolute font-medium px-4 py-2 text-white dark:text-purple-500 bg-gradient-to-tr from-purple-500 
                              to-purple-400 dark:bg-purple-500 dark:from-transparent dark:to-transparent dark:bg-opacity-25 rounded-full 
                              inline-flex items-center justify-center tags-animation tags-10 mt-28">
                                  {skills[type][7]}
                </div>

               
              </div>

              {/* Inner cricle */}
            
              {/* Logo 
              <svg className="absolute w-12 h-12 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#7F9CF5" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)" />
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)" />
              </svg>*/}
              {/* Side gradients */}
             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesAnimation;
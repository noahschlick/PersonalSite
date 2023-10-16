import React, {useState} from 'react';
import FeaturesAnimation from './FeaturesAnimation'
import {ArrowCircleRightIcon, CodeIcon, DocumentDuplicateIcon, DatabaseIcon} from '@heroicons/react/outline'


function FeaturesBlocks() {
  const [skillType, setSkillType] = useState("languages")

  const skills = {
    languages: ['Javascript', 'Python', 'Swift', 'Java', 'C++', 'SQL', 'HTML', 'CSS'],
    frameworks: ['React.js', 'Next.js', 'React native', 'iOS', 'Redux', 'Recoil', 'graphQL', 'React.js'],
    dev: ['OOP', 'Front-end', 'Back-end', 'UI UX Design', 'Data Management', 'Authentiation', 'APIs', 'Design Patterns'],
    soft: ['Comunication', 'Leadership', 'Problem Solving', 'Perseverence', 'Sharp Memory', 'Comunication', 'Leadership', 'Problem Solving']
  }

  

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-10 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
            <h2 className="h2 font-red-hat-display">Skills</h2>
          </div>

          {/* Items */}
          <div className="max-w-xs mx-auto sm:max-w-none md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4" data-aos-id-featbl>

            {/* 1st item */}
            <a 
              className="flex flex-col p-2 group text-white bg-gradient-to-tr from-teal-500 to-teal-400 dark:to-teal-500 shadow-2xl" 
              href="#0" 
              data-aos="fade-down" 
              data-aos-anchor="[data-aos-id-featbl]"
              onClick={() => setSkillType("languages")}
            >
              <CodeIcon className="w-10"/>
              
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">Languages</div>
              {/*<div className="grow opacity-80 mb-4">Java, Python, C++, Swift, JavaScript, HTML, CSS</div>*/}
              <ArrowCircleRightIcon class="h-10 w-10 text-white self-end transform -translate-x-2 group-hover:rotate-90 transition duration-150 ease-in-out"/>
              
            </a>
            
            <div className="visible  sm:invisible sm:absolute">
              {skillType === "languages" 
              ? (<FeaturesAnimation type={skillType} skills={skills}/>)
              : <></>
              }
            </div>

            

            {/* 2nd item */}
            <a  className="flex flex-col p-2 group text-white bg-gradient-to-tr from-purple-500 to-purple-400 dark:to-purple-500 shadow-2xl" 
                href="#0" 
                data-aos="fade-down" 
                data-aos-anchor="[data-aos-id-featbl]" 
                data-aos-delay="100"
                onClick={() => setSkillType("frameworks")}
              >
              <DocumentDuplicateIcon className="w-10"/>
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">Frame Works</div>
              {/*<div className="grow opacity-80 mb-4">React, Redux, iOS (Xcode),</div>*/}
              <ArrowCircleRightIcon class="h-10 w-10 text-white self-end transform -translate-x-2 group-hover:rotate-90 transition duration-150 ease-in-out"/>
            </a>
            <div className="visible  sm:invisible sm:absolute">
              {skillType === "frameworks" 
              ? (<FeaturesAnimation type={skillType} skills={skills}/>)
              : <></>
              }
            </div>


            {/* 3rd item */}
            <a 
              className="flex flex-col p-2 group text-white bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:to-indigo-500 shadow-2xl" 
              href="#0" 
              data-aos="fade-down" 
              data-aos-anchor="[data-aos-id-featbl]" 
              data-aos-delay="200"
              onClick={() => setSkillType("dev")}
            >
              <DatabaseIcon className="w-10"/>
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">Software Development</div>
              {/*<div className="grow opacity-80 mb-4">OOP, Design Patterns, SOLID Principles, Data Structures, Data Management</div>*/}
              <ArrowCircleRightIcon class="h-10 w-10 text-white self-end transform -translate-x-2 group-hover:rotate-90 transition duration-150 ease-in-out"/>
            </a>

            <div className="visible  sm:invisible sm:absolute">
              {skillType === "dev"
              ? (<FeaturesAnimation type={skillType} skills={skills}/>)
              : <></>
              }
            </div>

            {/* 4th item */}
            <a 
              className="flex flex-col p-2 group text-white bg-gradient-to-tr from-pink-500 to-pink-400 dark:to-pink-500 shadow-2xl" 
              href="#0" 
              data-aos="fade-down" 
              data-aos-anchor="[data-aos-id-featbl]" 
              data-aos-delay="300"
              onClick={() => setSkillType("soft")}
            >
              <svg className="w-8 h-8 mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" d="M20.243 6.757l.707.707-1.414 1.414-.707-.707a4 4 0 00-5.658 0l-.707.707-1.414-1.414.707-.707a6 6 0 018.486 0zm3.535-3.535l.707.707-1.414 1.414-.707-.707a9 9 0 00-12.728 0l-.707.707L7.515 3.93l.707-.707c4.296-4.296 11.26-4.296 15.556 0zM9 17.212V16a7 7 0 00-7-7H1V7h1a9 9 0 019 9v.788l2.302 5.18L11 23.117V24a4 4 0 01-4 4H5v3H3v-5h4a2 2 0 002-2v-2.118l1.698-.85L9 17.213zm12-.424V16a9 9 0 019-9h1v2h-1a7 7 0 00-7 7v1.212l-1.698 3.82 1.698.85V24a2 2 0 002 2h4v5h-2v-3h-2a4 4 0 01-4-4v-.882l-2.302-1.15L21 16.787zM16 12a1 1 0 110-2 1 1 0 010 2z" fillRule="nonzero" />
              </svg>
              <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">Soft Skills</div>
              {/*<div className="grow opacity-80 mb-4">Lorem ipsum dolor amet sit consect adipiscing.</div>*/}
              <ArrowCircleRightIcon class="h-10 w-10 text-white self-end transform -translate-x-2 group-hover:rotate-90 transition duration-150 ease-in-out"/>
            </a>
            <div className="visible  sm:invisible sm:absolute">
              {skillType === "soft"
              ? (<FeaturesAnimation type={skillType} skills={skills}/>)
              : <></>
              }
            </div>
          </div>
        
        </div>
      </div>
      <div className="invisible  sm:visible">
        <FeaturesAnimation type={skillType} skills={skills}/>
      </div>
      
    </section>
  );
}

export default FeaturesBlocks;

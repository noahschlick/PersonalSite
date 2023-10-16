import React, {useState} from 'react';
import FeaturesAnimation from './FeaturesAnimation'
import {ArrowCircleRightIcon, CodeIcon, DocumentDuplicateIcon, DatabaseIcon} from '@heroicons/react/outline'


function ProjectDisplay() {
    const colors = [
        {
            from: "from-teal-500", 
            to: "to-teal-400",
            dark: "dark:to-teal-500"
        },
        {
            from: "from-purple-500", 
            to: "to-purple-400", 
            dark: "dark:to-purple-500"
        },
        {
            from: "from-indigo-500", 
            to: "to-indigo-400", 
            dark: "dark:to-indigo-500"
        },
        {
            from: "from-pink-500", 
            to: "to-pink-400", 
            dark: "dark:to-pink-500"
        },
    ]

    const projects = [
        {
            name: "Spotify Clone",
            icon: <CodeIcon className="w-10"/>,
            color: {
                from: "from-teal-500", 
                to: "to-teal-400",
                dark: "dark:to-teal-500"
            },
            link: "https://spotify-clone-drab-theta.vercel.app/"
        },
        {
            name: "Reddit Clone",
            icon: <CodeIcon className="w-10"/>,
            color: {
                from: "from-indigo-500", 
                to: "to-indigo-400", 
                dark: "dark:to-indigo-500"
            },
            link: "https://reddit-clone-henna.vercel.app/"
        },
        {
            name: "Simon",
            icon: <CodeIcon className="w-10"/>,
            color: {
                from: "from-purple-500", 
                to: "to-purple-400", 
                dark: "dark:to-purple-500"
            },
            link: "https://simon-nu.vercel.app/"
        },

        {
            name: "Tic Tac Toe",
            icon: <CodeIcon className="w-10"/>,
            color: {
                from: "from-pink-500", 
                to: "to-pink-400", 
                dark: "dark:to-pink-500"
            },
            link: "https://github.com/noahschlick/TicTacToe-Player"
        },
        {
            name: "Github Account",
            icon: <CodeIcon className="w-10"/>,
            color: {
                from: "from-pink-500", 
                to: "to-pink-400", 
                dark: "dark:to-pink-500"
            },
            link: "https://github.com/noahschlick"
        },
        {
            name: "LoopString Blog",
            icon: <CodeIcon className="w-10"/>,
            color: {
                from: "from-purple-500", 
                to: "to-purple-400", 
                dark: "dark:to-purple-500"
            },
            link: "https://blog.loopstring.io/"
        },
        {
            name: "LoopString Forum",
            icon: <CodeIcon className="w-10"/>,
            color: {
                from: "from-indigo-500", 
                to: "to-indigo-400", 
                dark: "dark:to-indigo-500"
            },
            link: "https://forum.loopstring.io/"
        },
        {
            name: "ShroomSpy Website",
            icon: <CodeIcon className="w-10"/>,
            color: {
                from: "from-teal-500", 
                to: "to-teal-400",
                dark: "dark:to-teal-500"
            },
            link: "https://shroomspy.com/"
        }
    ]



  return (
    <section>
        <div className="py-10 px-3 md:py-10 border-t border-gray-200 dark:border-gray-800">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10">
                <h2 className="h2 font-red-hat-display">Portfolio</h2>
            </div>
            <div className="max-w-xs mx-auto sm:max-w-none md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4" data-aos-id-featbl>
                {projects.map((item, index) => {
                
                    return(
                        <a  className={`flex flex-col p-2 group text-white bg-gradient-to-tr ${item.color.from} ${item.color.to} dark:${item.color.dark} shadow-2xl`}
                            href={item.link} 
                            data-aos="fade-down" 
                        
                            data-aos-delay="100"
                            onClick={() => setSkillType("frameworks")}
                        >
                            {item.icon}
                            <div className="font-red-hat-display text-xl font-extrabold tracking-tighter mb-1">
                                {item.name}
                            </div>
                            <ArrowCircleRightIcon class="h-10 w-10 text-white self-end transform -translate-x-2 group-hover:rotate-90 transition duration-150 ease-in-out"/>
                        </a>
                    )
                })}
            </div>
        </div>
    </section>
  );
}

export default ProjectDisplay;

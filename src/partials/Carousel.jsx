import React, { useEffect } from 'react';

import CarouselImage01 from '../images/carousel-item-01.jpg';
import CarouselImage02 from '../images/carousel-item-02.jpg';
import CarouselImage03 from '../images/carousel-item-03.jpg';
import CarouselImage04 from '../images/carousel-item-04.jpg';
import CarouselImage05 from '../images/carousel-item-05.jpg';
import redditCloneImg from '../images/reddit_clone.png';
import spotifyCloneImg from '../images/spotify_clone.png';
import membotImg from '../images/membot_img.png';
import ticTacToe from '../images/tic-tac-toe.png';
import gitImg from '../images/git.png'


// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Autoplay, Navigation]);

function Carousel() {

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 ">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 font-red-hat-display mb-4">From rough design files, to powerful products</h1>
            
          </div>

        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="carousel swiper-container">
          <div className="swiper-wrapper">
            {/* Carousel items */}
            <div className="swiper-slide max-w-lg">
              <img className="transition-opacity duration-300" src={redditCloneImg} width="540" height="460" alt="Carousel item 01" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="https://reddit-clone-henna.vercel.app/">See Project</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <img className="transition-opacity duration-300" src={spotifyCloneImg} width="540" height="460" alt="Carousel item 02" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="https://spotify-clone-drab-theta.vercel.app/">See Project</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <img className="transition-opacity duration-300" src={membotImg} width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="https://simon-nu.vercel.app/">View Page</a>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-lg">
              <img className="transition-opacity duration-300" src={ticTacToe} width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="https://github.com/noahschlick/TicTacToe-Player">View Page</a>
                </div>
                
              </div>
            </div>

            <div className="swiper-slide max-w-lg">
              <img className="transition-opacity duration-300" src={gitImg} width="540" height="460" alt="Carousel item 03" />
              <div className="absolute inset-0 flex flex-col transition-opacity duration-300 translate-z-0">
                <div className="flex grow">
                  <a className="inline-flex btn-sm text-white bg-teal-500 hover:bg-teal-400 mx-auto self-center" href="https://github.com/noahschlick">View Page</a>
                </div>
              </div>
            </div>
            
           
          </div>
        </div>

        {/* Arrows */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mt-12 md:mt-16">
            <button className="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Carousel;

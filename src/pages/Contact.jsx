import React, { useRef } from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ergfk6s', 'template_ea0a0sm', form.current, 'HDZFyMQQD5Tl0PS8B')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 font-red-hat-display mb-4">Lets get in touch!</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">Message me if you wish to hire or seek any consaltation.</p>
              </div>

              {/* Contact form */}
              <form className="max-w-xl mx-auto" ref={form} onSubmit={sendEmail}>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="first-name">Name <span className="text-red-600">*</span></label>
                    <input  type="text"  name="user_name" className="form-input w-full" placeholder="Enter your name " required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="company">Company <span className="text-red-600">*</span></label>
                    <input type="text" name="company_name" className="form-input w-full" placeholder="Enter your company name" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="phone">Email <span className="text-red-600">*</span></label>
                    <input type="email" name="user_email" className="form-input w-full" placeholder="Enter your email address" required />
                  </div>
                </div>
               
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium" htmlFor="message">Details</label>
                      <span className="text-sm text-gray-500">Optional</span>
                    </div>
                    <textarea rows="4" name="message" className="form-textarea w-full" placeholder="What do you want to build with Appy?"></textarea>
                  </div>
                </div>
                {/*<div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full px-3">
                    <div className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-3">Job Role</div>
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">Recruiter</span>
                    </label>
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">Developer</span>
                    </label>
                    
                    <label className="flex items-center mb-2">
                      <input type="radio" className="form-radio" name="role" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-3">Other</span>
                    </label>
                  </div>
  </div>*/}
               
             
                {/*<div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    
                    <button 
                      className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center"
                      onClick={sendEmail}
                    >
                      <span>Contact</span>
                      <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                      </svg>
                    </button>
                  </div>
  </div>*/}

                <input class="bg-blue-50  w-full py-2 rounded-lg hover:cursor-pointer transition transform " type="submit" value="Send Message"></input>
              </form>

            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Contact;
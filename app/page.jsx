'use client'
import { useRef, useEffect, useState} from "react";
import Cards from "@/components/cards";
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import {InView} from 'react-intersection-observer';
import Loader from "@/components/loader";




export default function Home() {
    const form = useRef();
    const [loading, setLoading] = useState(true);
    // const [animateHero, setAnimateHero] = useState(false);

    useEffect(() => {
        // setTimeout(() => {
            setLoading(false);
            // setAnimateHero(true); // Trigger hero animation after loading
        // }, 2000);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_k6xv9eb', 'template_c6w8phw',  form.current, 'mcyz3nP4-VCb6xgX9')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('message sent');
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    // <>
    //  {loading ? <Loader /> :
   
    <main className="scroll-smooth flex flex-col items-center justify-between py-5 bg-white dark:bg-gray-900">
       {loading ? <Loader /> : null}
      <section id="hero" class="bg-white dark:bg-gray-900 mb-9" style={{display: loading ? 'none' : 'block'}}>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            
            <motion.div initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hi, I'm Binta Sani. <br/> A Frontend Web Developer</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am a goal-driven individual with a creative mindset and passion for learning and innovating. I also love baking and Photography.</p>
                <motion.a  whileTap={{ scale: 0.8 }} href="mailto:bintasani992@gmail.com?subject=subject&body=body" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get in touch
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </motion.a>
                <motion.a whileTap={{ scale: 0.8 }} href="https://drive.google.com/uc?export=download&id=1fSXjclaZbc8HFp8W-5rU2bk2ae4DGQuA" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Download Cv
                </motion.a> 
            </motion.div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/images/hero.webp" alt="mockup" className=""/>
            </div>                
        </div>
      </section>
      <InView>
      {({ inView, ref }) => (
      <motion.section  ref={ref}
      initial={{ opacity: 0 }}
      style={{display: loading ? 'none' : 'block'}}
      animate={inView ? { opacity: 1 } : {}} id="projects" className="py-8 px-6 min-h-screen mb-[33px] lg:mx-[119px]">
        <h2 className="text-4xl font-bold text-white text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 py-8 mx-auto">
          <Cards view="https://bills-pi.vercel.app/" first="Next.js" second="Tailwind css" third="PWA" src="/images/bills.webp" head="Bills" content="Bills is an all round bill payment progressive web app (PWA) built with Next.js where all utility bills and phone bills are processed through Paga."/>
          <Cards view="https://bills-admin.vercel.app/" first="Next.js" second="Tailwind css" third="Chart.js" src="/images/bills-admin.webp" head="BillEase+" content="BillEase+ is an Administration management platform built with Next.js where the data for Bills PWA is collected, sorted and stored and displayed."/>
          <Cards view="https://crownstores.netlify.app/" first="React" second="Styled-Components" third="Firebase" src="/images/project1.webp" head="Crown Store" content="Crown Stores is a modern e-commerce website built with React.js which offers simple authentication wth Firebase and secure payment processing via Stripe."/>
          <Cards view="https://bintasani.github.io/weatherapp/weather%20site/weatherHtml" first="Javascript" second="HTML" third="CSS" src="/images/project2.webp" head="Weather" content="Weather provides detailed weather information for the current day and the next four days, including wind speed, pressure, humidity, etc for locations worldwide."/>
          <Cards view="https://hng-task3.netlify.app/" first="React.js" second="Firebase" third="SCSS" src="/images/project3.webp" head="Image Gallery" content="Image Gallery is a user-friendly image gallery where images can be rearranged simply by dragging and dropping images in the desired position."/>
          <Cards view="https://moviesitetask.netlify.app/" first="React.js" second="Scss" third="TMDB Api" src="/images/project4.webp" head="Movie Box" content="MovieBox is an interactive movie website which offers users the opportunity to explore top rated movies and a search functionality to discover specific movies of interest."/>
        </div>
      </motion.section>
      )}
      </InView>
      <InView>
      {({ inView, ref }) => (
      <motion.section ref={ref}
      initial={{ opacity: 0 }}
      style={{display: loading ? 'none' : 'block'}}
      animate={inView ? { opacity: 1 } : {}} id="about" class=" bg-white dark:bg-gray-900 mb-[33px]">
        <div class=" items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <motion.img ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} 
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: inView ? 0.5 : 0  }}
            class="w-[424px] rounded-full h-[588px] shadow-2xl " src="/images/beautiful_african_developer_anime_style_woman_oper-removebg-preview.webp" alt="dashboard image"/>
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.5, delay: inView ? 0.5 : 0  }} 
            class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Me</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Greetings! I'm Binta Sani, a passionate Frontend developer who thrives on hard work and dedication. My days are often filled with writing impressive React apps. When I'm not engrossed in coding, you'll find me researching the latest industry trends or baking.</p>
                
            </motion.div>
        </div>
      </motion.section>
      )}
      </InView>
      <InView>
      {({ inView, ref }) => (
      <motion.section ref={ref}
      style={{display: loading ? 'none' : 'block'}}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}} id="contact" class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
            <div class="lg:flex lg:items-center lg:-mx-6">
                <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}} 
                transition={{ duration: 0.5, delay: inView ? 0.5 : 0  }} 
                class="lg:w-1/2 lg:mx-6">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                        Contact Details
                    </h1>

                    <div class="mt-6 space-y-8 md:mt-8">
                        <p class="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-gray-400 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                Abuja, Nigeria.
                            </span>
                        </p>

                        <p class="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-gray-400 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(+234) 813-7991-896</span>
                        </p>

                        <p class="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-gray-400 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                            <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">bintasani992@gmail.com</span>
                        </p>
                    </div>

                    <div class="mt-6 w-80 md:mt-8">
                        <h3 class="text-gray-600 dark:text-gray-300 ">Socials</h3>

                        <div class="flex mt-4 -mx-1.5 ">
                            
                            <a class="mx-1.5 dark:hover:text-gray-800 text-gray-400 transition-colors duration-300 transform hover:text-gray-700" href="https://www.linkedin.com/in/binta-sani-123015248/">
                                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                    <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                    <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                </svg>
                            </a>

                            <a class="mx-1.5 flex items-center dark:hover:text-gray-800 text-gray-400 transition-colors duration-300 transform hover:text-gray-700" href="https://github.com/BintaSani">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill='currentColor'/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}} 
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: inView ? 0.5 : 0  }}
                class="mt-8 lg:w-1/2 lg:mx-6">
                    <div
                        class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                        <h1 class="text-lg font-medium text-gray-700">Contact Form</h1>

                        <form class="mt-6" ref={form} onSubmit={sendEmail} >
                            <div class="flex-1">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                <input type="text" name='fullName' placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700  focus:ring-gray-100 dark:focus:ring-gray-800 focus:outline-none focus:ring " required/>
                            </div>

                            <div class="flex-1 mt-6">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input type="email" name='email' placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:ring-gray-100 dark:focus:ring-gray-800 focus:outline-none focus:ring " required/>
                            </div>

                            <div class="w-full mt-6">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea name='message' class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:ring-gray-100 dark:focus:ring-gray-800 focus:outline-none focus:ring " placeholder="Message" required></textarea>
                            </div>

                            <motion.button whileTap={{ scale: 0.8 }} type="submit" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 hover:bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-gray-100 dark:focus:ring-gray-700 ">
                                get in touch
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
      </motion.section>
      )}
      </InView>
        
    </main>
    // }
   
    // </>
  )
}

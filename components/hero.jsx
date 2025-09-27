import React from "react";
import { motion } from "framer-motion";

function Hero({ loading }) {
  return (
    <section
      id="hero"
      class="bg-white dark:bg-gray-900 mb-9 xl:h-[90vh] "
      style={{ display: loading ? "none" : "flex" }}
    >
      <div class="grid max-w-screen-xl px-4 md:px-6 lg:px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          class="mr-auto place-self-center lg:col-span-7"
        >
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hi, I'm Binta Sani. <br /> A Frontend Web Developer
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I am a goal-driven individual with a creative mindset and passion
            for learning and innovating. I also love baking and Photography.
          </p>
          <motion.a
            whileTap={{ scale: 0.8 }}
            href="mailto:bintasani992@gmail.com?subject=subject&body=body"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get in touch
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            href="https://drive.google.com/uc?export=download&id=15USEm-S1ROVUIASUy4c4H8MwwVg_Mrqt"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Download Cv
          </motion.a>
        </motion.div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/images/darkHero.webp" alt="mockup" className="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

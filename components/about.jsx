import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
function About({ loading }) {
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.section
          ref={ref}
          initial={{ opacity: 0 }}
          style={{ display: loading ? "none" : "flex" }}
          animate={inView ? { opacity: 1 } : {}}
          id="about"
          class=" bg-white dark:bg-gray-900 mb-[33px] lg:h-screen items-center"
        >
          <div class=" items-center py-8  px-4 md:px-6 lg:px-10 mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 ">
            <motion.img
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: inView ? 0.5 : 0,
              }}
              class="w-[424px] rounded-full h-[588px] shadow-2xl "
              src="/images/beautiful_african_developer_anime_style_woman_oper-removebg-preview.webp"
              alt="dashboard image"
            />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: inView ? 0.5 : 0 }}
              class="mt-4 md:ml-2 lg:ml-0 md:mt-0"
            >
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                About Me
              </h2>
              <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Greetings! I'm Binta Sani, a passionate Frontend developer who
                thrives on hard work and dedication. My days are often filled
                with writing impressive React apps. When I'm not engrossed in
                coding, you'll find me researching the latest industry trends or
                baking.
              </p>
            </motion.div>
          </div>
        </motion.section>
      )}
    </InView>
  );
}

export default About;

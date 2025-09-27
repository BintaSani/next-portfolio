"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function Contact({ loading }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k6xv9eb",
        "template_c6w8phw",
        form.current,
        "mcyz3nP4-VCb6xgX9"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.section
          ref={ref}
          style={{ display: loading ? "none" : "flex" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          id="contact"
          class="bg-white dark:bg-gray-900 xl:h-screen lg:items-center"
        >
          <div class="container px-6 py-12 2xl:py-0 mx-auto">
            <div class="lg:flex lg:items-center lg:-mx-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: inView ? 0.5 : 0 }}
                class="lg:w-1/2 lg:mx-6"
              >
                <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                  Contact Details
                </h1>

                <div class="mt-6 space-y-8 md:mt-8">
                  <p class="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-2 text-gray-400 dark:text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                      Abuja, Nigeria.
                    </span>
                  </p>

                  <p class="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-2 text-gray-400 dark:text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                      (+234) 813-7991-896
                    </span>
                  </p>

                  <p class="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-2 text-gray-400 dark:text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                      bintasani992@gmail.com
                    </span>
                  </p>
                </div>

                <div class="mt-6 w-80 md:mt-8">
                  <h3 class="text-gray-600 dark:text-gray-300 ">Socials</h3>

                  <div class="flex mt-4 -mx-1.5 ">
                    <a
                      class="mx-1.5 dark:hover:text-gray-800 text-gray-400 transition-colors duration-300 transform hover:text-gray-700"
                      href="https://www.linkedin.com/in/binta-sani-123015248/"
                    >
                      <svg
                        class="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <a
                      class="mx-1.5 flex items-center dark:hover:text-gray-800 text-gray-400 transition-colors duration-300 transform hover:text-gray-700"
                      href="https://github.com/BintaSani"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: inView ? 0.5 : 0,
                }}
                class="mt-8 lg:w-1/2 lg:mx-6"
              >
                <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                  <h1 class="text-lg font-medium text-gray-700">
                    Contact Form
                  </h1>

                  <form class="mt-6" ref={form} onSubmit={sendEmail}>
                    <div class="flex-1">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700  focus:ring-gray-100 dark:focus:ring-gray-800 focus:outline-none focus:ring "
                        required
                      />
                    </div>

                    <div class="flex-1 mt-6">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="johndoe@example.com"
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:ring-gray-100 dark:focus:ring-gray-800 focus:outline-none focus:ring "
                        required
                      />
                    </div>

                    <div class="w-full mt-6">
                      <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        name="message"
                        class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:ring-gray-100 dark:focus:ring-gray-800 focus:outline-none focus:ring "
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      type="submit"
                      class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 hover:bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-gray-100 dark:focus:ring-gray-700 "
                    >
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
  );
}

export default Contact;

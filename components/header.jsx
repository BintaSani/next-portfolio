"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/themeContext";

function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const show = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <nav class="bg-white px-4 lg:px-6 pb-2.5 dark:bg-gray-900 pt-7">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
              <img
                src="/logo-white.svg"
                class="mr-3 hidden dark:flex h-6 sm:h-9"
                alt="Binta Logo"
              />
              <img
                src="/logo-dark.svg"
                class="mr-3 dark:hidden h-6 sm:h-9"
                alt="Binta Logo"
              />
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Binta
              </span>
            </a>
            <div class="flex items-center lg:order-2">
              <button
                onClick={toggleTheme}
                class="w-13 lg:w-14 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-800 focus:outline-none dark:focus:ring-primary-800"
              >
                {darkMode ? (
                  <div>
                    <FontAwesomeIcon
                      id="sun"
                      icon={faSun}
                      size="lg"
                      class="stroke-white"
                    />
                  </div>
                ) : (
                  <div>
                    <FontAwesomeIcon
                      id="moon"
                      icon={faMoon}
                      size="lg"
                      class="stroke-white"
                    />
                  </div>
                )}
              </button>
              <button
                onClick={show}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="relative inline-flex items-center p-1 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {isOpen && (
                <div className="absolute z-50 right-4 p-3 top-20 shadow-md w-40 bg-primary-700 rounded">
                  <div class="py-2 flex justify-center items-center pr-4 pl-3 text-white rounded bg-primary-700 dark:text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white">
                    <a href="#projects">Projects</a>
                  </div>
                  <div class="py-2 flex justify-center items-center pr-4 pl-3 text-white rounded bg-primary-700 dark:text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white">
                    <a href="#about">About Me</a>
                  </div>
                  <div class="py-2 flex justify-center items-center pr-4 pl-3 text-white rounded bg-primary-700 dark:text-gray-400 hover:text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:text-white">
                    <a href="#contact">Contact</a>
                  </div>
                </div>
              )}
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#projects"
                    class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;

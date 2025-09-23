"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiShadcnui,
} from "react-icons/si";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { TbApi } from "react-icons/tb";
import { useTheme } from "@/context/themeContext";

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <div className="w-full px-6 py-9 md:py-10 ">
      <div className=" max-w-screen-xl mx-auto ">
        <Marquee
          gradient={true}
          gradientColor={darkMode ? "#111827" : "#FFFFFF"}
          speed={100}
        >
          <div className="flex items-center md:gap-40 gap-16 pl-10 md:pl-40 ">
            <IoLogoJavascript className="size-16 text-gray-500 dark:text-gray-400" />
            <SiTypescript className="size-16 text-gray-500 dark:text-gray-400" />
            <FaReact className="size-16 text-gray-500 dark:text-gray-400" />
            <SiNextdotjs className="size-16 text-gray-500 dark:text-gray-400" />
            <RiTailwindCssFill className="size-16 text-gray-500 dark:text-gray-400" />
            <FaCss3Alt className="size-16 text-gray-500 dark:text-gray-400" />
            <TbApi className="size-16 text-gray-500 dark:text-gray-400" />
            <ImGithub className="size-16 text-gray-500 dark:text-gray-400" />
            <SiNodedotjs className="size-16 text-gray-500 dark:text-gray-400" />
            <SiShadcnui className="size-16 text-gray-500 dark:text-gray-400" />
            <RiFirebaseFill className="size-16 text-gray-500 dark:text-gray-400" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;

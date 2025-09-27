import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { projectsData } from "@/utils/projectDtat";
import Cards from "./cards";

function Projects({ loading }) {
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.section
          ref={ref}
          initial={{ opacity: 0 }}
          style={{ display: loading ? "none" : "block" }}
          animate={inView ? { opacity: 1 } : {}}
          id="projects"
          className="py-8 px-6 min-h-screen mb-[33px] lg:mx-[119px]"
        >
          <h2 className="text-4xl font-bold text-white text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-4 px-6 py-8 mx-auto">
            {projectsData.map((project, index) => (
              <Cards key={index} {...project} />
            ))}
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-4 px-6 py-8 mx-auto">
            <Cards
              view="https://app.movnn.com/"
              first="Next.js"
              second="Tailwind css"
              third="Rest API"
              src="/images/movnn.webp"
              head="Movnn"
              // content="Movnn is a SaaS platform that provides a comprehensive solution for managing and optimizing business operations, enhancing productivity, and driving growth."
              content="A SaaS platform that enables businesses to manage inventory, automate order fulfillment, and track deliveries in real-time, enhancing productivity, and driving growth."
            />
            <Cards
              view="https://bills-admin.vercel.app/"
              first="Next.js"
              second="Tailwind css"
              third="Chart.js"
              src="/images/bills-admin.webp"
              head="BillEase+"
              content="BillEase+ is an Administration management platform built with Next.js where the data for Bills PWA is collected, sorted and stored and displayed."
            />
            <Cards
              view="https://crownstores.vercel.app/"
              first="React"
              second="Styled-Components"
              third="Redux"
              src="/images/project1.webp"
              head="Crown Store"
              content="Crown Stores is a modern e-commerce website built with React.js which offers simple authentication wth Firebase and secure payment processing via Stripe."
            />
            <Cards
              view="https://bintasani.github.io/weatherapp/weather%20site/weatherHtml"
              first="Javascript"
              second="HTML"
              third="CSS"
              fourth="Rest API"
              src="/images/project2.webp"
              head="Weather"
              content="Weather provides detailed weather information for the current day and the next four days, including wind speed, pressure, humidity, etc for locations worldwide."
            />
            <Cards
              view="https://imagesort.netlify.app/"
              first="React.js"
              second="Firebase"
              third="SCSS"
              src="/images/project3.webp"
              head="Image Gallery"
              content="Image Sort is a user-friendly image gallery where images can be rearranged simply by dragging and dropping images in the desired position."
            />
            <Cards
              view="https://trimpa-flights.vercel.app/"
              first="Next.js"
              second="Tailwind CSS"
              third="Firebase"
              src="/images/trimpa.webp"
              head="Trimpa"
              content="Trimpa is a sleek travel booking platform for flights, hotels, and packages, featuring deal highlights, promotions, and user reviews."
            />
          </div> */}
        </motion.section>
      )}
    </InView>
  );
}

export default Projects;

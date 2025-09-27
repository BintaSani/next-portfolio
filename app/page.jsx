"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

import Loader from "@/components/loader";
import Skills from "@/components/skills";

export default function Home() {
  const [loading, setLoading] = useState(true);
  // const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // setAnimateHero(true); // Trigger hero animation after loading
    // }, 2000);
  }, []);

  return (
    // <>
    //  {loading ? <Loader /> :

    <main className="scroll-smooth min-h-screen flex flex-col items-center overflow-x-hidden justify-between py-5 bg-white dark:bg-gray-900">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero loading={loading} />
          <section>
            <h2 className="text-4xl font-bold text-white text-center">
              Skills
            </h2>
            <Skills />
          </section>
          <Projects loading={loading} />
          <About loading={loading} />
          <Contact loading={loading} />
        </>
      )}
    </main>
    // }

    // </>
  );
}

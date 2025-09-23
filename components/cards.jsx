import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function cards({ src, head, content, first, second, third, fourth, view }) {
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ rotateY: -90 }}
          animate={inView ? { rotateY: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: inView ? 0.3 : 0,
          }}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="mb-6 cursor-pointer h-full"
        >
          <a href={view}>
            <motion.div className="max-w-sm flex flex-col h-full rounded overflow-hidden shadow-2xl shadow-gray-300/50 dark:shadow-black/50">
              <img className="w-full" src={src} alt="Sunset in the mountains" />
              <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-white text-xl mb-2">{head}</div>
                <p className="text-gray-500 text-base text-justify">
                  {content}
                </p>
              </div>
              <div className="px-6 pt-4 mt-auto pb-2">
                <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                  {first}
                </span>
                <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                  {second}
                </span>
                <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                  {third}
                </span>
                {fourth ? (
                  <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
                    {fourth}
                  </span>
                ) : null}
              </div>
            </motion.div>
          </a>
        </motion.div>
      )}
    </InView>
  );
}

export default cards;

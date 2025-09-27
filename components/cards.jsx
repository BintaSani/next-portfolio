"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function cards({
  src,
  head,
  content,
  first,
  second,
  third,
  fourth,
  view,
  summary,
}) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <InView>
        {/* <> */}
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
                <img
                  className="w-full"
                  src={src}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-700 dark:text-white text-xl ">
                      {head}
                    </h3>

                    <button
                      onClick={(e) => {
                        e.preventDefault(); // stop the <a> from firing
                        e.stopPropagation(); // stop bubbling
                        setShowPopup(true);
                      }}
                      className="bg-primary-700 hover:bg-primary-800 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      More
                    </button>
                  </div>
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
        {/* </> */}
      </InView>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-lg shadow-xl max-w-lg w-full p-6 relative"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-3">{head} – Summary</h2>
            <p className="text-gray-600 dark:text-gray-300">{summary}</p>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default cards;

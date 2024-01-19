import React from 'react';
import {motion} from 'framer-motion';
import { InView } from 'react-intersection-observer';

function cards({src, head, content, first, second, third,  view}) {

  
  return (
    <InView>
      {({ inView, ref }) => (
    <motion.div  
      ref={ref}
      initial={{ rotateY: -90 }}
      animate={inView ? { rotateY: 0 } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: inView ? 0.3 : 0 }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.05 }} class="mb-6 cursor-pointer">
      <a href={view}>
        <motion.div class="max-w-sm rounded overflow-hidden shadow-2xl shadow-gray-300/50 dark:shadow-black/50">
            <img class="w-full" src={src} alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-white text-xl mb-2">{head}</div>
                <p class="text-gray-500 text-base">{content}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{first}</span>
                <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{second}</span>
                <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{third}</span>
            </div>
        </motion.div>
      </a>
    </motion.div>
    )}
    </InView>
  )
}

export default cards

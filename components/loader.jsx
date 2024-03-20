import React from 'react';
import Image from 'next/image';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[90vh] lg:h-[85vh] bg-white dark:bg-gray-900">
      <Image
        src='/images/white.svg'
        alt='loader'
        width={50}
        height={50}
        className="animate-ping"
      />
    </div>
  )
}

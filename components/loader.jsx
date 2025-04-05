import React from 'react';
import Image from 'next/image';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[89vh] bg-white dark:bg-gray-900">
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

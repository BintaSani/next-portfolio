import React from 'react'

function cards({src, head, content, first, second, third}) {
  return (
    <div class="mb-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={src} alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{head}</div>
                <p class="text-gray-700 text-base">{content}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{first}</span>
                <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{second}</span>
                <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">{third}</span>
            </div>
        </div>
    </div>
  )
}

export default cards

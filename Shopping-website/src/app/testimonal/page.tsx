import Image from 'next/image'
import React from 'react'

export default function Testimonals() {
  return (
    <div>
    <section className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6   bg-yellow-100 p-8 rounded-md ">
        <figure className="max-w-screen-md mx-auto">
            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg> 
            <blockquote>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.&quot;</p>
            </blockquote>
            <div className="flex items-center justify-center w-full h-full mt-6 space-x-3">
                <Image className="w-6 h-6 rounded-full" src={"/images/testimonals.png"} alt="profile picture"
                width={100}
                height={100}
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">Lorem</div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Testimonal</div>
                </div>
            </div>
        </figure>
    </div>
  </section>
  </div>
  )
}



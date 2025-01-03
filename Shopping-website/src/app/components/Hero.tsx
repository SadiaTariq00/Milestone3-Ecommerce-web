

"use client"


import React from 'react';
import AOS from 'aos'; 
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';


export default function Hero() {
useEffect(() => {
  AOS.init ({
    duration :1000,
    once: true,
  });
}, []);
  return (
    <main className="flex w-full justify-between items-start bg-[#d4c5cd]  md:h-[500px] flex-col h-full md:flex-row">
      {/* left section */}
      <div className="md:w-[500px] pl-14 w-full mt-3 md:mt-11 md:ml-11" data-aos="fade-right">
      <p className="text-xl font-semibold underline md:mt-5">
   Trending Collection
        </p>
        <h1 className="md:text-5xl   text-2xl font-extrabold">
         Lets 
        </h1>
        <h1 className="md:text-5xl  text-2xl font-extrabold">
       Explore
        </h1>
        <h1 className="md:text-5xl  text-2xl font-extrabold">
     Unique
        </h1>
        <h1 className="md:text-5xl  text-2xl font-extrabold">
     Clothes.
        </h1>

        <p className="text-sm md:mt-3">
         Live from influential and innovative fashion!
        </p>
        <button className="bg-black py-2 px-9 text-white mt-4 hover:bg-gray-700  text-sm rounded-[16px]">
          {" "}
          Shop Now
        </button>
      </div>
      {/* Right section */}
      <div className="relative  mr-10" data-aos="fade-down">
        <Image
          src={"/images/slide1.png"}
          alt="hero"
          width={1000}
          height={1000}
          className="w-[500px] relative  mr-4 "
        ></Image>

      </div>
    </main>
  );
}


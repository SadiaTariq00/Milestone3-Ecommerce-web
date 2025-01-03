

import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "1",
    srcUrl: "/images/brand1.png",
  },
  {
    id: "2",
    srcUrl: "/images/brand2.png",
  },
  {
    id: "3",
    srcUrl: "/images/brand3.png",
  },
  {
    id: "4",
    srcUrl: "/images/brand4.png",
  },
];

const Brands = () => {
  return (
    <div className="flex items-center justify-center " >
      <div className="bg-emerald-800  px-20 py-8 rounded-lg w-4/5 max-w-4xl shadow-black shadow-lg transition duration-300 transform hover:scale-105">
        <h1 className="text-3xl text-center font-bold text-white underline mb-6">
          Top Brands
        </h1>
        <p className=" text-center font-bold text-white mb-6">
      Upto <span className="text-yellow-500">60% </span>off on brands
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {brandsData.map((brand) => (
            <div key={brand.id} className="relative w-28 h-16">
              <Image
                src={brand.srcUrl}
                alt={`Brand ${brand.id}`}
                layout="intrinsic"
                width={116}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

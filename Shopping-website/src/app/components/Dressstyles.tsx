




import Image from "next/image";

export default function DressStyle() {
  return (

      <div className="w-full flex justify-center items-center mt-10 mb-10 max-w-screen-2xl mx-auto" data-aos="fade-up"> 
        {/* Container */}
        <div className="w-[90%] md:w-[80%] bg-[#F0F0F0] p-2 rounded-[20px] shadow-lg shadow-black">
          {/* Boxes Container */}
          <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-6 items-center mt-10 mb-10 space-y-6 lg:space-y-0">
            {/* Card 1 */}
            <div className="relative bg-blue-400  shadow-black transition duration-300 transform hover:scale-105 hover:bg-blue-500 w-[280px] lg:w-[300px] h-[200px] rounded-[20px] shadow-md flex items-center">
              <div className="absolute left-5">
                <h1 className="text-white text-xl font-bold">
                  Collection <br /> For Girls
                </h1>
                <p className="text-white mt-2 text-sm">
                  Up To <span className="font-bold text-yellow-700">40% Off</span>
                </p>
                <button className="mt-4 bg-white text-black font-semibold py-1 px-3 rounded-lg shadow hover:bg-gray-200 transition duration-300 text-sm">
                  Shop Now
                </button>
              </div>
              <Image
                src={"/images/banner1.png"}
                alt="Girls Collection"
                width={150}
                height={0}
                className="absolute h-full  right-2 bottom-0 rounded-lg"
              />
            </div>

            <div className="relative bg-yellow-400  hover:bg-yellow-500  w-[280px] lg:w-[300px] h-[200px] rounded-[20px] shadow-md shadow-black transition duration-300 transform hover:scale-105 flex items-center">
              <div className="absolute left-5">
                <h1 className="text-green-700 text-xl font-bold">
                  Baby and <br /> Kids Fashion 
                </h1>
                <p className="text-white mt-2 text-sm">
                  Up To <span className="font-bold text-green-700">40% Off</span>
                </p>
                <button className="mt-4 bg-white text-black font-semibold py-1 px-3 rounded-lg shadow hover:bg-gray-200 transition duration-300 text-sm">
                  Shop Now
                </button>
              </div>
              <Image
                src={"/images/banner2.png"}
                alt="Girls Collection"
                width={150}
                height={0}
                className="absolute h-full  right-2 bottom-0 rounded-lg"
              />
            </div>
            {/* Card 3 */}
            <div className="relative bg-blue-400 hover:bg-blue-500 w-[280px] lg:w-[300px] h-[200px] rounded-[20px] shadow-md shadow-black transition duration-300 transform hover:scale-105 flex items-center">
              <div className="absolute left-5">
                <h1 className="text-white text-xl font-bold">
                  Collection <br /> For Men
                </h1>
                <p className="text-white mt-2 text-sm">
                  Up To <span className="font-bold text-yellow-700">40%  Off</span>
                </p>
                <button className="mt-4 bg-white text-black font-semibold py-1 px-3 rounded-lg shadow hover:bg-gray-200 transition duration-300 text-sm">
                  Shop Now
                </button>
              </div>
              <Image
                src={"/images/banner3.png"}
                alt="Men Collection"
                width={150}
                height={0}
                className="absolute h-full  right-2 bottom-0 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
  
  );
}

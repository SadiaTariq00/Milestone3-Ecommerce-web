import { AiOutlineMail } from "react-icons/ai";

export default function Udpate(){
    return(
        <main className="w-full flex justify-center items-center mb-14 mt-14"  data-aos="fade-up">
            <div className="w-[90%]    md:h-[150px] rounded-[20px] p-10 bg-emerald-900 flex flex-col md:flex-row justify-center items-center">
                {/* left */}
                <div className="w-full lg:w-[600px] ">
                <h1 className="text-2xl text-white md:text-3xl font-serif font-extrabold">SUBSCRIBE NEWSLETTER</h1>
                <p className="text-sm text-white md:text-sm font-serif">subscribe to our email and get updates right in your inbox</p>

                </div>
                {/* right */}
                <div className="space-y-4 mt-2">
                <div className="w-[300px]  flex justify-start items-center bg-[#F0F0F0] md:w-[300px] h-[35px] pl-2 md:ml-0 hover:border-none rounded-full"> <AiOutlineMail className="text-xl"/> <input   placeholder={`Enter your email address`}  className="bg-[#F0F0F0] w-[90%] rounded-full h-full  ml-2"/></div>
                <button className="w-full  text-sm border bg-white py-2 px-10 rounded-[20px]" >Subscribe Newsletter</button>

                </div>
            </div>
        </main>
    )
}
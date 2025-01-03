





export default function Footer(){
    return(
        <main className="bg-yellow-200 relative p-7 md:px-12 w-full h-full   md:h-[400px] flex flex-col  justify-start items-center ">
          
           
           
        <div className="w-full h-[60%] flex flex-col md:flex-row justify-between items-start md:mt-20 border-b-2 pb-5">
             {/* top div */}
             <div className="w-full md:w-[40%] mt-5">
                <h1 className="text-2xl md:text-3xl text-green-800 font-extrabold">FASHION.ERA</h1>
                <p className="mt-2 text-sm text-gray-700 font-sans ">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
                  
             </div>
             {/* bottom div */}
             <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-between md:place-items-center ">
                {/* box1 */}
             <div className="mt-4 ">
                <h2 className="text-xl font-bold ">STORE</h2>
                <ul className="space-y-2  text-gray-700">
                <li className="font-sans">Men Fashion</li>
                    <li className="font-sans">WomenFashion</li>
                    <li className="font-sans">Kids Fashion</li>
                    <li className="font-sans">Other</li>
                </ul>
             </div>
             {/* box 2 */}
             <div>
                <h2 className="text-xl font-bold  mt-4">HELP</h2>
                <ul  className="space-y-2  text-gray-700">
                    <li className="font-sans">Privacy Policy</li>
                    <li className="font-sans">Shipping and Delievery</li>
                    <li className="font-sans">Trcak Your Order</li>
                    <li className="font-sans">Refund Policy</li>
                </ul>
             </div>
             {/* box3 */}
             <div >
                <h2 className="text-xl font-bold  mt-4">SUPPORT</h2> 
                <ul className="space-y-2  text-gray-700">
                    <li className="font-sans">Feedback</li>
                    <li className="font-sans">Contact Us</li>
                    <li className="font-sans">Download App</li>
                    <li className="font-sans">Terms & Conditions</li>
                </ul>
             </div>
             {/* complete */}
             </div>
        </div>
        <div className=" w-full flex flex-col md:flex-row items-center mt-5 md:mt-7 justify-between">
            <p className="text-xs md:text-sm text-center text-gray-700 font-sans">Fashion.Era © 2000-2023, All Rights Reserved</p>
            
        </div>
        
        </main>
    )
}
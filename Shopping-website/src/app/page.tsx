import React from "react"

import Carousel from "./components/Hero";


import Offer from "./components/Offer";




import Menu from "./components/Item";
import Dressstyle from "./components/Dressstyles";
import Update from "./components/update";
import Brands from "./components/Brands";




export default function App(){


  return(
    <div className="bg-white min-h-screen">
     

      <Carousel />
    <Dressstyle/>
     
<Menu/>

      <Offer/>
      <Brands/>
   
 <Update/>
    


</div>
  )
}
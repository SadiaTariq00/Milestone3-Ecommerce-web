'use client'
import React from "react"


 
type Offer ={
  title:string,
  description:string,
}
const SpecialOffers: React.FC =() => {
 const offers: Offer[] = [
  {
    title : 'Big Deal Alert!',
    description:'Massive discounts on top products—up to 70% off! ⏳ Limited time only. Dont miss out—shop now! 🛍️'
  },
  {
    title:'Outfits Deal',
    description:'Stylish outfits at unbeatable prices—grab yours now and upgrade your wardrobe! Limited stock available. 🛍️✨ ',
  },
  {
    title:'Special Deal',
    description:'Exclusive offers just for you—shop now and enjoy unbeatable discounts on your favorite items! 🔥✨'
  },
 ];

const handleOfferClick = (description : string) => {
alert(description);

}
return(
  <section className="py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-emerald-800 ">Special Offer&apos;s For You</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{offers.map((offer, index) => (
    <button key={index}
    onClick={() => handleOfferClick(offer.description)}
    className="bg-yellow-200 shadow-lg rounded-lg  text-center hover:bg-slate-200 transition duration-300 transform hover:scale-105">
      <h3 className="text-3xl font-semibold text-emerald-700">{offer.title}</h3>
      <p className="text-black mt-3  text-lg font-sans">{offer.description}</p>

    </button>
))}

</div>

    </div>
  </section>
)


}

export default SpecialOffers;
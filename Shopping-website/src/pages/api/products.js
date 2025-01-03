export default function handler(_req, res) {
    
    const products = [
        {
             id: 1,
             name: "Yellow T-shirt",
             price : 180,
             oldPrice: 300,
    rating: 3.5,
            
             image:"/images/card1.png",

        },
        {
            id: 2,
            name: "Ethnic Kurti",
            price : 220,
            oldPrice: 250,
    rating: 4.5,
            image:"/images/card3.png",

       },
       {
        id: 3,
        name: "Shoes",
        price : 220,
        rating: 5.0,
        image:"/images/card3.jpeg",

   },
   {
    id: 4,
    name: "Round Neck T-shirt",
    price : 150,

    rating:5.0,
    image:"/images/card4.png",

},
{
    id: 5,
    name: "Girls Suit- Printed",
    price : 320,
    oldPrice:410,
    rating:2.0,
    image:"/images/card5.webp",

},
{
    id: 6,
    name: "Sandals",
    price : 220,
    rating: 2.5,
    image:"/images/card6.jpg",

},
{
    id: 7,
    name: "Multi-Purpose Jacket",
    price : 510,
    oldPrice: 700,
    rating: 4.5,
    image:"/images/card7.png",

},
{
    id: 8,
    name: "Jacket",
    price : 400,
    oldPrice: 480,
    rating: 3.5,
    image:"/images/card8.png",

},
{
    id: 9,
    name: " Hand Bags",
    price : 220,
    oldPrice: 300,
    rating:2.0,
    image:"/images/card9.jpeg",

},
    ]

    res.status(200).json(products);
}
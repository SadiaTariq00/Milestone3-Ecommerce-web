



import Image from "next/image";
import React from "react";


interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number; 
    rating?: number;
    image: string;
}

interface ProductCardProps extends Product {
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    oldPrice,
    rating,
    image,
    onAddToCart,
}) => {
    return (
        <div id="products" className="bg-slate-100 p-4 rounded-lg shadow-lg shadow-black transform transition-all duration-300 ease-in-out hover:scale-105">
            <Image
                src={image}
                alt={name}
                className="w-full h-72 object-cover rounded-md mb-4"
                width={1500}
                height={100}
            />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <div className="mb-2">
                {oldPrice && (
                    <span className="text-red-500 line-through mr-2">${oldPrice}</span>
                )}
                <span className="text-lg text-slate-900">${price}</span>
            </div>
            {rating && (
                <p className="text-yellow-500 font-medium">
                    ⭐ {rating.toFixed(1)} / 5
                </p>
            )}
            <div className="flex flex-col items-center justify-center">
                <button
                    onClick={() => onAddToCart({ id, name, price, oldPrice, rating, image })}
                    className="bg-black text--center text-white px-4 rounded-lg text-lg shadow-md hover:bg-slate-500 transition duration-300 ease-in-out mt-4"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;


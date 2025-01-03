



"use client";
import { useState, useEffect } from "react";

import { Product } from "@/pages/types";
import ProductCard from "./Productcard";
import Image from "next/image";
import  {useRouter} from "next/navigation"


const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router =  useRouter();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-4">
          <h1 className="text-4xl font-bold text-black underline mb-4"  data-aos="fade-up">NEW ARRIVALS</h1>
          <p className="text-xl text-black">Check out most promising product bought by our buyers</p>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-800">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-900 transition duration-300 ease-out transform"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-6 bg-slate-200 p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">
                Your Cart
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between mb-6"
                      >
                        <div className="flex items-center">
                          <Image
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-40 rounded-xl sm:w-24"
                            width={400}
                            height={100}
                          />
                          <div className="ml-4">
                            <span className="text-lg font-medium text-slate-600 block">
                              {product.name}
                            </span>
                            {product.oldPrice && (
                              <span className="text-red-500 line-through mr-2">
                                ${product.oldPrice}
                              </span>
                            )}
                            <span className="text-lg text-slate-900">
                              ${product.price}
                            </span>
                            {product.rating && (
                              <p className="text-yellow-500 font-medium">
                                ⭐ {product.rating.toFixed(1)} / 5
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: 
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>

                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-green-700 py-3 px-4 rounded-lg  text-lg shadow-md hover:bg-green-800 transition duration-300 text-white"
                      >
                        Checkout
                      </button>

                      <button
                        onClick={clearCart}
                        className="bg-red-700 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-red-800 transition duration-300 text-white"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-700">Your Cart is Empty</p>
              )}
            </div>
          )}
        </div>

        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                Checkout
              </h2>
              <p className="text-lg text-red-700">
                Please confirm your order!
              </p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total Amount:</span>
                  <span>
                    $
                    {cart.reduce(
                      (total, product) => total + product.price,
                      0
                    )}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-700 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-900 transition duration-300"
                >
                  Close
                </button>

                <button
                  onClick={() =>
                    alert("Are you sure? Your order is confirmed!")
                  }
                  className="bg-green-700 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-900 transition duration-300"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

import Navbar from "@/components/Navbar";

import React, { useState } from "react";


import Footer from "@/components/Footer";

import productList from "../data/products.js"
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard.jsx";
import CartModal from "@/components/CartModal.jsx";

const Products = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);


  return (
    <>
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <div className="mt-20 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </div>
      <Footer />
    </>
  );
};

export default Products;

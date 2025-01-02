import React from "react";
import dante from "../images/dante.png";
import bella from "../images/bella.jpg";
import massaro from "../images/Massaro-vini.png";
import amigos from "../images/amigos.png";
import Footer from "./Footer";
const Brands = () => {
  const imgArray = [
    {
      image: dante,
      title: "Olio Dante",
    },
    {
      image: bella,
      title: "Bella Contadina",
    },
    {
      image: massaro,
      title: "Massaro wine",
    },
    {
      image: amigos,
      title: "Amigos Coffe",
    },
  ];

  return (
    <>
      <div className="container mt-28 px-8">
        <h1 className="text-4xl font-bold md:text-left text-center">Brands we work with:</h1>
        <div className="brands my-4">
          {imgArray.map((image,title) => (
            <div className="brand flex flex-col items-center mx-auto border-b-2 border-dashed my-4 py-4 border-black md:w-1/2">
              <img src={image.image} alt="" />
              <h1 className="text-3xl font-semibold">{image.title}</h1>
              {/* <div className="text-3xl tracking-widest">
                -------------------------------------------
              </div> */}

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Brands;

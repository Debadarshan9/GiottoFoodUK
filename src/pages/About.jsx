import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import giottoFood from "../images/giottoFoodUk.png";
import olio from "../images/Olio Dante.mp4";
import Footer from "@/components/Footer";
import fieldTree from "../images/Field_Tree.jpg";
import fakeMango from "../images/Fake_Mango_Oil_Bottle.jpg";
import CartModal from "@/components/CartModal";
const About = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
    return (
      <>
        <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
      <div className="mt-20">
        <div className="flex items-center justify-center py-40 bg-gradient-to-tr from-emerald-500 via-white  to-cyan-500">
          <div className="px-4 md:w-1/2 flex flex-col justify-center items-center space-y-6">
            <img className="md:w-1/6" src={giottoFood} alt="" />
            <h1 className="font-semibold text-5xl">Giotto Food UK</h1>
            <p className="text-lg text-center font-semibold">
              Giotto Legno UK is a new Start-Up Import & Export company set up
              to bring customers closer to high quality Made in Italy products
              in the United Kingdom.
            </p>
            <p className="text-lg text-center font-semibold">
              Giotto Legno UK e una nuova azienda Start-Up Import & Export
              costituita per avvicinare i clienti ai prodotti di alta qualità
              Made in Italy nel Regno Unito.
            </p>

            <p className="text-md text-center">
              Giotto Food UK is a division of Giotto Legno UK that deals with
              the marketing of food and fresh fruit and vegetables from Italy.
              We collect a list of small artisans who produce Made in Italy food
              products. We also have farms that produce and prepare fresh fruit
              and vegetables of excellent quality.
            </p>
            <ul className="list-disc pl-10">
              <li className="font-semibold italic">
                We have all the authorizations to export from Italy and import
                to UK territory.
              </li>
              <li className="font-semibold italic">
                We also have a license to import wine and spirits into the UK
              </li>
            </ul>
          </div>
        </div>
        <video
          className="md:w-full h-[600px] my-2 m-auto object-cover overflow-hidden"
          src={olio}
          controls
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="flex flex-col md:flex-row gap-3 m-2 p-3 items-center justify-between">
        <div className=" flex flex-col justify-center items-center">
          <img className="w-2/3 rounded-md" src={fieldTree} alt="" />
          <p className="w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            aperiam ratione tenetur soluta. Odio, aspernatur ut sed placeat
            ullam quis assumenda molestiae deleniti adipisci molestias ducimus
            est quaerat eligendi minima a dolor labore neque!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="w-2/3 rounded-md" src={fakeMango} alt="" />
          <p className="w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            aperiam ratione tenetur soluta. Odio, aspernatur ut sed placeat
            ullam quis assumenda molestiae deleniti adipisci molestias ducimus
            est quaerat eligendi minima a dolor labore neque!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

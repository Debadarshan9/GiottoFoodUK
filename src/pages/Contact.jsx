import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import spice from "../assets/spice.jpg";
import "../App.css";
import Footer from "@/components/Footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import location from "/assets/location.jpg";
import CartModal from "@/components/CartModal";
const Contact = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
    return (
      <>
        <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
      <div className="mt-20 mb-10">
        <div
          className="w-full h-80 md:h-screen bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${spice})` }}
        >
          <h1 className="font-semibold shadow-text-lg text-3xl px-3 md:text-6xl lg:text-7xl text-center absolute top-1/3 -left-1/7 lg:top-56 lg:left-56 tracking-wider text-white">
            Let's have a talk
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="">
            <img className="h-96" src={location} alt="location" />
          </div>
          <div className="bg-green-300 h-96 flex flex-col justify-center items-center w-full md:w-1/3 space-y-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Giotto Legno UK Limited</h1>
              <h4 className="text-md">UK company</h4>
              <h3 className="text-lg">administrationuk@giottolegno.com</h3>
              <h3 className="text-lg">michele@giottolegno.com</h3>
              <h3 className="text-lg">T: 01628 782738</h3>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">For order:</h1>
              <h3 className="text-lg">Carmem Lupu</h3>
              <h3 className="text-lg">carmen@giottolegno.com</h3>
              <h3 className="text-lg">T: 07501 988 052</h3>
            </div>
          </div>
          <div className="bg-pink-300 h-96 w-full md:w-1/3 flex flex-col justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                Giotto Legno UK Ltd Italian Branch
              </h1>
              <h4 className="text-md">Italian Company</h4>
              <h3 className="text-lg">amministrazione@giottolegno.com</h3>
              <h3 className="text-lg">andrea@giottolegno.com</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-300 py-4">
          <h1 className="text-5xl font-semibold">Contact Us</h1>
          <form className="w-full max-w-lg space-y-6 bg-white rounded-lg shadow-md mt-4 p-6">
            <div className="space-y-2">
              <Label htmlFor="fullname">Fullname</Label>
              <Input className="" type="text" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input className="" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Phone Number</Label>
              <Input
                className=""
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="" type="text" placeholder="Message" />
            </div>
            <Button className="w-full bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:border-none hover:text-white text-md font-semibold">
              send
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

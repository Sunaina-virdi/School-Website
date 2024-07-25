import img from "../assets/home.avif";
import logo from "../assets/logo.png";
import React from "react";
import './style.css';

const App = () => {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-no-repeat max-sm:h-full max-sm:w-full" style={{ backgroundImage: `url(${img})` }} id="home">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <nav className="w-screen flex flex-row justify-between py-4 px-8 bg-opacity-50 bg-black brightness-200 max-lg:px-0">
        <div className="flex flex-row items-center justify-center">
          <img src={logo} alt="School Logo" className="h-10 mr-2" />
          <h1 className="text-white text-xl">Edusity</h1>
        </div>
        <ul className="flex flex-row space-x-7 max-sm:hidden">
          <li className="text-white cursor-pointer text-xl"><a href="#home">Home</a></li>
          <li className="text-white cursor-pointer text-xl"><a href="#about">About</a></li>
          <li className="text-white cursor-pointer text-xl"><a href="#academic">Academics</a></li>
          <li className="text-white cursor-pointer text-xl"><a href="#admission">Admissions</a></li>
          <li className="text-white cursor-pointer text-xl"><a href="#faculty">Faculty</a></li>
          <li className="text-white cursor-pointer text-xl"><a href="#gallery">Gallery</a></li>
          <li className="text-white cursor-pointer text-xl"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="text-white text-center flex justify-center flex-col items-center mt-60 bg-opacity-50 brightness-200 max-sm:mt-24">
        <p className="text-[45px] font-semibold max-sm:text-[40px]">We ensure better education</p>
        <p className="text-[45px] font-semibold max-sm:text-[40px]">for a better world</p>
        <p className="w-[60vw] max-sm:w-full">
          Our cutting-edge curriculum lorem industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting.</p>
        <button className="bg-white text-black p-3 rounded-full font-bold mt-5">Explore more </button>
      </div>
    </div>
  );
};

export default App;

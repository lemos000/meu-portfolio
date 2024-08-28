import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Lemos from "../../../assets/eu.jpg";

export default function Title() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-gradient-to-br from-black to-darkPurple min-h-screen min-w-full flex flex-col items-center">
      <div className="flex flex-col md:flex-row min-w-full text-white p-8 md:p-16 lg:p-24 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12 justify-center items-center">
        <div className="flex flex-col justify-center items-center md:items-start min-w-full md:min-w-[30%] min-h-full">
          <h1 className="text-lg md:text-xl lg:text-2xl text-center md:text-left">
            Meu nome é <strong>Gabriel Lemos</strong>
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-bold text-center md:text-left">
            Desenvolvedor{" "}
            <TypeAnimation
              sequence={["Java", 1000, "Fullstack", 1000, "Back-end", 1000]}
              speed={10}
              repeat={Infinity}
              style={{ color: "purple", fontSize: "110%" }}
            />
          </p>
        </div>
        <div className="relative flex justify-center">
          <div
            className={`hidden md:block absolute inset-0 bg-rosaLindo w-[15em] h-[21em] md:w-[20em] md:h-[28em] translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 rounded-2xl transition-transform duration-500 ease-in-out ${
              hovered ? "scale-110" : ""
            }`}
          ></div>
          <img
            className="transition-transform duration-300 ease-in-out relative max-w-[15em] md:max-w-[20em] h-auto shadow-lg rounded-2xl hover:shadow-custom hover:scale-105 sm:shadow-[0_4px_6px_rgba(128,0,128,0.5)] md:shadow-none"
            src={Lemos}
            alt=""
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>
      </div>
    </div>
  );
}

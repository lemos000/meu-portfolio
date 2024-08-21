import { useState } from 'react';
import { TypeAnimation } from "react-type-animation";
import Lemos from "../../assets/eu.jpg";
import "../../index.css";


export default function Principal() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-gradient-to-br from-black to-darkPurple min-h-screen min-w-full flex flex-col items-center">
      <div className="min-w-full text-white p-60 flex justify-center space-x-8">
        <div className="flex flex-col justify-center min-w-[30%] min-h-full">
          <h1 className="text-xl">
            Meu nome é <strong>Gabriel Lemos</strong>
          </h1>
          <p className="text-grande font-bold">
            Desenvolvedor{" "}
            <TypeAnimation
              sequence={[
                "de software",
                1000,
                "fullstack",
                1000,
                "back-end",
                1000,
              ]}
              speed={10}
              repeat={Infinity}
              style={{ color: "purple" }}
            />
          </p>
        </div>
        <div className="relative">
          <div
            className={`absolute inset-0 bg-rosaLindo w-[20em] h-[28em] translate-x-4 -translate-y-4 rounded-2xl transition-transform duration-500 ease-in-out ${
              hovered ? 'scale-110' : ''
            }`}
          ></div>
          <img
            className="transition-transform duration-300 ease-in-out relative max-w-[20em] h-auto shadow-lg rounded-2xl hover:shadow-custom hover:scale-105"
            src={Lemos}
            alt=""
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>
      </div>
    </div>
  )}
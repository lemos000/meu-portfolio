import { useState } from 'react';
import Lemos from "../../assets/eu.jpg"

function HoveredEffect() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 bg-rosaLindo w-[24em] h-[30em] translate-x-2 -translate-y-3 rounded-2xl transition-transform duration-500 ease-in-out ${
          hovered ? 'scale-110' : ''
        }`}
      ></div>
      <img
        className="transition-transform duration-450 ease-in-out relative max-w-[20em] h-auto shadow-lg rounded-2xl hover:shadow-custom hover:scale-105"
        src={Lemos}
        alt=""
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </div>
  );
}

export default HoveredEffect;
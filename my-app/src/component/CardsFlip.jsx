import React from 'react'

const CardsFlip = ({ flip = false }) =>{
  return (
    <div className={`relative min-h-[420px] w-full ${flip ? "order-2" : "order-1"}`}>
      {/* Gradient background covering the whole card (mirrored when flipped) */}
      <div
        className={`absolute inset-0 ${
          flip
            ? "bg-[linear-gradient(228.09deg,#FFFFFF_0.77%,rgba(0,0,0,0)_77.2%)]"
            : "bg-[linear-gradient(131.91deg,#FFFFFF_0.77%,rgba(0,0,0,0)_77.2%)]"
        }`}
      />

      {/* Outline text, centered at the top */}
      <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center font-outfit text-[120px] font-extrabold leading-[110px] tracking-normal text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">
        Robot
      </div>

      {/* Drone: pokes slightly outside the card on the image side */}
      <div
        className={`absolute bottom-0 h-full w-full text-center ${
          flip ? "-left-5" : "-right-5"
        }`}
      >
        <Image src={Drone} alt="Drone" className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
export default CardsFlip



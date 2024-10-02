import React from 'react';
import SPONSER1 from "../../../assets/HomePage/HeroSection/sponser1.png";
import SPONSER2 from "../../../assets/HomePage/HeroSection/sponser2.png";

const Sponsers = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='mb-8 font-bold text-2xl sm:text-3xl md:text-4xl'>SPONSERS</h1>

      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2'>
        <div className='flex justify-center items-center bg-[#141414] p-4 rounded-xl h-[200px]'>
          <img src={SPONSER1} alt="Sponsor 1" className="max-w-full h-auto" />
        </div>
        <div className='flex justify-center items-center bg-[#141414] p-4 rounded-xl h-[200px]'>
          <img src={SPONSER2} alt="Sponsor 2" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Sponsers;

import React from 'react';
import SPONSER1 from "../../../assets/HomePage/HeroSection/sponser1.png";
import SPONSER2 from "../../../assets/HomePage/HeroSection/sponser2.png";
import bg from './image.png';

const Sponsers = () => {
  return (
    <div className='flex flex-col items-center w-ful mt-[100px]'>
      <h1 className='mb-8 font-bold text-xl sm:text-3xl md:text-4xl'>Meet Our Visionary Sponsors</h1>
      <img src={bg} alt="image" width={600} height={600} className="left-0 absolute z-0 mt-[-50px] pointer-events-none "/>

      <div className='flex flex-col items-center gap-4 sm:grid sm:grid-cols-2'>
        <div className='flex justify-center items-center bg-[#141414] p-4 rounded-xl sm:h-[200px] w-[90%] sm:w-full  cursor-pointer' onClick={()=>{window.open("https://emmvee.com/")}}>
            <img src={SPONSER2} alt="Sponsor 1" className="max-w-full h-auto" />
        </div>
        <div className='flex justify-center items-center bg-[#141414] p-4 rounded-xl sm:h-[200px] w-[90%] sm:w-full cursor-pointer' onClick={()=>{window.open("https://www.premierenergies.com/")}}>
            <img src={SPONSER1} alt="Sponsor 2" className="max-w-full h-auto" />
        </div>
      </div>

    </div>
  );
}

export default Sponsers;

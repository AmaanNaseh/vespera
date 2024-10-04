import React from 'react'
import back from './image/back.png';
import background from './image/background.png';
import Navbar from '../HomePage/Navbar/Navbar';

function Hackathon() {
  return (
    <div className='pb-[100px]' style={{ background: 'rgba(24, 24, 24, 1)'}}>
      
      <div className="container flex items-center pt-2">
      </div>
      <Navbar/>

      <div className="title relative">
        
        <img 
          src={back} 
          alt="Background" 
          className="pt-7 absolute inset-0 w-[200px] h-[200px] object-cover opacity-50" 
          style={{ left: '50%', transform: 'translateX(-50%)' }} 
        />      

        <p className="relative z-10 mt-7  text-7xl text-white text-center pt-20 text-glow font-fogLighten">
          Hackathon
        </p>
      </div>

      <div className="container mt-40 flex justify-center relative">
        <img src={background} alt="" className="h-[400px] w-[1400px] object-contain" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl text-white font-bold">DESCRIPTION</p>
        </div>
      </div>

      <div className="container mt-40 flex justify-center relative">
        <img src={background} alt="" className="h-[400px] w-[1400px] object-contain" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl text-white font-bold">PRIZES</p>
        </div>
      </div>

      <div className="container mt-40 flex justify-center relative">
        <img src={background} alt="" className="h-[400px] w-[1400px] object-contain" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl text-white font-bold">TIMELINE</p>
        </div>
      </div>

      <div className="container mt-40 flex justify-center relative">
        <img src={background} alt="" className="h-[400px] w-[1400px] object-contain" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-4xl text-white font-bold">FAQs</p>
        </div>
      </div>
    </div>
  );
}

export default Hackathon

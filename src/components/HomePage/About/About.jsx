import React from "react";
import STAR from "../../../assets/HomePage/HeroSection/about-star-with-out-shadow.png";
import './About.css';

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center w-full sm:mt-[0px] mt-[100px]">
      <div
        className="relative flex justify-center items-center bg-cover bg-no-repeat w-full lg:w-2/3 sm:h-[988px] overflow-visible"
      >
        <img src={STAR} alt="star image" className="absolute w-[1400px] sm:h-[1000px] h-[500px]" style={{filter: 'drop-shadow(0 0 25px white) drop-shadow(0 0 100px white) drop-shadow(0 0 300px white)',}} />


        <div className="relative z-10 flex sm:flex-row flex-col justify-between items-center px-4 md:px-12 py-8 w-full h-auto ml-[0px] ">
          <div className="group flex flex-col justify-center items-center bg-white mt-4 rounded-full sm:w-32 sm:h-32 w-20 h-20 text-black self-start sm:self-auto md:mt-40 custom-hover">
            <h2 className="font-bold text-2xl sm:text-3xl group-hover:text-white">36</h2>
            <p className="text-sm md:text-base group-hover:text-white">hours</p>
          </div>

          <div className="group flex flex-col justify-center items-center bg-white mt-4 rounded-full sm:w-32 sm:h-32 w-20 h-20 text-black self-end sm:self-auto sm:mt-[-300px] custom-hover">
            <h2 className="font-bold text-2xl md:text-3xl group-hover:text-white">₹ 3L+</h2>
            <p className="text-sm md:text-base group-hover:text-white">prizes</p>
          </div>
          <div className="group flex flex-col justify-center items-center bg-white mt-4 rounded-full sm:w-32 sm:h-32 w-20 h-20 text-black self-start sm:self-auto sm:mt-20 custom-hover">
            <h2 className="font-bold text-2xl md:text-3xl group-hover:text-white">100+</h2>
            <p className="text-sm md:text-base group-hover:text-white">colleges</p>
          </div>
        </div>
      </div>  
      <div className="relative z-10 flex-1 bg-[#141414] p-4 md:p-8 rounded-tl-xl rounded-bl-xl w-[90%] lg:w-1/3">
        <h2 className="mb-4 text-2xl text-white md:text-3xl">About</h2>
        <p className="text-sm text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          odio vero delectus, ut laudantium a exercitationem soluta consequuntur
          cupiditate asperiores quos. Ad ipsa fugit perferendis voluptatibus
          architecto rerum officia illo tenetur doloribus blanditiis deserunt
          est suscipit molestiae sequi impedit hic distinctio reprehenderit
          explicabo exercitationem recusandae totam, quod accusantium eos at?
          Alias iure corporis atque quod, delectus enim, dolor, soluta
          blanditiis doloribus aspernatur magni facere saepe! Mollitia debitis
          nobis vero ipsam enim voluptatum eligendi, aliquid dolorum quos quo
          eos porro labore fugiat odit perferendis quia veniam quibusdam
          quisquam, numquam nesciunt sequi nemo nulla. Inventore voluptates
          autem ut modi, aut eligendi voluptate.
        </p>
      </div>
    </div>
  );
};

export default About;

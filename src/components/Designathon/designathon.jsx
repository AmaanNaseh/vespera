import React from "react";
import backgroundHeading from './image/back.png'
import background from './image/des.png'
import Themes from './image/image.png'
import VerticalBar from './image/vertical-bar.png'
import Faq from './faq'
import Footer from '../HomePage/Footer/Footer';

const Designathon = () => {
  return (
    <div>
    <section className="bg-black text-white font-sans flex flex-col items-center w-full">
      
        {/* <h1 className="text-6xl font-bold">Hackathon</h1> */}
        <div className='flex justify-center items-center mt-[40px] sm:mt-[100px] w-[60%] sm:w-[40%] md:w-[50%] h-[250px] sm:h-[250px] md:h-[300px]' style={{backgroundImage:`url(${backgroundHeading})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:"center"}}>
          <h1 className='font-fogLighten text-5xl text-glow text-white sm:text-8xl md:text-8xl'>VesDes</h1>
        </div>
      <div className='bg-gray-300 mt-[-70px] sm:mt-[-70px] md:mt-[-50px] w-full h-[0.5px]'></div>

      <div className='w-[80%] sm:h-[600px] h-[300px] mt-[120px] rounded-3xl' style={{backgroundImage:`url(${background})`, backgroundSize:'100% 100%'}}></div>
      <div className='w-[80%] text-center'>
      <p className="mt-20 text-sm md:text-lg text-gray-300 mx-auto">
        Get ready for an exciting design adventure at the VesDes - Designathon, happening as part of Vespera'24 in collaboration with 
        IoSC and AWSCC (AWS Cloud Club) at GGSIPU EDC. This dynamic 2-day event invites creative minds from various backgrounds to take 
        on the challenge of crafting User Interface Designs for apps, websites, or web apps, addressing specific problem statements.
        {/* <br></br> */}
        Get ready to dive into the world of design at the VesDes - Designathon, where imagination meets technology during Vespera 2024!
        </p>
      </div>
        <button className="mt-10 text-black px-6 py-2 rounded" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}
        onClick={()=>{window.open("https://unstop.com/competitions/vesdes-designathon-vespera24-guru-gobind-singh-indraprastha-university-ggsipu-east-delhi-campus-new-delhi-1174915")}}
        >Apply Now</button>

      {/* Prizes Section */}

        <div className='xl:w-[50%] w-[80%] text-center mt-[100px]'>
          <h2 className="lg:text-[45px] text-[35px]  font-bold">Exciting Prizes and Rewards Await!</h2>
          <p>
            Explore a variety of chances to demonstrate your skills, solve intriguing challenges, and win exciting prizes during the Designathon.
          </p>
        </div>
        <div className="xl:w-[60%] sm:w-[90%] w-[95%]  grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* First Prize spans across two columns on larger screens */}
              <div className="bg-gray-800 p-6 rounded-lg md:col-span-2 flex justify-between items-center" style={{ backgroundColor: 'rgba(45, 45, 45, 1)', color: 'white' }}>
                {/* Left side content */}
                <div className='text-left'>
                  <h3 className="text-2xl font-bold">First Prize</h3>
                  <p className="mt-2 text-gray-400 w-[170px] sm:w-[250px]">The champion's crown awaits you</p>
                </div>
                
                {/* Right side content */}
                <div className="text-3xl font-bold">
                  ₹ 30,000
                </div>
              </div>

              
              {/* Second Prize */}
              <div className="bg-gray-800 p-6 rounded-lg flex justify-between items-center" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}>

                <div className='text-left'>
                  <h3 className="lg:text-2xl md:text-xl font-bold">Second Prize</h3>
                  <p className="mt-2 text-gray-400 w-[170px] sm:w-[250px]">The next best is still a winner</p>
                </div>
                <div className="text-3xl font-bold">
                ₹ 20,000
                </div>
              </div>
              
              {/* Third Prize */}
              <div className="bg-gray-800 p-6 rounded-lg flex justify-between items-center" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}>
                <div className='text-left'>
                  <h3 className="text-2xl font-bold">Third Prize</h3>
                  <p className="mt-2 text-gray-400">A victory in the making</p>
                </div>
                <div className="text-3xl font-bold">
                ₹ 10,000
                </div>
              </div>
            </div>


      {/* Themes Section */}
      <section className="text-center mt-[100px] ">
        <h2 className="text-3xl font-bold text-[45px]">Themes</h2>
        <p className="mt-4 text-gray-400 max-w-5xl mx-auto">
        In the final round, you will be presented with a problem statement on the spot, designed to test your design knowledge and skills, pushing you to think critically and creatively under pressure.
        This round also offers an excellent opportunity to network with fellow participants and industry professionals, fostering a collaborative atmosphere. Prizes will be awarded to the most exceptional projects, so come prepared to showcase your best work! 
        Get ready to impress the judges and take your ideas to the next level at the Final Round!
        </p>
      </section>

      <div className="bg-gray-800 p-6 mt-8 rounded-lg mx-auto text-left lg:w-[50%] sm:w-[80%] w-[90%]" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}>
          <h3 className="text-2xl font-bold">Renewable Energy & Sustainability</h3>
          <p className="mt-2 text-gray-400">
            Tackle pressing environmental issues and innovate for a greener future. The focus is on developing solutions 
            that promote sustainability, reduce waste, and support eco-friendly practices, all aimed at creating a positive 
            impact on the planet.
          </p>
        </div>
        <img src={Themes} className='sm:w-[70%] w-[95%] mt-[100px]'/>

      {/* Timeline Section */}
      <section className="text-center py-16 md:w-[60%] w-[90%]">
        <h2 className="text-3xl font-bold text-[45px] pb-10">Timeline</h2>
        <p>Stay on track with key dates and events to make the most of your experience.Stay tuned!</p>
      </section>

      <div className='display flex lg:w-[50%] md:w-[85%] w-full'>
        <img src={VerticalBar} className='h-[550px] md:my-0 sm:mx-[0px] mx-[-20px]'/>
      <ul className="mt-[30px] space-y-4">
          <li className="bg-gray-800 p-4 rounded-lg lg:w-[600px] md:w-[500px] w-[300px]" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}><span className='font-bold'>Registration Starts</span><br></br> Oct 6th, 10:00 AM</li>
          <li className="bg-gray-800 p-4 rounded-lg" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}><span className='font-bold'>Round 1 Starts</span><br></br> Oct 6th, 10:00 AM</li>
          <li className="bg-gray-800 p-4 rounded-lg" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}><span className='font-bold'>Round 1 Submission</span><br></br> Oct 22th, 10:00 PM</li>
          <li className="bg-gray-800 p-4 rounded-lg" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}><span className='font-bold'>Round 1 Results</span><br></br> Oct 23th, 10:00 PM</li>
          <li className="bg-gray-800 p-4 rounded-lg" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}><span className='font-bold'>Round 2 Starts</span><br></br> Oct 25th, 08:00 AM</li>
        </ul>
      </div>
      <Faq/>
      {/* <Footer/> */}
    </section>
    <Footer/>
    </div>
  );
};

export default Designathon;

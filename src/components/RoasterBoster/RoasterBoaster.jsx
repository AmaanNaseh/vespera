import React from "react";
import backgroundHeading from './image/back.png'
import background from './image/burn.png'
import Themes from './image/image.png'
import VerticalBar from './image/vertical-bar.png'
import Faq from './faq'
import Footer from '../HomePage/Footer/Footer';

const RoasterBoaster = () => {
  return (
    <div>
    <section className="bg-black text-white font-sans flex flex-col items-center w-full">
      
        {/* <h1 className="text-6xl font-bold">Hackathon</h1> */}
        <div className='flex justify-center items-center mt-[40px] sm:mt-[100px] w-[60%] sm:w-[40%] md:w-[50%] h-[250px] sm:h-[250px] md:h-[300px]' style={{backgroundImage:`url(${backgroundHeading})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:"center"}}>
          <h1 className='font-fogLighten text-5xl text-glow text-white sm:text-8xl md:text-8xl'>VesBurn</h1>
        </div>
      <div className='bg-gray-300 mt-[-70px] sm:mt-[-70px] md:mt-[-50px] w-full h-[0.5px]'></div>

      <div className='w-[80%] sm:h-[600px] h-[300px] mt-[120px] rounded-3xl' style={{backgroundImage:`url(${background})`, backgroundSize:'100% 100%'}}></div>
      <div className='w-[80%] text-center'>
      <p className="mt-20 text-sm md:text-lg text-gray-300 mx-auto">
      Get ready for the ultimate showdown where humor meets competition in an electrifying roast battle! This isn’t just any ordinary event; it’s a chance for teams of two to step into the spotlight and face off against each other, all in the name of fun and creativity.
      Here’s how it works: each team is assigned a pair of rival companies. Armed with clever facts and witty comebacks, they’ll roast their opponent’s brand while showcasing the strengths and successes of their own. It’s a battle of brains and banter, where sharp tongues and quick thinking reign supreme!
      Expect a lively atmosphere filled with laughter, clever jabs, and a whole lot of brand pride. Whether you’re a participant or a spectator, you’ll be entertained by the banter and amazed by the creativity on display. Who will deliver the ultimate burn and earn bragging rights?
      So, gather your friends, bring your A-game, and join us for a night where roasting rivals and boasting about your brand is all part of the fun! Let’s see who can roast to win and boast to shine!
        </p>
      </div>
        <button className="mt-10 text-black px-6 py-2 rounded" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}
        onClick={()=>{window.open("https://unstop.com/events/vesburn-roaster-boaster-challenge-vespera24-guru-gobind-singh-indraprastha-university-ggsipu-east-delhi-campus-ne-1179060")}}
        >Apply Now</button>

      {/* Prizes Section */}

        <div className='xl:w-[50%] w-[80%] text-center mt-[100px]'>
          <h2 className="lg:text-[45px] text-[35px]  font-bold">Exciting Prizes and Rewards Await!</h2>
          <p>
            Explore a variety of chances to demonstrate your skills, solve intriguing challenges, and win exciting prizes during the Roaster Boaster.
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
                  ₹ 2,000
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg md:col-span-2 flex justify-between items-center" style={{ backgroundColor: 'rgba(45, 45, 45, 1)', color: 'white' }}>
                {/* Left side content */}
                <div className='text-left'>
                  <h3 className="text-2xl font-bold">Second Prize</h3>
                  <p className="mt-2 text-gray-400 w-[170px] sm:w-[250px]">The next best is still a winner</p>
                </div>
                
                {/* Right side content */}
                <div className="text-3xl font-bold">
                  ₹ 1,000
                </div>
              </div>

          
            </div>


      {/* Themes Section */}
      <section className="text-center mt-[100px] ">
        <h2 className="text-3xl font-bold text-[45px]">Themes</h2>
        <p className="mt-4 text-gray-400 max-w-5xl mx-auto">
        Vesburn follows an electrifying knockout format where many teams of two will face off in a series of roasting rounds.
        Each matchup will see teams delivering their best roasts and boasting about their own company in a set time.
        The judging will focus on content, delivery, and creativity, with the winning team advancing to the next round while the losing team is eliminated.
        This continues through quarterfinals and semifinals, culminating in a grand finale showdown for the championship title.
        Audience participation will add excitement as they cheer for their favorites, ensuring a night filled with laughter, creativity, and friendly competition!  
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

      <div className='display flex xl:w-[40%] lg:w-[70%] md:w-[85%] w-full'>
        <img src={VerticalBar} className='h-[340px] md:my-0 sm:mx-[-20px] mx-[-20px]'/>
      <ul className="mt-[30px] space-y-4">
          <li className="bg-gray-800 p-4 rounded-lg lg:w-[600px] md:w-[500px] w-[300px]" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}><span className='font-bold'>Registration Starts</span><br></br> Oct 13th, 12:00 PM</li>
          <li className="bg-gray-800 p-4 rounded-lg" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}><span className='font-bold'>Registration ends</span><br></br> Oct 22th, 10:00 PM</li>
          <li className="bg-gray-800 p-4 rounded-lg" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}><span className='font-bold'>Event Start</span><br></br> Oct 25th, 08:00 PM</li>
        </ul>
      </div>
      <Faq/>
      {/* <Footer/> */}
    </section>
    <Footer/>
    </div>
  );
};

export default RoasterBoaster;

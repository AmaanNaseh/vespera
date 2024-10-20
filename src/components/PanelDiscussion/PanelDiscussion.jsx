import React,{useEffect} from "react";
import backgroundHeading from './image/back.png'
import background from './image/panel.jpg'
import Themes from './image/image.png'
import VerticalBar from './image/vertical-bar-2.png'
import Faq from './faq'
import Footer from '../HomePage/Footer/Footer'

function PanelDiscussion() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);


  return (
    <div>
    <section className="bg-black text-white font-sans flex flex-col items-center w-full">
      
        {/* <h1 className="text-6xl font-bold">Hackathon</h1> */}
        <div className='flex justify-center items-center mt-[20px] sm:mt-[40px] w-[60%] sm:w-[40%] md:w-[60%] h-[250px] sm:h-[250px] md:h-[300px]' style={{backgroundImage:`url(${backgroundHeading})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:"center"}}>
          <h1 className='font-fogLighten text-5xl text-glow text-white sm:text-8xl md:text-8xl text-center'>Panel Discussion</h1>
        </div>
      <div className='bg-gray-300 mt-[-70px] sm:mt-[-70px] md:mt-[-50px] w-full h-[0.5px]'></div>

      <div className='w-[80%] sm:h-[600px] h-[300px] mt-[120px] rounded-3xl' style={{backgroundImage:`url(${background})`, backgroundSize:'100% 100%'}}></div>
      <div className='w-[80%] text-center'>
      <p className="mt-20 text-sm md:text-lg text-gray-300 mx-auto">
      The panel discussion brings together experts from various fields to engage in an insightful conversation on key issues shaping our world today.
      The event encourages dynamic exchanges of ideas, with panelists sharing their perspectives, experiences, and predictions. Attendees will gain valuable insights through diverse viewpoints, fostering a deeper understanding of the topic at hand.
      <br></br><span className="font-bold">"ONLY FOR COLLEGE STUDENTS AND ATTENDEES MUST CARRY THEIR STUDENT - ID "</span>
      </p>
      </div>
        <button className="mt-10 text-black px-6 py-2 rounded" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}
        onClick={()=>{window.open("https://www.meetup.com/aws-cloud-club-at-ggsipu/events/304079007/?eventOrigin=group_events_list")}}
        >Apply Now</button>


      {/* Themes Section */}
      <section className="text-center mt-[100px] ">
        <h2 className="text-3xl font-bold text-[45px]">Themes</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Explore diverse challenges and unleash your creativity with our carefully curated themes.
        </p>
      </section>

      <div className="bg-gray-800 p-6 mt-8 rounded-lg mx-auto text-left lg:w-[50%] sm:w-[80%] w-[90%]" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}>
          <h3 className="text-2xl font-bold">Renewable Energy with Premier Energies</h3>
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
        <p>Stay on track with key dates and events to make the most of your experience. Stay tuned!</p>
      </section>

      <div className='display flex lg:w-[50%] md:w-[85%] w-full'>
        <img src={VerticalBar} className='h-[100px] my-5 sm:mx-[0px] mx-[-20px]'/>
      <ul className="mt-[30px] space-y-4">
          <li className="bg-gray-800 p-4 rounded-lg lg:w-[600px] md:w-[500px] w-[300px]" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}><span className='font-bold'>Event Date</span><br></br> Oct 25th, 03:00 PM</li>
        </ul>
      </div>
      <Faq/>
    </section>
    <Footer/>
    </div>
  );
}

export default PanelDiscussion;

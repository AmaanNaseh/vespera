import React from 'react'
import logo from '../image/logo.png';
import back from '../image/back.png';
import box from '../image/box.png';
import calander from '../image/calander.png';
import people from '../image/people.png';

function Event() {
  return (
    <div>
        <div className="container flex items-center pt-2">
            <img src={logo} alt="Logo" className="h-8 w-auto pl-10"/>
            <div className="ml-auto flex space-x-3">
            <a href="#about" className="tab p-7 font-sans text-white">About</a>
            <a href="#speakers" className="tab p-7 font-sans text-white">Speakers</a>
            <a href="#events" className="tab p-7 font-sans text-white">Events</a>
            <a href="#faq" className="tab p-7 font-sans text-white">FAQ</a>
            <a href="#sponsors" className="tab p-7 font-sans text-white">Sponsors</a>
            </div>
        </div>

        <div className="title relative">
        
        <img 
          src={back} 
          alt="Background" 
          className="pt-7 absolute inset-0 w-[200px] h-[200px] object-cover opacity-50" 
          style={{ left: '50%', transform: 'translateX(-50%)' }} 
        />      

        <p className="relative z-10 mt-7  text-7xl text-white text-center pt-20 font-serif">
          Events
        </p>
      </div>

      
      <div className="container mx-auto mt-40 max-w-5xl bg-neutral-950 p-10 rounded-lg shadow-lg">

        <div className="flex">
    
            <div className="w-1/3">
            <img src={box} alt="Left Section Image" className="object-cover w-full h-full rounded-lg" />
            </div>


            <div className="w-2/3 pl-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-white">HACKATHON</h2>
            <p className="text-lg text-white mb-6">
                This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
            </p>

            <div className="flex items-center space-x-8">
   
                <div className="flex items-center space-x-2">
                <img src={calander} alt="Calendar" className="h-6 w-6" />
                <span className="text-white text-lg">25th Oct - 26th Oct</span>
                </div>

      
                <div className="flex items-center space-x-2">
                <img src={people} alt="Team" className="h-6 w-6" />
                <span className="text-white text-lg">1-4 Paricipants</span>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="container mx-auto mt-40 max-w-5xl bg-neutral-950 p-10 rounded-lg shadow-lg">

            <div className="flex">

                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="object-cover w-full h-full rounded-lg" />
                </div>


                <div className="w-2/3 pl-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-white">DESIGNATHON</h2>
                <p className="text-lg text-white mb-6">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">

                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="h-6 w-6" />
                    <span className="text-white text-lg">25th Oct - 26th Oct</span>
                    </div>


                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="h-6 w-6" />
                    <span className="text-white text-lg">1-3 Paricipants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-40 max-w-5xl bg-neutral-950 p-10 rounded-lg shadow-lg">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="object-cover w-full h-full rounded-lg" />
                </div>


                <div className="w-2/3 pl-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-white">CASE STUDY</h2>
                <p className="text-lg text-white mb-6">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="h-6 w-6" />
                    <span className="text-white text-lg">25th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="h-6 w-6" />
                    <span className="text-white text-lg">1-3 Paricipants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-40 max-w-5xl bg-neutral-950 p-10 rounded-lg shadow-lg">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="object-cover w-full h-full rounded-lg" />
                </div>


                <div className="w-2/3 pl-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-white">PANEL DISCUSSION</h2>
                <p className="text-lg text-white mb-6">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="h-6 w-6" />
                    <span className="text-white text-lg">25th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="h-6 w-6" />
                    <span className="text-white text-lg">Individual</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-40 max-w-5xl bg-neutral-950 p-10 rounded-lg shadow-lg">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="object-cover w-full h-full rounded-lg" />
                </div>


                <div className="w-2/3 pl-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-white">FILM MAKING</h2>
                <p className="text-lg text-white mb-6">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="h-6 w-6" />
                    <span className="text-white text-lg">25th Oct - 26th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="h-6 w-6" />
                    <span className="text-white text-lg">1-3 Paricipants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-40 max-w-5xl bg-neutral-950 p-10 rounded-lg shadow-lg">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="object-cover w-full h-full rounded-lg" />
                </div>


                <div className="w-2/3 pl-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-white">ROASTER BOASTER</h2>
                <p className="text-lg text-white mb-6">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="h-6 w-6" />
                    <span className="text-white text-lg">25th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="h-6 w-6" />
                    <span className="text-white text-lg">2 Participants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto mt-40 max-w-5xl bg-neutral-950 p-10 rounded-lg shadow-lg">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="object-cover w-full h-full rounded-lg" />
                </div>


                <div className="w-2/3 pl-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-white">TREASURE HUNT</h2>
                <p className="text-lg text-white mb-6">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="h-6 w-6" />
                    <span className="text-white text-lg">25th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="h-6 w-6" />
                    <span className="text-white text-lg">1-3 Participants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

            
    </div>
  )
}

export default Event

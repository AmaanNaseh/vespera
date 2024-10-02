import React from 'react'
import logo from '../../assets/Event/logo.png';
import back from '../../assets/Event/back.png';
import box from '../../assets/Event/box.png';
import calander from '../../assets/Event/calander.png';
import people from '../../assets/Event/people.png';

function Event() {
  return (
    <div className='bg-black'>
        <div className="relative title">
        
        <img 
          src={back} 
          alt="Background" 
          className="absolute inset-0 opacity-50 pt-7 w-[200px] h-[200px] object-cover" 
          style={{ left: '50%', transform: 'translateX(-50%)' }} 
        />      

        <p className="relative z-10 pt-20 font-serif text-7xl text-center text-white">
          Events
        </p>
      </div>

      
      <div className="bg-neutral-950 shadow-lg mx-auto mt-40 p-10 rounded-lg max-w-5xl container">

        <div className="flex">
    
            <div className="w-1/3">
            <img src={box} alt="Left Section Image" className="rounded-lg w-full h-full object-cover" />
            </div>


            <div className="flex flex-col justify-center pl-10 w-2/3">
            <h2 className="mb-4 font-bold text-3xl text-white">HACKATHON</h2>
            <p className="mb-6 text-lg text-white">
                This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
            </p>

            <div className="flex items-center space-x-8">
   
                <div className="flex items-center space-x-2">
                <img src={calander} alt="Calendar" className="w-6 h-6" />
                <span className="text-lg text-white">25th Oct - 26th Oct</span>
                </div>

      
                <div className="flex items-center space-x-2">
                <img src={people} alt="Team" className="w-6 h-6" />
                <span className="text-lg text-white">1-4 Paricipants</span>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className="bg-neutral-950 shadow-lg mx-auto mt-40 p-10 rounded-lg max-w-5xl container">

            <div className="flex">

                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="rounded-lg w-full h-full object-cover" />
                </div>


                <div className="flex flex-col justify-center pl-10 w-2/3">
                <h2 className="mb-4 font-bold text-3xl text-white">DESIGNATHON</h2>
                <p className="mb-6 text-lg text-white">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">

                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="w-6 h-6" />
                    <span className="text-lg text-white">25th Oct - 26th Oct</span>
                    </div>


                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="w-6 h-6" />
                    <span className="text-lg text-white">1-3 Paricipants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="bg-neutral-950 shadow-lg mx-auto mt-40 p-10 rounded-lg max-w-5xl container">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="rounded-lg w-full h-full object-cover" />
                </div>


                <div className="flex flex-col justify-center pl-10 w-2/3">
                <h2 className="mb-4 font-bold text-3xl text-white">CASE STUDY</h2>
                <p className="mb-6 text-lg text-white">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="w-6 h-6" />
                    <span className="text-lg text-white">25th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="w-6 h-6" />
                    <span className="text-lg text-white">1-3 Paricipants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="bg-neutral-950 shadow-lg mx-auto mt-40 p-10 rounded-lg max-w-5xl container">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="rounded-lg w-full h-full object-cover" />
                </div>


                <div className="flex flex-col justify-center pl-10 w-2/3">
                <h2 className="mb-4 font-bold text-3xl text-white">PANEL DISCUSSION</h2>
                <p className="mb-6 text-lg text-white">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="w-6 h-6" />
                    <span className="text-lg text-white">25th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="w-6 h-6" />
                    <span className="text-lg text-white">Individual</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="bg-neutral-950 shadow-lg mx-auto mt-40 p-10 rounded-lg max-w-5xl container">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="rounded-lg w-full h-full object-cover" />
                </div>


                <div className="flex flex-col justify-center pl-10 w-2/3">
                <h2 className="mb-4 font-bold text-3xl text-white">FILM MAKING</h2>
                <p className="mb-6 text-lg text-white">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="w-6 h-6" />
                    <span className="text-lg text-white">25th Oct - 26th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="w-6 h-6" />
                    <span className="text-lg text-white">1-3 Paricipants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="bg-neutral-950 shadow-lg mx-auto mt-40 p-10 rounded-lg max-w-5xl container">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="rounded-lg w-full h-full object-cover" />
                </div>


                <div className="flex flex-col justify-center pl-10 w-2/3">
                <h2 className="mb-4 font-bold text-3xl text-white">ROASTER BOASTER</h2>
                <p className="mb-6 text-lg text-white">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="w-6 h-6" />
                    <span className="text-lg text-white">25th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="w-6 h-6" />
                    <span className="text-lg text-white">2 Participants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="bg-neutral-950 shadow-lg mx-auto mt-40 p-10 rounded-lg max-w-5xl container">

            <div className="flex">
        
                <div className="w-1/3">
                <img src={box} alt="Left Section Image" className="rounded-lg w-full h-full object-cover" />
                </div>


                <div className="flex flex-col justify-center pl-10 w-2/3">
                <h2 className="mb-4 font-bold text-3xl text-white">TREASURE HUNT</h2>
                <p className="mb-6 text-lg text-white">
                    This is a sample paragraph inside a smaller container. The text is contained within the div and will not extend 
                    outside of it. You can customize this text to be longer or shorter, but it will always fit within the right section.
                </p>

                <div className="flex items-center space-x-8">
    
                    <div className="flex items-center space-x-2">
                    <img src={calander} alt="Calendar" className="w-6 h-6" />
                    <span className="text-lg text-white">25th Oct</span>
                    </div>

        
                    <div className="flex items-center space-x-2">
                    <img src={people} alt="Team" className="w-6 h-6" />
                    <span className="text-lg text-white">1-3 Participants</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event

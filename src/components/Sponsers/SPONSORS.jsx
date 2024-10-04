import React from "react";
import sponsor1 from "../../assets/Sponsers/sponser1.png";
import sponsor2 from "../../assets/Sponsers/sponser2.png";
import back from "./assets/back.png";
import Footer from "../HomePage/Footer/Footer";

// SponsorSection Component
function SponsorSection({ title, sponsors }) {
  return (
    <div className="w-full" >
      <h2 className="mt-20 mb-10 font-bold text-2xl text-center">{title}</h2>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:flex md:flex-row md:justify-center lg:ml-[-150px]">
        {sponsors.length > 0 ? (
          sponsors.map((sponsor, index) => (
            <div
              className="flex justify-center items-center bg-[#141414] shadow-lg p-4 rounded-xl"
              key={index}
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                className="max-w-full h-auto object-contain"
              />
            </div>
          ))
        ) : (
          <p>No sponsors available for this category</p>
        )}
      </div>
    </div>
  );
}


// Renamed Component to Sponsors
function Sponsors() {
  const titleSponsors = [
    { img: sponsor1, name: "Premier Energies" },
    { img: sponsor2, name: "Emmvee Solar" },
  ];

  const platinumSponsors = [];
  const goldSponsors = [];
  const silverSponsors = [];

  return (
    <section>
      <div className="bg-black min-h-screen text-white App">
        <noscript>You need to enable JavaScript to run this app.</noscript>

        {/* Centered Sponsors Section */}
        <div className="flex flex-col justify-start items-center w-full text-center">
          <div className='flex justify-center items-center mt-[40px] sm:mt-[20px] w-[60%] sm:w-[40%] md:w-[50%] h-[200px] sm:h-[250px] md:h-[250px]' style={{backgroundImage:`url(${back})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:"center"}}>
            <h1 className='font-fogLighten text-5xl text-glow text-white sm:text-8xl md:text-8xl'>Sponsors</h1>
          </div>
          <div className='bg-gray-300 mt-[-70px] sm:mt-[-70px] md:mt-[-50px] w-full h-[0.5px]'></div>

          {/* Title Sponsors */}
          <SponsorSection title="TITLE SPONSORS" sponsors={titleSponsors} />

          {/* Platinum Sponsors */}
          <SponsorSection title="PLATINUM SPONSORS" sponsors={platinumSponsors} />

          {/* Gold Sponsors */}
          <SponsorSection title="GOLD SPONSORS" sponsors={goldSponsors} />

          {/* Silver Sponsors */}
          <SponsorSection title="SILVER SPONSORS" sponsors={silverSponsors} />
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Sponsors;
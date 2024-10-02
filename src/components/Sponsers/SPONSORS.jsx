import React from "react";
import sponsor1 from "../../assets/Sponsers/sponser1.png";
import sponsor2 from "../../assets/Sponsers/sponser2.png";

// SponsorSection Component
function SponsorSection({ title, sponsors }) {
  return (
    <div>
      <div className="mt-20 mb-10 font-bold text-2xl text-left">{title}</div>
      <div className="flex justify-between mb-20 w-4/5">
        {sponsors.length > 0 ? (
          sponsors.map((sponsor, index) => (
            <div
              className="flex flex-col items-center border-2 border-gray-800 bg-gray-800 shadow-lg mr-4 last:mr-0 p-8 w-1/2 text-left"
              key={index}
            >
              <img src={sponsor.img} alt={sponsor.name} className="mt-5 max-w-2/5" />
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
    <div className="bg-black min-h-screen text-white App">
      <noscript>You need to enable JavaScript to run this app.</noscript>

      {/* Centered Sponsors Section */}
      <div className="flex flex-col justify-start items-center w-full text-center">
        <h1 className="relative mt-10 mb-20 w-full font-bold text-2xl">
          Sponsors
          <span className="block bottom-0 left-0 absolute bg-gray-700 w-full h-0.5"></span>
        </h1>

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
  );
}

export default Sponsors;

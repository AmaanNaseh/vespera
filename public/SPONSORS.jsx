import React from "react";
import "./App.css"; // Assuming you put your styles in App.css
import logo from "./assets/logo.png"; // Assuming you have these images in an assets folder
import sponsor1 from "./assets/Group16.png";
import sponsor2 from "./assets/Group15.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#speakers">Speakers</a>
        <a href="#FAQ">FAQ</a>
        <a href="#sponsors">Sponsors</a>
      </div>
    </div>
  );
}

function SponsorSection({ title, sponsors }) {
  return (
    <div>
      <div className="section-heading">{title}</div>
      <div className="description-container">
        {sponsors.map((sponsor, index) => (
          <div className="description" key={index}>
            <img src={sponsor.img} alt={sponsor.name} className="sponsor-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const titleSponsors = [
    { img: sponsor1, name: "Premier Energies" },
    { img: sponsor2, name: "Emmvee Solar" },
  ];

  return (
    <div className="App">
      <noscript>You need to enable JavaScript to run this app.</noscript>

      {/* Navbar Section */}
      <Navbar />

      {/* Centered Sponsors Section */}
      <div className="center-container">
        <h1>Sponsors</h1>

        {/* Title Sponsors */}
        <SponsorSection title="TITLE SPONSORS" sponsors={titleSponsors} />

        {/* Platinum Sponsors */}
        <div className="section-heading">PLATINUM SPONSORS</div>
        <div className="description"></div>

        {/* Gold Sponsors */}
        <div className="section-heading">GOLD SPONSORS</div>
        <div className="description"></div>

        {/* Silver Sponsors */}
        <div className="section-heading">SILVER SPONSORS</div>
        <div className="description"></div>
      </div>
    </div>
  );
}

export default App;

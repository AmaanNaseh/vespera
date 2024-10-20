import React, { useEffect } from "react";
import backgroundHeading from "./image/back.png";
import background from "./image/hack.png";
import Themes from "./image/image.png";
import VerticalBar from "./image/vertical-bar.png";
import Faq from "./faq";
import Footer from "../HomePage/Footer/Footer";

function Hackathon() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <section className="bg-black text-white font-sans flex flex-col items-center w-full">
        {/* <h1 className="text-6xl font-bold">Hackathon</h1> */}
        <div
          className="flex justify-center items-center mt-[20px] sm:mt-[40px] w-[60%] sm:w-[40%] md:w-[50%] h-[250px] sm:h-[250px] md:h-[300px]"
          style={{
            backgroundImage: `url(${backgroundHeading})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1 className="font-fogLighten text-5xl text-glow text-white sm:text-8xl md:text-8xl">
            VesHack
          </h1>
        </div>
        <div className="bg-gray-300 mt-[-70px] sm:mt-[-70px] md:mt-[-50px] w-full h-[0.5px]"></div>

        <div
          className="w-[80%] sm:h-[600px] h-[300px] mt-[120px] rounded-3xl"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div className="w-[80%] text-center">
          <p className="mt-20 text-sm md:text-lg text-gray-300 mx-auto">
            Get ready for an exciting coding adventure at Ves-Hack – The
            Ultimate Hackathon, happening as part of Vespera'24 in collaboration
            with IoSC and AWS Cloud Club at GGSIPU EDC. This high-energy,
            24-hour event invites tech enthusiasts from all backgrounds to
            tackle problem statements across domains like AI, ML, Cloud, IoT,
            and more. With the backing of AWSCC and IoSC, Ves-Hack fosters a
            vibrant, innovation-driven atmosphere where cutting-edge solutions
            come to life. Showcase your coding skills, collaborate with fellow
            developers, and stand a chance to win amazing prizes. Open to
            everyone from coding beginners to experienced pros, it’s an
            opportunity to solve real-world challenges, network with industry
            experts, and have an unforgettable experience. Get ready to dive
            into the world of tech at Ves-Hack, where creativity meets
            innovation during Vespera 2024!
          </p>
        </div>
        <button className="mt-10 text-black px-6 py-2 rounded" style={{backgroundColor:'rgba(45, 45, 45, 1)', color:'white'}}
           onClick={()=>{window.open("https://unstop.com/hackathons/veshack-hackathon-vespera24-guru-gobind-singh-indraprastha-university-ggsipu-east-delhi-campus-new-delhi-1178403")}}
        >Apply Now</button>
        {/* <p className="mt-10 px-6 py-2"></p>
        <div
          class="apply-button"
          data-hackathon-slug="ves-hack"
          data-button-theme="dark-inverted"
          style={{ height: "44px", width: "312px" }}
        ></div> */}

        {/* Prizes Section */}

        <div className="xl:w-[50%] w-[80%] text-center mt-[100px]">
          <h2 className="lg:text-[45px] text-[35px]  font-bold">
            Exciting Prizes and Rewards Await!
          </h2>
          <p>
            Explore a variety of chances to demonstrate your skills, solve
            intriguing challenges, and win exciting prizes during the hackathon.
          </p>
        </div>
        <div className="xl:w-[60%] sm:w-[90%] w-[95%]  grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* First Prize spans across two columns on larger screens */}
          <div
            className="bg-gray-800 p-6 rounded-lg md:col-span-2 flex justify-between items-center"
            style={{ backgroundColor: "rgba(45, 45, 45, 1)", color: "white" }}
          >
            {/* Left side content */}
            <div className="text-left">
              <h3 className="text-2xl font-bold">First Prize</h3>
              <p className="mt-2 text-gray-400 w-[170px] sm:w-[250px]">
                The champion's crown awaits you
              </p>
            </div>

            {/* Right side content */}
            <div className="text-3xl font-bold">₹ 75,000</div>
          </div>

          {/* Second Prize */}
          <div
            className="bg-gray-800 p-6 rounded-lg flex justify-between items-center"
            style={{ backgroundColor: "rgba(45, 45, 45, 1)", color: "white" }}
          >
            <div className="text-left">
              <h3 className="lg:text-2xl md:text-xl font-bold">Second Prize</h3>
              <p className="mt-2 text-gray-400 w-[170px] sm:w-[250px]">
                The next best is still a winner
              </p>
            </div>
            <div className="text-3xl font-bold">₹ 50,000</div>
          </div>

          {/* Third Prize */}
          <div
            className="bg-gray-800 p-6 rounded-lg flex justify-between items-center"
            style={{ backgroundColor: "rgba(45, 45, 45, 1)", color: "white" }}
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold">Third Prize</h3>
              <p className="mt-2 text-gray-400">A victory in the making</p>
            </div>
            <div className="text-3xl font-bold">₹ 25,000</div>
          </div>
        </div>

        {/* Themes Section */}
        <section className="text-center mt-[100px] ">
          <h2 className="text-3xl font-bold text-[45px]">Themes</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Explore diverse challenges and unleash your creativity with our
            carefully curated themes. One hack at a time.
          </p>
        </section>

        <div
          className="bg-gray-800 p-6 mt-8 rounded-lg mx-auto text-left lg:w-[50%] sm:w-[80%] w-[90%]"
          style={{ backgroundColor: "rgba(45, 45, 45, 1)", color: "white" }}
        >
          <h3 className="text-2xl font-bold">
            Renewable Energy & Sustainability
          </h3>
          <p className="mt-2 text-gray-400">
            Tackle pressing environmental issues and innovate for a greener
            future. The focus is on developing solutions that promote
            sustainability, reduce waste, and support eco-friendly practices,
            all aimed at creating a positive impact on the planet.
          </p>
        </div>
        <img src={Themes} className="sm:w-[70%] w-[95%] mt-[100px]" alt="..." />

        {/* Timeline Section */}
        <section className="text-center py-16 md:w-[60%] w-[90%]">
          <h2 className="text-3xl font-bold text-[45px] pb-10">Timeline</h2>
          <p>
            Stay on track with key dates and events to make the most of your
            experience.Stay tuned!
          </p>
        </section>

        <div className="display flex lg:w-[50%] md:w-[85%] w-full">
          <img
            src={VerticalBar}
            className="h-[550px] md:my-0 sm:mx-[0px] mx-[-20px]"
            alt="..."
          />
          <ul className="mt-[30px] space-y-4">
            <li
              className="bg-gray-800 p-4 rounded-lg lg:w-[600px] md:w-[500px] w-[300px]"
              style={{ backgroundColor: "rgba(45, 45, 45, 1)", color: "white" }}
            >
              <span className="font-bold">Registration Starts</span>
              <br></br> Oct 10th, 08:00 AM
            </li>
            <li
              className="bg-gray-800 p-4 rounded-lg"
              style={{ backgroundColor: "rgba(45, 45, 45, 1)", color: "white" }}
            >
              <span className="font-bold">Round 1 starts</span>
              <br></br> Oct 10th, 10:00 AM
            </li>
            <li
              className="bg-gray-800 p-4 rounded-lg"
              style={{ backgroundColor: "rgba(45, 45, 45, 1)", color: "white" }}
            >
              <span className="font-bold">Round 1 Submission deadline</span>
              <br></br> Oct 20th, 10:00 PM
            </li>
            <li
              className="bg-gray-800 p-4 rounded-lg"
              style={{ backgroundColor: "rgba(45, 45, 45, 1)", color: "white" }}
            >
              <span className="font-bold">Round 1 results</span>
              <br></br> Oct 22th, 05:00 PM
            </li>
            <li
              className="bg-gray-800 p-4 rounded-lg"
              style={{ backgroundColor: "rgba(45, 45, 45, 1)", color: "white" }}
            >
              <span className="font-bold">Final Round</span>
              <br></br> Oct 25th, 10:00 AM
            </li>
          </ul>
        </div>
        <Faq />
      </section>
      <Footer />
    </div>
  );
}

export default Hackathon;

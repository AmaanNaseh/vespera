import React from "react";

const Hackathon = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-around py-4">
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Events</li>
          <li className="hover:text-gray-400 cursor-pointer">Speakers</li>
          <li className="hover:text-gray-400 cursor-pointer">FAQ</li>
          <li className="hover:text-gray-400 cursor-pointer">Sponsors</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-6xl font-bold">Hackathon</h1>
        <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="mt-6 bg-white text-black px-6 py-2 rounded">Apply Now</button>
      </section>

      {/* Prizes Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">Exciting Prizes and Rewards Await!</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 mt-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl">First Prize</h3>
            <p className="mt-2 text-gray-400">The champion's crown awaits you</p>
            <p className="mt-4 text-3xl">₹ 3 Crore</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl">Second Prize</h3>
            <p className="mt-2 text-gray-400">The next best is still a winner</p>
            <p className="mt-4 text-3xl">₹ 2 Crore</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl">Third Prize</h3>
            <p className="mt-2 text-gray-400">A victory in the making</p>
            <p className="mt-4 text-3xl">₹ 1 Crore</p>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">Themes</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Explore various challenges and unlock your creativity with our carefully curated themes.
        </p>
        <div className="bg-gray-800 p-6 mt-8 rounded-lg max-w-lg mx-auto">
          <h3 className="text-xl">Sustainability</h3>
          <p className="mt-2 text-gray-400">
            Tackle pressing environmental issues and innovate for a greener future.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <span>Restoration</span>
            <span>Resilience</span>
            <span>Conservation</span>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">Timeline</h2>
        <ul className="mt-8 space-y-4">
          <li className="bg-gray-800 p-4 rounded-lg">Registration: Sept 1st, 12:00 PM</li>
          <li className="bg-gray-800 p-4 rounded-lg">Submission: Oct 1st, 11:59 PM</li>
          <li className="bg-gray-800 p-4 rounded-lg">Judging: Oct 5th, 5:00 PM</li>
          <li className="bg-gray-800 p-4 rounded-lg">Results: Oct 10th, 10:00 AM</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">You got some Qs, We have the As</h2>
        <div className="mt-8 space-y-4 max-w-lg mx-auto">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="cursor-pointer">What is the duration of the hackathon?</h3>
            <p className="text-gray-400 mt-2">It lasts for one month from registration to final results.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="cursor-pointer">What is the focus of the hackathon?</h3>
            <p className="text-gray-400 mt-2">The main focus is on innovation and solving real-world problems.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hackathon;

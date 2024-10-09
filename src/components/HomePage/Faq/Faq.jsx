import React, { useState } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 mb-[100px]">
      <h1 className="my-8 sm:mb-16 font-bold text-xl text-white sm:text-3xl md:text-4xl sm:mt-[70px]">
        You got some Qs, We have the As 
      </h1>

      <Accordion
        question="Are there goodies?"
        answer="Absolutely! What's a fest without swag? Get ready for cool T-shirts, stickers, and mystery goodies. "
        isOpen={openIndex === 0}
        onClick={() => toggleAccordion(0)}
      />
      <Accordion
        question="Can I attend only for fun?"
        answer="Totally! While the events are both tech and non-tech, we welcome spectators too. Enjoy the tech magic, grab some food, and cheer on your friends."
        isOpen={openIndex === 1}
        onClick={() => toggleAccordion(1)}
      />
      <Accordion
        question="How do I sign up for events?"
        answer="Head over to this registration portal itself , or catch one of our event volunteers zooming around campus for a quick sign-up!"
        isOpen={openIndex === 2}
        onClick={() => toggleAccordion(2)}
      />
      <Accordion
        question="Can I take part in multiple events?"
        answer="Yes, you’re free to hop across galaxies (events) and show your brilliance in as many as you want!"
        isOpen={openIndex === 3}
        onClick={() => toggleAccordion(3)}
      />
    </div>
  );
}

function Accordion({ question, answer, isOpen, onClick }) {
  return (
    <div
      className={`w-full max-w-[1080px] bg-[#2d2d2d] rounded-lg mb-5 overflow-hidden transition-all duration-300 ${
        isOpen ? "open" : ""
      }`}
    >
      <div
        className="flex justify-between items-center bg-[#131313] hover:bg-[#2d2d2d] p-4 md:p-5 lg:p-6 transition-colors duration-300 cursor-pointer"
        onClick={onClick}
      >
        <p className="m-0 text-base text-white sm:text-lg md:text-xl select-none">{question}</p>
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M1.73916 9.89314e-06H22.2608C22.5888 -0.00108785 22.9104 0.0891901 23.1882 0.260355C23.466 0.431521 23.6886 0.676548 23.8302 0.966968C23.9718 1.25739 24.0265 1.58128 23.988 1.90101C23.9495 2.22075 23.8194 2.5232 23.6128 2.77323L13.3519 15.3633C13.1895 15.562 12.9837 15.7224 12.7497 15.8326C12.5157 15.9428 12.2595 16 12 16C11.7405 16 11.4843 15.9428 11.2503 15.8326C11.0163 15.7224 10.8105 15.562 10.6481 15.3633L0.387226 2.77323C0.180588 2.5232 0.0504656 2.22075 0.0119762 1.90101C-0.0265131 1.58128 0.028211 1.25739 0.16979 0.966968C0.311368 0.676548 0.53399 0.431521 0.811791 0.260355C1.08959 0.0891901 1.41117 -0.00108785 1.73916 9.89314e-06Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        className={`bg-[#1b1b1b] text-white text-left transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[200px] opacity-75 py-4 px-4 md:px-6" : "max-h-0 opacity-0 py-0"
        } overflow-hidden`}
      >
        <p className="text-sm sm:text-base md:text-lg select-none">{answer}</p>
      </div>
    </div>
  );
}

export default Faq;

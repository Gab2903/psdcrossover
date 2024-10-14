import { useState } from "react";
import image1 from "../utils/image1.png";
import image2 from "../utils/image2.png";

const Footer = () => {
  // Akkordeon-Zustand
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Header + IMG */}
      <header
        className="w-full h-96 bg-cover bg-center size-full"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold"></h1>
        </div>
      </header>
      <br />
      <br />

      {/* FAQ*/}
      <section className="bg-[#FAF0E8] py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[#480AD0] mb-6">
              FAQ (Frequently Asked Questions)
            </h2>

            {/* FAQ Elemente*/}
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="mb-4">
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <span className="text-lg font-medium">
                    Lorem ipsum dolor sit amet?
                  </span>
                  <span>{openFAQ === index ? "-" : "+"}</span>
                </div>
                {openFAQ === index && (
                  <div className="mt-2 p-4 text-sm text-gray-600 bg-gray-50 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* IMG, Text + Button */}
          <div className="flex flex-col items-center">
            <img
              src={image2}
              alt="Description Image"
              className="mb-6 rounded-lg shadow-lg"
            />
            <p className="text-gray-600 text-sm mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 place-self-center">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#480AD0] text-[#FAF0E8] py-8 size-full">
        <div className="container mx-auto text-center size-max">
          <div className="mt-6"></div>
          <h2 className="text-4xl font-bold mt-6 mb-6">Find out more</h2>
          <p className="text-lg font-semibold">Quick Links</p>
          <br />
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm underline">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Tickets
            </a>
            <a href="#" className="hover:underline">
              By Popularity
            </a>
            <a href="#" className="hover:underline">
              Mission Statement
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Bookings
            </a>
            <a href="#" className="hover:underline">
              Speakers
            </a>
            <a href="#" className="hover:underline">
              The Team
            </a>
            <a href="#" className="hover:underline">
              Schedule
            </a>
            <a href="#" className="hover:underline">
              Studies
            </a>
            <a href="#" className="hover:underline">
              Trainings
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <br />
          </div>
          <div className="mt-8 text-xs text-gray-300 font-semibold">
            © 2024 ELG Travels. All Rights Reserved.
          </div>
          {/* Top Button */}
          <div className="mt-6">
            <a
              href="#top"
              className="bg-white text-blue-700 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

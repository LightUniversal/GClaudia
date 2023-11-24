import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 mt-6 px-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-bold mb-4">G-Claudia</h3>
          <p>Nnamdi Azikiwe University, Awka</p>
          <p>Awka, Anambra State, 420112</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <p><a href="tel:+2347038717473" className="text-blue-300">Tell:+2347038717473 </a></p>
          <p>Email: <a href="mailto:info@example.com" className="text-blue-300">gclaudia@example.com</a></p>
          <p>Website: <a href="http://www.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-300">https://gclaudia.onrender.com/</a></p>
        </div>
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <p>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300">LinkedIn</a>
            {' | '}
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300">Twitter</a>
            {' | '}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300">Facebook</a>
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <p className="text-center">&copy; 2023 G-Claudia. All rights reserved.</p>
        <p className="text-center">
          <a href="#" className="text-blue-300">Privacy Policy</a> | <a href="#" className="text-blue-300">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

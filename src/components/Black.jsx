import React from "react";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
const Black = () => {
  const logo = [instagram, twitter];
  return (
    <footer className="w-full bg-black text-white py-8 flex flex-col items-center">
      <div className="flex space-x-4 mb-2">
        {logo.map((logo) => (
          <img
            src={logo}
            alt=""
            className="w-10 h-10 object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
      <p className="text-xs opacity-80">Made With ❤️</p>
    </footer>
  );
};
export default Black;
import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-blue-900 text-white py-4 px-8 rounded-t-xl shadow mt-10 max-w-5xl mx-auto flex flex-col items-center">
    <div className="text-sm font-medium mb-1">IPL T20 Dashboard &copy; {new Date().getFullYear()}</div>
    <div className="text-xs text-gray-300">Made with <span className="text-red-400">&#10084;</span> by Tarun Dharmashya</div>
    <div className="text-xs text-gray-400 mt-1">Data and logos are for informational purposes only. Not affiliated with IPL or BCCI.</div>
  </footer>
);

export default Footer;

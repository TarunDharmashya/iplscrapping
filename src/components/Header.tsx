import React from 'react';

const Header: React.FC = () => (
  <header className="bg-blue-900 text-white px-8 py-6 rounded-xl shadow flex items-center max-w-5xl mx-auto mt-1">
    <div className="flex items-center gap-6 w-full">
      <img
        src="./TeamsLogo/ipl-logo.png"
        alt="IPL Logo"
        className="h-12 w-auto drop-shadow"
      />
      <h1 className="text-3xl font-bold tracking-tight">IPL T20 Dashboard</h1>
    </div>
  </header>
);

export default Header;
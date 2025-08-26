import React from "react";

const Loading: React.FC = () => (
  <div className="flex flex-col items-center justify-center flex-1 min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-solid mb-4"></div>
    <div className="text-lg font-semibold text-blue-500">Loading...</div>
    <div className="text-xs text-gray-400 mt-2">Fetching IPL data, please wait!</div>
  </div>
);

export default Loading;

import React from "react";
import { features } from "../constants";

const FeaturedSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Featured</span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> your code</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-20 gap-10">
        {features.map((feature, index) => (
          <div className="w-full" key={index}>
            <div className="flex gap-4 mb-5 items-center">
              <span className="w-10 h-10 bg-neutral-900 text-orange-700 rounded-full items-center justify-center flex">{feature.icon}</span>
              <h2 className="text-xl">{feature.text}</h2>
            </div>
            <div className="w-10/12 ml-14 mb-10">
              <h5 className="text-neutral-500">{feature.description}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;

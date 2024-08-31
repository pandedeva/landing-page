import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 mb-20 tracking-wide">
      <h1 className="text-3xl lg:text-5xl text-center">What People are saying</h1>
      <div className="flex flex-wrap justify-center mt-10">
        {testimonials.map((testi, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 border border-neutral-800 font-thin">
              <p>{testi.text}</p>
              <div className="flex mt-6 gap-5 items-center">
                <img src={testi.image} className="w-12 h-12 rounded-full object-cover border border-neutral-300" />
                <div>
                  <h4>{testi.user}</h4>
                  <h5 className="text-sm font-normal italic text-neutral-600">{testi.company}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

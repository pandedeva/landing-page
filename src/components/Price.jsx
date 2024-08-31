import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

const Price = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl lg:text-5xl text-center tracking-wide">Pricing</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6">
        {pricingOptions.map((option, index) => (
          <div className="border rounded-lg mt-10 p-8 flex justify-center flex-col gap-6" key={index}>
            <h3 className="text-4xl">
              {option.title}
              {option.title === "Pro" && <span className="text-xl bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text ml-1"> (Most Popular)</span>}
            </h3>
            <div className=" text-5xl">
              {option.price} <span className="text-neutral-400 tracking-tight text-base"> /Month</span>
            </div>
            <ul>
              {option.features.map((feature, index) => (
                <li className="flex gap-3 py-4 items-center" key={index}>
                  <CheckCircle2 />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="border border-orange-900 hover:bg-orange-900 py-3 px-4 rounded-lg transition-all duration-200 text-center">Suscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;

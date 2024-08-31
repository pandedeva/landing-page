import React from "react";
import code from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const WorkFlow = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl lg:text-5xl text-center tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> coding workflow.</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
        <div className="px-4">
          <img src={code} alt="" />
        </div>

        <div className="flex flex-col mt-10 px-4">
          {checklistItems.map((item, index) => (
            <div className="flex gap-5 py-5" key={index}>
              <div className="bg-neutral-900 text-green-400 rounded-full p-2 h-10 w-10 flex justify-center items-center">
                <CheckCircle2 />
              </div>
              <div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="w-11/12">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;

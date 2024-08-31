import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawer);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          <ul className="hidden lg:flex space-x-12 ml-14">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex space-x-7 items-center">
            <button className="px-3 py-2 border rounded-md">Sign In</button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an account</button>
          </div>

          <div className="lg:hidden flex flex-col justify-end transition-all">
            <button onClick={toggleNavbar}>{mobileDrawer ? <X /> : <Menu />}</button>
          </div>
        </div>

        {mobileDrawer && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="space-x-6 flex mt-3">
              <button className="px-3 py-2 border rounded-md">Sign In</button>
              <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an account</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

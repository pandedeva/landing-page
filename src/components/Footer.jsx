import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 mt-10">
        <div>
          <h3 className="font-semibold mb-4">Resource</h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li className="py-1" key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Platform</h3>
          <ul>
            {platformLinks.map((link, index) => (
              <li className="py-1" key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul>
            {communityLinks.map((link, index) => (
              <li className="py-1" key={index}>
                <a href={link.href} className="text-neutral-300 hover:text-white">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

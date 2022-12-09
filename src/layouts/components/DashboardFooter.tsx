import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaFacebookF />,
    url: "#",
  },
  {
    icon: <FaTwitter />,
    url: "#",
  },
  {
    icon: <FaInstagram />,
    url: "#",
  },
];

const DashboardFooter = () => {
  return (
    <div className="px-5 lg:px-7 py-4 lg:py-3 border-t border-slate-200 flex flex-col justify-center sm:flex-row items-center gap-y-3 sm:justify-between mt-auto">
      <p className="opacity-60 text-sm">
        &copy; Copyrights {new Date().getFullYear()}. All rights reserved
      </p>

      <ul className="flex items-center gap-5">
        {socialLinks.map(({ icon, url }, i) => (
          <li key={i}>
            <a
              className="w-9 h-9 flex items-center justify-center border rounded-full border-slate-100 hover:bg-primary hover:text-white hover:border-primary duration-200"
              href={url}
              target={"_blank"}
              rel="noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardFooter;

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border rounded-t-lg z-10 border-blue-400 border-l-transparent border-r-transparent text-white">
      <div className="container p-10  flex justify-end">

      < Image src= "/Logo_.png" alt= "Logo" width = "150" height = "150"/>
        {/* <p className="text-slate-600">All rights reserved.</p>   */}
      </div>
    </footer>
  );
};

export default Footer;

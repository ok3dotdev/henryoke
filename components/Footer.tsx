import React from "react";
import Heading from "./Heading";

const Footer = () => {
  return (
    <div className="text-[#D0CFCF] mb-24">
      <Heading title="" />
      <hr />
      <div className="flex justify-between mt-2">
        <p>©2023 Oke Henry</p>
        <p className="flex gap-4">
          <a className="underline" href="/#">
            Github
          </a>
          <a className="underline" href="#">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

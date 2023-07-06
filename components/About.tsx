import { FaHashtag } from "react-icons/fa";
export default function About() {
  return (
    <div className="mb-24">
      <h3 className="flex items-center text-xl font-semibold mb-12">
        <FaHashtag className="mr-4 text-[#4F4F4F]" size={18} />
        About
      </h3>
      <p className="mb-4 font-light  text-[#D0CFCF] leading-7">
        Recently, I've been working at a Media company, collaborating closely
        with science writers. Together, we've been building cutting-edge
        websites using technologies like React, TypeScript, and Node. It's been
        an exciting journey, combining my passion for development with the
        opportunity to contribute to the world of science communication.
        Recently, I've been working at a Media company, collaborating closely
        with science writers.
      </p>
      <p className="mb-4 font-light text-[#D0CFCF] leading-7">
        Recently, I've been working at a Media company, collaborating closely
        with science writers. Together, we've been building cutting-edge
        websites using technologies like React,
      </p>
      <p className="mb-4 font-light text-[#D0CFCF] leading-7">
        Hey there! I'm a friendly front-end developer based in Toronto, Canada,
        with experience in the Media / Advertising and ecommerce industries
      </p>
    </div>
  );
}

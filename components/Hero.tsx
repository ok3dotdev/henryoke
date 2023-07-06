import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="mt-32 mb-24">
      <h1 className="text-4xl font-bold mb-2">Hello, Im Henry Oke 👋🏾</h1>
      <p className="mb-8 text-[#D0CFCF] font-light max-w-sm">
        {` I'm a${" "}`}
        <span className="font-bold text-white">
          Front-end Web Developer
        </span>{" "}
        {`dedicated to creating inclusive digital experiences that are accessible
        to all.`}
      </p>
      <div className="flex gap-8">
        <BsLinkedin size={20} />
        <BsGithub size={20} />
        <BsTwitter size={20} />
        <BsInstagram size={20} />
      </div>
    </div>
  );
}

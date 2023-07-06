import React from "react";
import { FaHashtag } from "react-icons/fa";

type HeadingProps = {
  title: string;
};

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h3 className="flex items-center text-xl font-semibold mb-12">
      {title && (
        <>
          <FaHashtag className="mr-4 text-[#4F4F4F]" size={18} />
          {title}
        </>
      )}
    </h3>
  );
};

export default Heading;

import Image from "next/image";
import React from "react";
import { Project } from "./Projects";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, img, link } = project;
  return (
    <div className="bg-[#4F4F4F] rounded-md max-w-[550px]">
      <div className="rounded-t-md">
        <Image
          className="rounded-t-md"
          src={img.url}
          alt=""
          width={550}
          height={350}
        />
      </div>
      <div className="h-[10%] flex p-3 flex-col text-left">
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <div className="flex gap-4 mt-3">
          <a
            className="cursor-pointer flex items-center gap-1 hover:text-blue-900 underline text-sm"
            href={link.url}
            target="_blank"
          >
            <BiLink size={16} className="" />
            Visit site
          </a>
          <a
            className="cursor-pointer flex items-center gap-1 hover:text-blue-700 underline text-sm"
            href={link.github}
            target="_blank"
          >
            <BsGithub size={15} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

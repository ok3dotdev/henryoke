import React from "react";
import { FaHashtag } from "react-icons/fa";
import { ExperienceCard, ExperienceCardProps } from "./ExperienceCard";

const experiences: ExperienceCardProps[] = [
  {
    company: "LabX Media Group",
    role: "Front-end Developer",
    startDate: "2021",
    endDate: "PRESENT",
    duties: `I've been working at an Online Media company for the last 2 years as a front-end web developer. Collaborating with science writers, we create performant websites using React, TypeScript, and Node. I also utilize my skills to build features for members and subscribers of different tiers, enhancing their user experience. Additionally, I contribute to an internal CMS, empowering editors to write and schedule articles.`,
    skills: [
      "React",
      "Javascript",
      "AWS S3",
      "Typescript",
      "Node",
      "express",
      "pug",
      "jira",
    ],
  },
  {
    company: "Shopify Partner",
    role: "Shopify Developer ",
    startDate: "2019",
    endDate: "2022",
    duties:
      "As a Shopify developer, I leveraged my expertise in HTML, CSS, JavaScript, AJAX, and Shopify's liquid templating language to build high-converting Shopify themes and apps for merchants. I also provided ongoing maintenance, support, and training, empowering clients to utilize new platform features effectively.",
    skills: ["HTML/CSS", "Javascript", "Liquid", "Ajax", "Shopify", "Node"],
  },
  {
    company: "MTN",
    role: "Web Developer (Contract)",
    startDate: "2017",
    endDate: "2019",
    duties:
      "During my summer internship at MTN, I worked as a web developer, with a primary focus on building marketing pages for various campaigns and new offers. My main responsibility was to translate Figma designs into mobile-responsive and engaging websites using React. My role as a web developer at MTN allowed me to showcase my technical skills in React and CMS platforms, while also demonstrating my ability to translate designs into visually appealing and functional websites.",
    skills: ["HTML/CSS", "Javascript", "Typescript", "Node", "express"],
  },
];

function Experience() {
  return (
    <div className="text-[#D0CFCF] mb-24">
      <h3 className="flex items-center text-xl font-semibold mb-12">
        <FaHashtag className="mr-4 text-[#4F4F4F]" size={18} />
        Experience
      </h3>
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </div>
  );
}

export default Experience;

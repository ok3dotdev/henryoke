import React from 'react';
import { FaHashtag } from 'react-icons/fa';
import { ExperienceCard, ExperienceCardProps } from './ExperienceCard';

const experiences: ExperienceCardProps[] = [
  {
    company: 'LabX Media Group',
    role: 'Front-end Developer',
    startDate: '2021',
    endDate: 'PRESENT',
    duties: `Developed and enhanced core features for a high-traffic science news site, including a paid membership system, CMS redesign, real-time content analytics, and engagement-driven tools, driving significant user growth and content discovery`,
    skills: [
      'React',
      'Javascript',
      'AWS S3',
      'Typescript',
      'Node',
      'express',
      'pug',
      'jira',
    ],
  },
  {
    company: 'Fidio Inc',
    role: 'Full-stack Developer',
    startDate: '2023',
    endDate: '2024',
    duties:
      'I worked on Fidio, a concert live-streaming platform, to bring live concerts experience to online viewers. Application features included seamless experience for browsing events, purchasing tickets, watching live streams, and rewatching performances, ensuring a smooth, interactive experience for viewers.',
    skills: [
      'NextJs',
      'Javascript',
      'Typescript',
      'Node',
      'express',
      'RTMP',
      'AWS',
    ],
  },
  {
    company: 'Shopify Partner',
    role: 'Shopify Developer ',
    startDate: '2019',
    endDate: '2022',
    duties:
      "As a Shopify developer, I leveraged my expertise in HTML, CSS, JavaScript, AJAX, and Shopify's liquid templating language to build high-converting Shopify themes and apps for merchants. I also provided ongoing maintenance, support, and training, empowering clients to utilize new platform features effectively.",
    skills: ['HTML/CSS', 'Javascript', 'Liquid', 'Ajax', 'Shopify', 'Node'],
  },
];

function Experience() {
  return (
    <div className='text-[#D0CFCF] mb-24'>
      <h3 className='flex items-center text-xl font-semibold mb-12'>
        <FaHashtag className='mr-4 text-[#4F4F4F]' size={18} />
        Experience
      </h3>
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </div>
  );
}

export default Experience;

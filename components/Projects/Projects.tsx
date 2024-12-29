import React from 'react';
import Heading from '../Heading';
import ProjectCard from './ProjectCard';

export type Project = {
  img: {
    url: string;
  };
  link: {
    url: string;
    github?: string;
  };
  title: string;
};

const projects: Project[] = [
  {
    img: {
      url: 'https://cdn.sanity.io/images/ruecft06/production/d08679dc9245497121032d568be7c4bc4ec35053-2400x1287.png',
    },
    link: {
      url: 'https://app.okehenry.com',
      github: 'https://github.com/ok3dotdev/Expensify',
    },
    title: 'Expensify - Budget and Finaince app 🏦.',
  },
  {
    img: {
      url: 'https://cdn.sanity.io/images/ruecft06/production/226bd317d601d3722fe4dc79fe9e4f4a0b01f3be-1487x961.png',
    },
    link: {
      url: 'https://lawgrid.vercel.app/',
      github: 'https://github.com/sickerman/Lawgrid',
    },
    title: 'Lawgrid Ng Marketing site',
  },
  {
    img: {
      url: 'https://cdn.sanity.io/images/ruecft06/production/37a4f85e2d92595249f47dbede475a816fa47f30-2400x1287.png',
    },
    link: {
      url: 'https://fidio.ca/',
    },
    title: 'Fidio - Concert live-stream application',
  },
  {
    img: {
      url: 'https://cdn.sanity.io/images/ruecft06/production/7d6e91f3e191d5dd1c5f8e1267696a324508bdee-1432x976.png',
    },
    link: {
      url: 'http://shortly-bice.vercel.app/',
      github: 'https://github.com/sickerman/shortly',
    },
    title: 'Shortly Link shortner app',
  },
];

const Projects = () => {
  return (
    <div className='text-[#D0CFCF] mb-24'>
      <Heading title={'Projects'} />
      <div className='text-center grid gap-8 sm:grid-cols-2 md:grid-cols-2 w-full mx-auto justify-center'>
        {projects.map((prj, idx) => (
          <ProjectCard key={idx} project={prj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

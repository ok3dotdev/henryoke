import React from 'react';
import Heading from '../Heading';
import ProjectCard from './ProjectCard';

export type Project = {
  img: {
    url: string;
  };
  link: {
    url: string;
    github: string;
  };
  title: string;
};

const projects: Project[] = [
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
      url: 'https://cdn.sanity.io/images/ruecft06/production/7d6e91f3e191d5dd1c5f8e1267696a324508bdee-1432x976.png',
    },
    link: {
      url: 'http://shortly-bice.vercel.app/',
      github: 'https://github.com/sickerman/shortly',
    },
    title: 'Shortly Link shortner app',
  },
  {
    img: {
      url: 'https://cdn.sanity.io/images/ruecft06/production/ab617505a60f0ade72c9f7bf7f88c5111a9ec4ff-1497x976.png',
    },
    link: {
      url: 'https://covid-tracker-app-e755a.web.app/',
      github: 'https://github.com/sickerman/covid-tracker-app',
    },
    title: 'Covid-19 Tracker application',
  },
  {
    img: {
      url: 'https://cdn.sanity.io/images/ruecft06/production/8caf61c738179bfe27f3bab9d084c13e2f5cf95c-1432x976.png',
    },
    link: {
      url: 'https://education.d22lzzd1dumb0v.amplifyapp.com/',
      github: 'https://github.com/okalm-solutions/resume-builder',
    },
    title: 'Resumefy - resume builder',
  },
  {
    img: {
      url: 'https://cdn.sanity.io/images/ruecft06/production/c505a86032cc0d6cba37f216b6827f6249dd3390-1316x977.png',
    },
    link: {
      url: 'https://henryokev2.vercel.app/',
      github: 'https://github.com/sickerman/Projectxyz',
    },
    title: 'Portfolio V2',
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

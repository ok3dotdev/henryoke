import { FaHashtag } from 'react-icons/fa';
import NowPlaying from './NowPlaying';
export default async function About() {
  return (
    <div className='mb-24'>
      <h3 className='flex items-center text-xl font-semibold mb-12'>
        <FaHashtag className='mr-4 text-[#4F4F4F]' size={18} />
        About
      </h3>
      <p className='mb-4 font-light  text-[#D0CFCF] leading-7'>
        {`Hello! I'm a Toronto-based front-end developer with 4+ years of experience in the Media/Advertising and eCommerce industries. I specialize in creating exceptional web experiences using JavaScript, TypeScript, HTML5, CSS3, Node, and Python. With a focus on user-experice and performance, I develop visually appealing and accessible websites that engage and inform users.`}
      </p>
      <p className='mb-4 font-light  text-[#D0CFCF] leading-7'>
        {`Collaborating closely with writers and e-commerce merchants has allowed me to leverage and passion for development to build solutions and experiences to meet business goals. I bring a results-oriented approach to my work, striving to deliver seamless and intuitive user experiences. I am currently seeking full-time frontend software development and full-stack roles where I can leverage my expertise to drive innovation and make a meaningful impact. Let's connect and explore how we can work together!`}
      </p>
      {/* @ts-expect-error Async Server Component */}
      <NowPlaying />
    </div>
  );
}

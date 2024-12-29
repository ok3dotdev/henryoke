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
        {`Full-stack Developer with 5+ years of experience in frontend and backend development.`}
      </p>
      {/* @ts-expect-error Async Server Component */}
      <NowPlaying />
    </div>
  );
}

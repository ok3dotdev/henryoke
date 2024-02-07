import Link from 'next/link';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';

export default function Hero() {
  return (
    <div className='mt-32 mb-24'>
      <h1 className='text-[29px] md:text-5xl font-bold mb-2'>
        Hello, Im Henry Oke 👋🏾
      </h1>
      <p className='mb-8 text-[#D0CFCF] font-light max-w-sm'>
        {` I'm a${' '}`}
        <span className='font-bold text-white'>
          Frontend Web Developer
        </span>{' '}
        {`dedicated to creating inclusive digital experiences that are accessible
        to all.`}
      </p>
      <div className='flex gap-8'>
        <Link href={'https://www.linkedin.com/in/henry-oke/'} target='_blank'>
          <BsLinkedin size={20} />
        </Link>
        <Link href={'https://github.com/ok3dotdev'} target='_blank'>
          <BsGithub size={20} />
        </Link>
        <Link href={'https://twitter.com/okedotdev'} target='_blank'>
          <BsTwitter size={20} />
        </Link>
        <Link href={'https://www.instagram.com/itisihenry/'} target='_blank'>
          <BsInstagram size={20} />
        </Link>
      </div>
    </div>
  );
}

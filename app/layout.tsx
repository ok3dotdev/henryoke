import './globals.css';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] });
import GoogleAnaltytics from './GoogleAnaltytics';

export const metadata = {
  title: 'Henry Oke - My personal site.',
  description: 'Front-end Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='bg-white text-black dark:bg-[#111010] dark:text-white'
    >
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
        <GoogleAnaltytics />
      </body>
    </html>
  );
}

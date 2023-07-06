import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Henry Oke",
  description: "Front-end Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-white text-black dark:bg-[#111010] dark:text-white"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}

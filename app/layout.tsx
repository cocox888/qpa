import type { Metadata } from 'next';
// import { Inter } from "next/font/google";
import './globals.css';

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'QPA',
  description:
    'Efficient Business Management at Your Fingertips. Our practice is providing comprehensive virtual assistant services to streamline your business operations.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script src="/js/scripts.js" defer></script>
        <script src="/js/projectdetails.js" defer></script> */}
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

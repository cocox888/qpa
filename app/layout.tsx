import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QPA',
  description:
    'Efficient Business Management at Your Fingertips. Our practice is providing comprehensive virtual assistant services to streamline your business operations.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">{children}</body>
    </html>
  );
}

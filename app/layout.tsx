import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'SABR Versicherungsagentur – Einfach. Ehrlich. Effizient.',
    template: '%s | SABR Versicherungsagentur',
  },
  description:
    'Wir schützen, was Ihnen am wichtigsten ist – mit zuverlässigen Versicherungen für jeden Lebensbereich.',
  icons: {
    icon: '/fav.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 bg-black">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


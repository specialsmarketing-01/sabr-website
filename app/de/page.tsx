import type { Metadata } from 'next';
import HomePage from '../page';

export const metadata: Metadata = {
  title: 'SABR Versicherungsagentur – Einfach. Ehrlich. Effizient.',
  description:
    'Wir schützen, was Ihnen am wichtigsten ist – mit zuverlässigen Versicherungen für jeden Lebensbereich.',
};

export default function DeHomePage() {
  return <HomePage />;
}

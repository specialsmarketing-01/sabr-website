type VisionLang = 'de' | 'en';

const FEATURES_DE = [
  {
    title: 'Vertrauen als Grundlage',
    description:
      'Wir bauen langfristige Beziehungen auf, die auf Ehrlichkeit und Zuverlässigkeit beruhen. Vertrauen ist das Herzstück jeder unserer Entscheidungen.',
    icon: TrustIcon,
  },
  {
    title: 'Innovation für Ihre Sicherheit',
    description:
      'Durch moderne Technologien entwickeln wir Lösungen, die Ihre Absicherung einfacher und effizienter gestalten.',
    icon: InnovationIcon,
  },
  {
    title: 'Verantwortung für morgen',
    description:
      'Wir handeln nachhaltig und mit Weitblick – für eine sichere Zukunft, in der Schutz und Verantwortung Hand in Hand gehen.',
    icon: ResponsibilityIcon,
  },
];

const FEATURES_EN = [
  {
    title: 'Trust at the core',
    description:
      'We build long-term relationships based on honesty and reliability. Trust is at the heart of every decision we make.',
    icon: TrustIcon,
  },
  {
    title: 'Innovation for your security',
    description:
      'Using modern technology, we design solutions that make your cover simpler and more efficient.',
    icon: InnovationIcon,
  },
  {
    title: 'Responsibility for tomorrow',
    description:
      'We act sustainably and with foresight – for a secure future where protection and responsibility go hand in hand.',
    icon: ResponsibilityIcon,
  },
];

const VISION_COPY = {
  de: {
    eyebrow: 'Unsere Vision',
    heading: 'Sicherheit mit Zukunft',
    intro:
      'Bei SABR glauben wir an eine Welt, in der Sicherheit einfach, verständlich und für jeden zugänglich ist. Unsere Vision ist es, moderne Versicherungslösungen zu schaffen, die Ihr Leben nicht komplizierter, sondern sicherer machen.',
  },
  en: {
    eyebrow: 'Our vision',
    heading: 'Security with a future',
    intro:
      'At SABR we believe in a world where protection is simple, clear, and accessible to everyone. Our vision is to create modern insurance solutions that make your life safer – not more complicated.',
  },
} satisfies Record<VisionLang, { eyebrow: string; heading: string; intro: string }>;

function TrustIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function InnovationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}

function ResponsibilityIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22c4-4 8-7.5 8-12a8 8 0 0 0-16 0c0 4.5 4 8 8 12z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

export function VisionSection({ lang = 'de' }: { lang?: VisionLang }) {
  const copy = VISION_COPY[lang];
  const features = lang === 'en' ? FEATURES_EN : FEATURES_DE;

  return (
    <section className="w-full bg-black py-12" aria-labelledby="vision-heading">
      <div className="mx-auto max-w-3xl px-6 text-left lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-400">
          {copy.eyebrow}
        </p>
        <h2
          id="vision-heading"
          className="mb-6 text-2xl font-bold text-white md:text-3xl"
        >
          {copy.heading}
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-white/70">
          {copy.intro}
        </p>
        <ul className="space-y-5">
          {features.map(({ title, description, icon: Icon }) => (
            <li key={title} className="flex gap-3">
              <span className="flex h-5 w-5 flex-shrink-0 text-yellow-400" aria-hidden>
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type TrustFeature = {
  title: string;
  description: string;
  icon: 'people' | 'phone' | 'euro' | 'laptop';
};

type TrustLang = 'de' | 'en';

const FEATURES_DE: TrustFeature[] = [
  {
    title: 'Individuelle Beratung',
    description:
      'Wir nehmen uns Zeit, Ihre Situation zu verstehen – so entsteht ein Versicherungsschutz, der wirklich zu Ihrem Leben passt.',
    icon: 'people'
  },
  {
    title: 'Schnelle Hilfe im Schadenfall',
    description:
      'Im Ernstfall zählt jede Minute. Unser Team reagiert schnell, klar und zuverlässig, damit Sie rasch wieder handlungsfähig sind.',
    icon: 'phone'
  },
  {
    title: 'Transparente Preise',
    description:
      'Keine versteckten Gebühren, keine bösen Überraschungen. Sie wissen jederzeit, wofür Sie zahlen.',
    icon: 'euro'
  },
  {
    title: 'Moderne digitale Lösungen',
    description:
      'Verwalten Sie Ihre Verträge bequem online – sicher, strukturiert und jederzeit verfügbar.',
    icon: 'laptop'
  }
];

const FEATURES_EN: TrustFeature[] = [
  {
    title: 'Personal advice',
    description:
      'We take the time to understand your situation – so your cover truly fits your life.',
    icon: 'people'
  },
  {
    title: 'Fast help when it matters',
    description:
      'In a claim, every minute counts. Our team responds quickly and clearly so you can act again soon.',
    icon: 'phone'
  },
  {
    title: 'Transparent pricing',
    description:
      'No hidden fees, no surprises. You always know exactly what you are paying for.',
    icon: 'euro'
  },
  {
    title: 'Modern digital tools',
    description:
      'Manage your policies conveniently online – secure, structured, and available at any time.',
    icon: 'laptop'
  }
];

const TRUST_COPY = {
  de: {
    eyebrow: 'Warum SABR?',
    heading: 'Vertrauen, das Sicherheit schafft.',
    body: [
      'Bei SABR verstehen wir, dass Versicherung mehr bedeutet als nur Papierkram. Es geht um Vertrauen, Schutz und Klarheit im entscheidenden Moment.',
      'Unsere Mission ist es, Ihnen den bestmöglichen Service zu bieten – transparent, fair und persönlich.'
    ].join(' '),
    bullets: [
      'Persönliche Beratung durch erfahrene Experten',
      'Schnelle und einfache Schadenabwicklung',
      'Individuell zugeschnittene Versicherungslösungen',
      'Transparente Preise ohne versteckte Kosten',
      'Rundum-Schutz für Familie, Beruf und Freizeit',
      'Digitale Services für bequeme Verwaltung'
    ]
  },
  en: {
    eyebrow: 'Why SABR?',
    heading: 'Trust that creates security.',
    body: [
      'At SABR we know insurance is more than paperwork. It is about trust, protection, and clarity in the moments that matter.',
      'Our mission is to give you the best possible service – transparent, fair, and genuinely personal.'
    ].join(' '),
    bullets: [
      'Personal advice from experienced experts',
      'Fast, straightforward claims support',
      'Insurance solutions tailored to your life',
      'Transparent pricing with no hidden costs',
      'Comprehensive cover for family, work, and leisure',
      'Digital services for simple, convenient management'
    ]
  }
} satisfies Record<TrustLang, {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
}>;

function FeatureIcon({ type }: { type: TrustFeature['icon'] }) {
  const baseClasses = 'h-8 w-8 text-[#f0cc69]';

  switch (type) {
    case 'people':
      return (
        <svg
          className={baseClasses}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm6 0a3 3 0 1 0-3-3" />
          <path d="M3 20.25a5 5 0 0 1 8.5-3.535M13.5 16.715A5 5 0 0 1 21 20.25" />
        </svg>
      );
    case 'phone':
      return (
        <svg
          className={baseClasses}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 3.75h8A1.75 1.75 0 0 1 17.75 5.5v13A1.75 1.75 0 0 1 16 20.25H8A1.75 1.75 0 0 1 6.25 18.5v-13A1.75 1.75 0 0 1 8 3.75Z" />
          <path d="M10 6.25h4M12 17.25h.01" />
        </svg>
      );
    case 'euro':
      return (
        <svg
          className={baseClasses}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16.5 6.25A5.75 5.75 0 0 0 7.9 9M7.5 12h6M7.9 15A5.75 5.75 0 0 0 16.5 17.75" />
          <path d="M6.75 8.5h-2M6.75 15.5h-2" />
        </svg>
      );
    case 'laptop':
      return (
        <svg
          className={baseClasses}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 6.75h10A1.75 1.75 0 0 1 18.75 8.5v7.75H5.25V8.5A1.75 1.75 0 0 1 7 6.75Z" />
          <path d="M4 18.25h16" />
        </svg>
      );
    default:
      return null;
  }
}

export function TrustSection({ lang = 'de' }: { lang?: TrustLang }) {
  const features = lang === 'en' ? FEATURES_EN : FEATURES_DE;
  const copy = TRUST_COPY[lang];

  return (
    <section
      className="relative w-full min-h-[400px] overflow-hidden py-14 sm:py-16"
      aria-labelledby="trust-heading"
    >
      {/* Background video — GPU layer to prevent shake on scroll */}
      <div className="pointer-events-none absolute inset-0 [transform:translateZ(0)] [backface-visibility:hidden]">
        <video
          src="/bgvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover [transform:translateZ(0)]"
          aria-hidden="true"
        />
        {/* Dark gradient overlay to blend video into black background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12 lg:items-center justify-items-stretch lg:justify-items-center">
          {/* Left: feature cards */}
          <div className="grid w-full gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex h-full flex-col border border-[#f0cc69]/60 bg-black/80 p-5 shadow-lg shadow-black/40 transition-transform transition-shadow hover:-translate-y-1 hover:shadow-xl"
              >
                <FeatureIcon type={feature.icon} />
                <h3 className="mt-3 text-sm font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-200">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          {/* Right: trust copy */}
          <div className="space-y-5 text-left text-white lg:pl-4 lg:text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0cc69]">
              {copy.eyebrow}
            </p>
            <h2
              id="trust-heading"
              className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.5rem]"
            >
              {copy.heading}
            </h2>
            <p className="max-w-xl text-sm text-slate-200 sm:text-base">
              {copy.body}
            </p>

            <ul className="space-y-1.5 text-sm text-slate-100">
              {copy.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f0cc69]/20"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3 w-3 text-[#f0cc69]"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 8.5 6.5 12 13 4" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


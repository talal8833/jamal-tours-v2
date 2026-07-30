type Section = { heading: string; body: string[] };

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  lastUpdated: string;
  sections: Section[];
};

// Shared presentation for the static legal pages (Privacy, Terms). Pure server
// component — the page supplies already-translated strings, keeping all copy in
// messages/*.json. Same emerald header band as the About/Reviews pages.
export default function LegalPageLayout({
  badge,
  title,
  subtitle,
  intro,
  lastUpdated,
  sections,
}: Props) {
  return (
    <main>
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{title}</h1>
          <p className="mt-4 text-emerald-100 text-lg max-w-2xl">{subtitle}</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-sm text-gray-500">{lastUpdated}</p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">{intro}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import { useRef, useState } from 'react';
import { BriefCard } from './components/BriefCard';
import { BriefGeneratorForm } from './components/BriefGeneratorForm';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { GeneratedBrief } from './components/GeneratedBrief';
import { Header } from './components/Header';
import { MethodologySection } from './components/MethodologySection';
import { SampleBriefCard } from './components/SampleBriefCard';
import { SourceReliabilityGuide } from './components/SourceReliabilityGuide';
import { sampleBriefs } from './data/sampleBriefs';
import { sourceCategories } from './data/sourceCategories';
import type { Brief, BriefFormValues } from './types';
import { generateBrief } from './utils/generateBrief';

const featureCards = [
  {
    title: 'Structured judgments',
    body: 'Turn broad public questions into BLUFs, key judgments, evidence caveats, and open questions.',
  },
  {
    title: 'Source reliability checks',
    body: 'Separate primary sources, reporting, institutional data, academic work, and weak or unattributed claims.',
  },
  {
    title: 'Uncertainty-aware analysis',
    body: 'Show confidence levels, competing explanations, red flags, and what would change the assessment.',
  },
];

function App() {
  const [activeBrief, setActiveBrief] = useState<Brief | null>(sampleBriefs[0]);
  const briefRef = useRef<HTMLElement | null>(null);

  function openBrief(brief: Brief) {
    setActiveBrief(brief);
    window.setTimeout(() => {
      briefRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }

  function handleGenerate(values: BriefFormValues) {
    openBrief(generateBrief(values));
  }

  return (
    <div className="app-shell">
      <Header />

      <main>
        <section className="hero section" id="home" aria-labelledby="home-heading">
          <div className="hero-copy">
            <p className="eyebrow">Public-source analysis lab</p>
            <h1 id="home-heading">Open Brief Lab</h1>
            <p className="tagline">Public-source intelligence brief generator for students, analysts, and civic researchers.</p>
            <p className="hero-text">
              Build structured analytic briefs from public questions without pretending certainty, access, or authority
              you do not have. The lab teaches disciplined reasoning, source skepticism, and transparent uncertainty.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#generator">Create a Brief</a>
              <a className="button button--secondary" href="#samples">Explore samples</a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Brief structure preview">
            <div className="panel-topline">
              <span>Brief format</span>
              <span>Public / Educational</span>
            </div>
            <ol className="brief-preview">
              <li>BLUF</li>
              <li>Key judgments + confidence</li>
              <li>Timeline + evidence snapshot</li>
              <li>Competing explanations</li>
              <li>Red flags + source reliability</li>
              <li>What would change the assessment?</li>
            </ol>
          </div>
        </section>

        <section className="section feature-strip" aria-label="Core features">
          {featureCards.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h2>{feature.title}</h2>
              <p>{feature.body}</p>
            </article>
          ))}
        </section>

        <section className="section why-section" aria-labelledby="why-heading">
          <div>
            <p className="eyebrow">Why this matters</p>
            <h2 id="why-heading">Good analysis is disciplined reasoning from incomplete evidence.</h2>
          </div>
          <p>
            The strongest public research does not just collect facts. It explains what is known, what is disputed,
            what is missing, and how much confidence the reader should place in the judgment. Open Brief Lab makes
            that structure visible and repeatable.
          </p>
          <DisclaimerBanner />
        </section>

        <section className="section generator-section" id="generator" aria-labelledby="generator-heading">
          <div className="section-heading">
            <p className="eyebrow">Brief generator</p>
            <h2 id="generator-heading">Create a structured public-source brief template.</h2>
            <p>
              The first version is deterministic and template-based. It does not browse, verify facts, or invent
              citations. It gives you a careful analytic frame to fill with verified public sources.
            </p>
          </div>
          <BriefGeneratorForm onGenerate={handleGenerate} />
        </section>

        <section className="section" id="samples" aria-labelledby="samples-heading">
          <div className="section-heading">
            <p className="eyebrow">Sample briefs</p>
            <h2 id="samples-heading">Three public, cautious, non-operational examples.</h2>
            <p>
              These samples show the intended tone: educational, restrained, evidence-aware, and useful for students
              or public researchers.
            </p>
          </div>
          <div className="sample-grid">
            {sampleBriefs.map((brief) => (
              <SampleBriefCard
                key={brief.id}
                brief={brief}
                isActive={activeBrief?.id === brief.id}
                onOpen={openBrief}
              />
            ))}
          </div>
        </section>

        <section className="section workspace" aria-label="Active brief workspace" ref={briefRef}>
          <div className="brief-sidebar no-print">
            <p className="eyebrow">Brief library</p>
            <h2>Open a sample or generate your own.</h2>
            <div className="brief-card-list">
              {sampleBriefs.map((brief) => (
                <BriefCard key={brief.id} brief={brief} isActive={activeBrief?.id === brief.id} onSelect={openBrief} />
              ))}
            </div>
          </div>
          <div className="brief-workspace">
            {activeBrief ? (
              <GeneratedBrief brief={activeBrief} />
            ) : (
              <EmptyState
                title="No brief selected"
                message="Generate a brief or open one of the sample dossiers to begin."
              />
            )}
          </div>
        </section>

        <MethodologySection />
        <SourceReliabilityGuide categories={sourceCategories} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

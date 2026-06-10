import type { Brief } from '../types';
import { ConfidenceBadge } from './ConfidenceBadge';
import { PrintButton } from './PrintButton';
import { RedFlagList } from './RedFlagList';
import { SourceChecklist } from './SourceChecklist';
import { Timeline } from './Timeline';

interface GeneratedBriefProps {
  brief: Brief;
}

function BulletedSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="brief-section">
      <h3>{title}</h3>
      <ul className="brief-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function GeneratedBrief({ brief }: GeneratedBriefProps) {
  return (
    <article className="generated-brief" aria-labelledby="brief-title">
      <div className="brief-toolbar no-print">
        <p className="eyebrow">Structured analytic brief</p>
        <PrintButton />
      </div>

      <header className="brief-header">
        <p className="brief-domain">{brief.domain}</p>
        <h2 id="brief-title">{brief.title}</h2>
        <div className="bluf-box">
          <h3>BLUF — Bottom Line Up Front</h3>
          <p>{brief.bluf}</p>
        </div>
      </header>

      <section className="brief-section">
        <h3>Key Judgments</h3>
        <div className="judgment-grid">
          {brief.keyJudgments.map((judgment, index) => (
            <article className="judgment-card" key={judgment.statement}>
              <div className="judgment-card__topline">
                <span>Judgment {index + 1}</span>
                <ConfidenceBadge level={judgment.confidence} />
              </div>
              <h4>{judgment.statement}</h4>
              <p><strong>Reasoning:</strong> {judgment.reasoning}</p>
              <p><strong>Caveat:</strong> {judgment.caveat}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brief-section">
        <h3>Timeline of Relevant Events</h3>
        <Timeline events={brief.timeline} />
      </section>

      <section className="brief-section">
        <h3>Evidence Snapshot</h3>
        <div className="evidence-grid">
          <BulletedSection title="Strong indicators" items={brief.evidence.strong} />
          <BulletedSection title="Mixed indicators" items={brief.evidence.mixed} />
          <BulletedSection title="Weak or disputed indicators" items={brief.evidence.weak} />
          <BulletedSection title="Missing information" items={brief.evidence.missing} />
        </div>
      </section>

      <BulletedSection title="Competing Explanations" items={brief.competingExplanations} />

      <section className="brief-section">
        <h3>Source Reliability Checklist</h3>
        <SourceChecklist items={brief.sourceChecklist} />
      </section>

      <section className="brief-section">
        <h3>Red Flags / Weak Evidence Warnings</h3>
        <RedFlagList items={brief.redFlags} />
      </section>

      <BulletedSection title="What Would Change This Assessment?" items={brief.changeAssessment} />
      <BulletedSection title="Open Questions" items={brief.openQuestions} />
      <BulletedSection title="Suggested Next Sources to Check" items={brief.nextSources} />
    </article>
  );
}

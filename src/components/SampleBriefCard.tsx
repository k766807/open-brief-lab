import type { Brief } from '../types';

interface SampleBriefCardProps {
  brief: Brief;
  isActive: boolean;
  onOpen: (brief: Brief) => void;
}

export function SampleBriefCard({ brief, isActive, onOpen }: SampleBriefCardProps) {
  return (
    <article className={isActive ? 'sample-card sample-card--active' : 'sample-card'}>
      <p className="eyebrow">{brief.domain} sample</p>
      <h3>{brief.title}</h3>
      <p>{brief.bluf}</p>
      <button className="button button--ghost" type="button" onClick={() => onOpen(brief)}>
        Open sample brief
      </button>
    </article>
  );
}

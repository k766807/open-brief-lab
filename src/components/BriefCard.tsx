import type { Brief } from '../types';
import { ConfidenceBadge } from './ConfidenceBadge';

interface BriefCardProps {
  brief: Brief;
  isActive: boolean;
  onSelect: (brief: Brief) => void;
}

export function BriefCard({ brief, isActive, onSelect }: BriefCardProps) {
  const topConfidence = brief.keyJudgments[0]?.confidence ?? 'Moderate';

  return (
    <button
      className={isActive ? 'brief-card brief-card--active' : 'brief-card'}
      type="button"
      onClick={() => onSelect(brief)}
      aria-pressed={isActive}
    >
      <span className="brief-card__domain">{brief.domain}</span>
      <h3>{brief.title}</h3>
      <p>{brief.bluf}</p>
      <ConfidenceBadge level={topConfidence} />
    </button>
  );
}

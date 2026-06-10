import type { Confidence } from '../types';

interface ConfidenceBadgeProps {
  level: Confidence;
}

export function ConfidenceBadge({ level }: ConfidenceBadgeProps) {
  return (
    <span className={`confidence confidence--${level.toLowerCase()}`} aria-label={`${level} confidence`}>
      {level} confidence
    </span>
  );
}

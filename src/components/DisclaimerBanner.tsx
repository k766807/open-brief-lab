interface DisclaimerBannerProps {
  compact?: boolean;
}

export function DisclaimerBanner({ compact = false }: DisclaimerBannerProps) {
  return (
    <aside className={compact ? 'disclaimer disclaimer--compact' : 'disclaimer'} aria-label="Project disclaimer">
      <strong>Public information only.</strong>{' '}
      Open Brief Lab uses public information and educational templates only. It is not affiliated with the CIA,
      any intelligence agency, or any government organization. It does not use classified, private, or restricted
      information.
    </aside>
  );
}

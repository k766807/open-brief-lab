interface EmptyStateProps {
  title: string;
  message: string;
}

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <p className="eyebrow">Awaiting input</p>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

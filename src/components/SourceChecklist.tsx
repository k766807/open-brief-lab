interface SourceChecklistProps {
  items: string[];
}

export function SourceChecklist({ items }: SourceChecklistProps) {
  return (
    <ul className="checklist" aria-label="Source reliability checklist">
      {items.map((item) => (
        <li key={item}>
          <span className="check-box" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

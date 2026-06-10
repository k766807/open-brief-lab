interface RedFlagListProps {
  items: string[];
}

export function RedFlagList({ items }: RedFlagListProps) {
  return (
    <ul className="red-flags" aria-label="Weak evidence and overclaiming red flags">
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">!</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

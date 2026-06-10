import type { TimelineEvent } from '../types';

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <ol className="timeline" aria-label="Timeline of relevant events">
      {events.map((item) => (
        <li className="timeline-item" key={`${item.date}-${item.event}`}>
          <div className="timeline-date">{item.date}</div>
          <div>
            <h4>{item.event}</h4>
            <p>{item.significance}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

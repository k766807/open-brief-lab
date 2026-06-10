import type { SourceCategory } from '../types';

interface SourceReliabilityGuideProps {
  categories: SourceCategory[];
}

export function SourceReliabilityGuide({ categories }: SourceReliabilityGuideProps) {
  return (
    <section className="section" id="sources" aria-labelledby="sources-heading">
      <div className="section-heading">
        <p className="eyebrow">Source reliability guide</p>
        <h2 id="sources-heading">Public research gets stronger when sources are labeled before they are believed.</h2>
        <p>
          Use this guide to compare source types, identify warning signs, and avoid treating every claim as equally
          reliable. A source can be useful and still limited.
        </p>
      </div>
      <div className="source-grid">
        {categories.map((category) => (
          <article className="source-card" key={category.name}>
            <h3>{category.name}</h3>
            <dl>
              <div>
                <dt>Strengths</dt>
                <dd>{category.strengths}</dd>
              </div>
              <div>
                <dt>Weaknesses</dt>
                <dd>{category.weaknesses}</dd>
              </div>
              <div>
                <dt>Best use</dt>
                <dd>{category.bestUse}</dd>
              </div>
              <div>
                <dt>Warning signs</dt>
                <dd>{category.warningSigns}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

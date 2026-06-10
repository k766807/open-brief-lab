export function MethodologySection() {
  const methods = [
    {
      title: 'BLUF writing',
      body: 'Start with the bottom line, but keep it qualified. A useful BLUF tells the reader what the current assessment is and where uncertainty remains.',
    },
    {
      title: 'Key judgments',
      body: 'Judgments are reasoned assessments, not raw facts. Each judgment should explain its logic, confidence level, and evidence caveat.',
    },
    {
      title: 'Confidence levels',
      body: 'Confidence reflects evidence quality, corroboration, source reliability, and how much important information is still missing.',
    },
    {
      title: 'Competing hypotheses',
      body: 'Good analysis tests more than one explanation. If only one explanation is considered, the assessment is probably too narrow.',
    },
    {
      title: 'Evidence gaps',
      body: 'Missing information is not a failure. It is part of the product and should be made visible to the reader.',
    },
    {
      title: 'Uncertainty language',
      body: 'Use careful terms like likely, plausible, unclear, disputed, and insufficient evidence instead of pretending the question is more settled than it is.',
    },
    {
      title: 'Avoiding overclaiming',
      body: 'Do not turn correlation into causation, early reporting into certainty, or one source into a final conclusion.',
    },
    {
      title: 'Facts, interpretations, assumptions',
      body: 'Facts describe what is known. Interpretations explain what it may mean. Assumptions state what the analysis is relying on but cannot yet prove.',
    },
  ];

  return (
    <section className="section" id="methodology" aria-labelledby="methodology-heading">
      <div className="section-heading">
        <p className="eyebrow">Methodology</p>
        <h2 id="methodology-heading">
          Good analysis is not about sounding certain. It is about showing how you reached a judgment,
          what could weaken it, and what evidence is still missing.
        </h2>
        <p>
          Open Brief Lab teaches a repeatable public-source analysis structure: define the question, separate
          facts from interpretation, assign confidence carefully, compare explanations, and state what would
          change the assessment.
        </p>
      </div>
      <div className="method-grid">
        {methods.map((method) => (
          <article className="method-card" key={method.title}>
            <h3>{method.title}</h3>
            <p>{method.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

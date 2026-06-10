import type { Brief, BriefFormValues, Confidence } from '../types';

const baseSourceChecklist = [
  'Is the source primary, secondary, or tertiary?',
  'Is the author or institution identifiable?',
  'Is the publication date clear?',
  'Does the source cite evidence or provide methods?',
  'Is there corroboration from another credible source type?',
  'Is the source trying to persuade, inform, sell, entertain, or mobilize?',
  'Are there conflicting accounts that should be compared?',
  'Is any major claim based on one source only?',
];

const baseRedFlags = [
  'Single-cause explanation',
  'Overconfident language',
  'Missing dates or unclear chronology',
  'Anonymous source dependence',
  'Lack of corroboration',
  'Emotionally loaded framing',
  'Unclear definitions',
  'Correlation treated as causation',
];

const confidenceByStyle: Record<BriefFormValues['confidenceStyle'], Confidence[]> = {
  cautious: ['Low', 'Moderate', 'Moderate'],
  balanced: ['Moderate', 'Moderate', 'High'],
  'assertive but qualified': ['Moderate', 'High', 'Moderate'],
};

const domainLens: Record<BriefFormValues['domain'], string> = {
  Historical: 'historical context, chronology, actors, institutions, and long-term causes',
  Geopolitical: 'state capacity, institutional legitimacy, regional pressures, and external actors',
  Technology: 'technical capability, adoption incentives, governance gaps, and public impact',
  'Civic / Policy': 'public institutions, legal constraints, stakeholders, tradeoffs, and implementation capacity',
  'Crisis / Conflict': 'trigger events, escalation pathways, affected populations, and response capacity',
};

function cleanTopic(topic: string) {
  const trimmed = topic.trim();
  return trimmed.length > 0 ? trimmed : 'Untitled public-source question';
}

export function generateBrief(values: BriefFormValues): Brief {
  const topic = cleanTopic(values.topic);
  const confidence = confidenceByStyle[values.confidenceStyle];
  const lens = domainLens[values.domain];
  const title = `${topic} — Public-Source Analytic Brief`;

  return {
    id: `generated-${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'brief'}`,
    title,
    domain: values.domain,
    bluf:
      `This template brief frames “${topic}” as a ${values.domain.toLowerCase()} question for a ${values.audience.toLowerCase()} audience. The preliminary assessment should remain qualified until the user adds verified sources, dates, and corroborating evidence. The strongest early approach is to map the main actors, timeline, evidence quality, competing explanations, and information gaps before making a confident conclusion.`,
    keyJudgments: [
      {
        statement: `A responsible assessment of “${topic}” should begin by defining the question and separating confirmed facts from interpretation.`,
        confidence: confidence[0],
        reasoning:
          `The selected domain points toward ${lens}. Clear definitions reduce the risk of vague conclusions or hidden assumptions.`,
        caveat:
          'This generated brief does not verify facts automatically; the user must add public sources and check claims before treating the assessment as substantive.',
      },
      {
        statement: 'Confidence should increase only when claims are corroborated across multiple credible source types.',
        confidence: confidence[1],
        reasoning:
          'Public analysis is stronger when primary evidence, reputable reporting, institutional data, and expert interpretation are compared rather than blended together without source labels.',
        caveat:
          'Some questions may have limited public evidence, conflicting accounts, or fast-changing information that lowers confidence.',
      },
      {
        statement: 'Competing explanations should be preserved until evidence clearly favors one interpretation.',
        confidence: confidence[2],
        reasoning:
          'Single-cause explanations are often attractive but weak. A structured brief should test alternative explanations and state what evidence would change the assessment.',
        caveat:
          'The best explanation may change as new sources, dates, or actor statements are added.',
      },
    ],
    timeline: [
      {
        date: 'Research baseline',
        event: 'Define the scope, geography, actors, and time period.',
        significance: 'Prevents the brief from mixing unrelated events or making claims outside the evidence base.',
      },
      {
        date: 'Evidence collection',
        event: 'Gather primary, secondary, institutional, and reputable news sources.',
        significance: 'Creates a source base that can be compared for corroboration and disagreement.',
      },
      {
        date: 'Analytic review',
        event: 'Identify patterns, gaps, alternative explanations, and confidence levels.',
        significance: 'Turns raw information into a structured assessment without pretending uncertainty is gone.',
      },
      {
        date: values.timeHorizon,
        event: 'Update the brief as new public evidence appears.',
        significance: 'Keeps the assessment flexible and transparent about what could change.',
      },
    ],
    evidence: {
      strong: [
        'Claims supported by traceable primary documents, official data, or multiple independent credible sources.',
        'Events with clear dates, named actors, and corroboration across source types.',
      ],
      mixed: [
        'Claims where credible sources disagree on interpretation, motive, scale, or significance.',
        'Indicators that may support more than one explanation.',
      ],
      weak: [
        'Anonymous claims, screenshots, context-free clips, unsourced summaries, or emotionally framed assertions.',
        'Arguments that rely on one dramatic event while ignoring broader chronology.',
      ],
      missing: [
        'A verified timeline with dates and source links.',
        'Clear distinction between confirmed facts, plausible interpretations, and assumptions.',
        'Evidence that would disconfirm the preferred explanation.',
      ],
    },
    competingExplanations: [
      `Structural explanation: underlying institutions, incentives, or long-term pressures shaped “${topic}.”`,
      `Actor-driven explanation: decisions by specific leaders, groups, organizations, or communities were decisive.`,
      `Trigger-event explanation: a recent or visible event accelerated dynamics that were already present.`,
      `Information-gap explanation: current public evidence may be too incomplete to support a strong conclusion.`,
    ],
    sourceChecklist: baseSourceChecklist,
    redFlags: baseRedFlags,
    changeAssessment: [
      'New primary evidence that contradicts the current timeline.',
      'Independent corroboration that strengthens or weakens a major claim.',
      'Reliable data showing the scale, timing, or affected population is different than first reported.',
      'A credible alternative explanation that better accounts for the known evidence.',
    ],
    openQuestions: [
      'What exactly is being assessed, and what is outside the scope?',
      'Which claims are confirmed, interpreted, disputed, or still unknown?',
      'Which sources are strongest, and which require corroboration?',
      'What would a skeptical reviewer challenge first?',
    ],
    nextSources: [
      'Primary documents, official records, laws, speeches, datasets, or direct statements.',
      'Reputable news coverage with clear dates and corrections history.',
      'Academic, institutional, or expert analysis that explains method and evidence.',
      'Sources representing more than one interpretation or stakeholder position.',
    ],
  };
}

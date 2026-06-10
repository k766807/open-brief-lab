import type { SourceCategory } from '../types';

export const sourceCategories: SourceCategory[] = [
  {
    name: 'Primary source',
    strengths: 'Closest to the event, decision, speech, law, dataset, or artifact being studied.',
    weaknesses: 'Can be incomplete, biased, self-protective, propagandistic, or difficult to interpret without context.',
    bestUse: 'Establish what was said, recorded, ordered, observed, or produced at the time.',
    warningSigns: 'No date, unclear origin, missing context, selective excerpting, or unverifiable reproduction.',
  },
  {
    name: 'Secondary source',
    strengths: 'Interprets events with context and may compare multiple primary sources.',
    weaknesses: 'May inherit earlier assumptions, simplify debate, or reflect the author’s framework.',
    bestUse: 'Understand causes, consequences, scholarly debate, and competing interpretations.',
    warningSigns: 'No citations, one-sided interpretation, outdated scholarship, or excessive certainty.',
  },
  {
    name: 'Academic source',
    strengths: 'Usually evidence-rich, methodologically explicit, and peer reviewed or expert reviewed.',
    weaknesses: 'Can be narrow, technical, paywalled, slow to update, or debated by other specialists.',
    bestUse: 'Build careful background understanding and identify evidence standards.',
    warningSigns: 'Overgeneralizing from one study, ignoring publication date, or treating one article as consensus.',
  },
  {
    name: 'News source',
    strengths: 'Useful for recent events, named actors, timelines, and public statements.',
    weaknesses: 'Early reporting can change; framing, speed, access, and editorial angle matter.',
    bestUse: 'Track chronology and compare accounts across reputable outlets.',
    warningSigns: 'Anonymous sourcing without corroboration, sensational headlines, unclear updates, or opinion presented as reporting.',
  },
  {
    name: 'Government/public institution source',
    strengths: 'Often authoritative for laws, official data, public guidance, budgets, and institutional positions.',
    weaknesses: 'May omit damaging context, use bureaucratic language, or frame events in institutional self-interest.',
    bestUse: 'Verify official procedures, public records, statistics, and formal statements.',
    warningSigns: 'No methodology, missing raw data, political messaging, or unexplained revisions.',
  },
  {
    name: 'NGO/think tank source',
    strengths: 'Can provide specialized expertise, field reporting, policy analysis, and issue tracking.',
    weaknesses: 'May have funder priorities, advocacy goals, or regional access limitations.',
    bestUse: 'Compare expert analysis and identify indicators, risks, and policy debates.',
    warningSigns: 'Unclear funding, unsupported rankings, advocacy claims without evidence, or missing methodology.',
  },
  {
    name: 'Social media source',
    strengths: 'Can surface real-time claims, local perspectives, images, videos, and public reactions.',
    weaknesses: 'High risk of misattribution, manipulation, missing context, and emotional amplification.',
    bestUse: 'Treat as a lead requiring verification, not as a standalone basis for judgment.',
    warningSigns: 'No original source, cropped media, unverifiable account, engagement bait, or urgent calls to act.',
  },
  {
    name: 'Anonymous or unattributed source',
    strengths: 'May point toward information that cannot yet be publicly attached to a named source.',
    weaknesses: 'Low accountability and high risk of rumor, laundering, or motivated claims.',
    bestUse: 'Use only as a tentative lead until corroborated by stronger evidence.',
    warningSigns: 'No corroboration, vague authority claims, impossible-to-check details, or pressure to accept the claim quickly.',
  },
];

export type Domain = 'Historical' | 'Geopolitical' | 'Technology' | 'Civic / Policy' | 'Crisis / Conflict';
export type TimeHorizon = 'Past' | 'Current' | 'Near-term' | 'Long-term';
export type Audience = 'Student' | 'Teacher' | 'Analyst' | 'General public';
export type ConfidenceStyle = 'cautious' | 'balanced' | 'assertive but qualified';
export type Confidence = 'Low' | 'Moderate' | 'High';

export interface BriefFormValues {
  topic: string;
  domain: Domain;
  timeHorizon: TimeHorizon;
  audience: Audience;
  confidenceStyle: ConfidenceStyle;
}

export interface KeyJudgment {
  statement: string;
  confidence: Confidence;
  reasoning: string;
  caveat: string;
}

export interface TimelineEvent {
  date: string;
  event: string;
  significance: string;
}

export interface EvidenceSnapshot {
  strong: string[];
  mixed: string[];
  weak: string[];
  missing: string[];
}

export interface Brief {
  id: string;
  title: string;
  domain: Domain;
  bluf: string;
  keyJudgments: KeyJudgment[];
  timeline: TimelineEvent[];
  evidence: EvidenceSnapshot;
  competingExplanations: string[];
  sourceChecklist: string[];
  redFlags: string[];
  changeAssessment: string[];
  openQuestions: string[];
  nextSources: string[];
}

export interface SourceCategory {
  name: string;
  strengths: string;
  weaknesses: string;
  bestUse: string;
  warningSigns: string;
}

import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { Audience, BriefFormValues, ConfidenceStyle, Domain, TimeHorizon } from '../types';

const domains: Domain[] = ['Historical', 'Geopolitical', 'Technology', 'Civic / Policy', 'Crisis / Conflict'];
const horizons: TimeHorizon[] = ['Past', 'Current', 'Near-term', 'Long-term'];
const audiences: Audience[] = ['Student', 'Teacher', 'Analyst', 'General public'];
const confidenceStyles: ConfidenceStyle[] = ['cautious', 'balanced', 'assertive but qualified'];

const initialValues: BriefFormValues = {
  topic: '',
  domain: 'Historical',
  timeHorizon: 'Past',
  audience: 'Student',
  confidenceStyle: 'balanced',
};

interface BriefGeneratorFormProps {
  onGenerate: (values: BriefFormValues) => void;
}

export function BriefGeneratorForm({ onGenerate }: BriefGeneratorFormProps) {
  const [values, setValues] = useState<BriefFormValues>(initialValues);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onGenerate(values);
  }

  return (
    <form className="generator-form" onSubmit={handleSubmit}>
      <div className="form-field form-field--wide">
        <label htmlFor="topic">Public topic, crisis, event, or question</label>
        <input
          id="topic"
          name="topic"
          type="text"
          value={values.topic}
          onChange={handleChange}
          placeholder="Example: Why did the Roman Republic become unstable?"
          aria-describedby="topic-help"
        />
        <small id="topic-help">Use public, educational topics only. The app generates a structure, not verified facts.</small>
      </div>

      <div className="form-field">
        <label htmlFor="domain">Domain</label>
        <select id="domain" name="domain" value={values.domain} onChange={handleChange}>
          {domains.map((domain) => (
            <option key={domain} value={domain}>{domain}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="timeHorizon">Time horizon</label>
        <select id="timeHorizon" name="timeHorizon" value={values.timeHorizon} onChange={handleChange}>
          {horizons.map((horizon) => (
            <option key={horizon} value={horizon}>{horizon}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="audience">Audience</label>
        <select id="audience" name="audience" value={values.audience} onChange={handleChange}>
          {audiences.map((audience) => (
            <option key={audience} value={audience}>{audience}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="confidenceStyle">Confidence style</label>
        <select
          id="confidenceStyle"
          name="confidenceStyle"
          value={values.confidenceStyle}
          onChange={handleChange}
        >
          {confidenceStyles.map((style) => (
            <option key={style} value={style}>{style}</option>
          ))}
        </select>
      </div>

      <button className="button button--primary form-field--wide" type="submit">
        Generate structured brief
      </button>
    </form>
  );
}

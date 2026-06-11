# Open Brief Lab

**Public-source intelligence brief generator for students, analysts, and civic researchers.**

> Live demo target: `https://k766807.github.io/open-brief-lab/`
>
> Screenshot: _Add a homepage screenshot after the first deploy._

Open Brief Lab is a React + Vite + TypeScript web app that turns a public topic, crisis, historical question, civic issue, or technology concern into a structured analytic brief. It is designed as an educational public-source analysis lab: careful, objective, uncertainty-aware, and transparent about evidence limits.

## Disclaimer

Open Brief Lab uses public information and educational templates only. It is not affiliated with the CIA, any intelligence agency, or any government organization. It does not use classified, private, or restricted information.

## Why this project matters

Good analysis is not about sounding certain. It is about explaining how a judgment was reached, what evidence supports it, what could weaken it, and what remains unknown. Open Brief Lab helps students and public researchers practice that discipline by separating facts, interpretations, assumptions, confidence levels, and evidence gaps.

## Features

- Deterministic brief generator with no backend and no paid API
- BLUF: Bottom Line Up Front section
- Key judgments with confidence levels
- Evidence snapshot divided into strong, mixed, weak, and missing indicators
- Timeline builder for relevant events
- Competing explanations to discourage single-cause thinking
- Source reliability checklist for public research
- Red flags for overclaiming, weak evidence, emotional framing, and missing dates
- “What would change this assessment?” section
- Three polished sample briefs: historical, geopolitical, and technology-related
- Methodology and source reliability pages
- Print-friendly brief layout
- Accessible, responsive dark archive UI

## Sample use cases

- A history student drafts a responsible cause-and-effect brief.
- A teacher demonstrates source reliability checks in class.
- A civic researcher structures a public policy question without overclaiming.
- A journalism student compares competing explanations before writing.
- A portfolio reviewer evaluates product thinking, UX discipline, and ethical boundaries.

## Methodology

Open Brief Lab uses a structured public-analysis framework:

1. **Define the question.** A clear question prevents vague conclusions.
2. **Write the BLUF.** The bottom line appears first, but remains qualified.
3. **Separate judgments from facts.** Judgments are reasoned assessments, not raw evidence.
4. **Assign confidence.** Confidence reflects evidence quality, corroboration, and uncertainty.
5. **Compare explanations.** More than one explanation should be considered.
6. **Flag evidence gaps.** Missing information is part of the assessment, not an embarrassment.
7. **State what would change the assessment.** Good analysis remains updateable.

## Tech stack

- React
- Vite
- TypeScript
- CSS custom properties and global styles
- Static local sample data
- No backend
- No private data collection

## Ethical boundaries

This project does not:

- claim government affiliation
- claim access to classified information
- produce targeting profiles of private individuals
- assist surveillance, harassment, hacking, or evasion
- encourage political manipulation
- fabricate sources or citations
- present speculation as fact
- pretend template output is verified intelligence

This project does:

- encourage source verification
- mark uncertainty
- separate judgments from facts
- teach responsible public analysis
- keep the tone objective and educational

## Future roadmap

- Citation manager
- User-added source cards
- PDF export
- Side-by-side competing hypotheses
- Confidence calibration training
- Teacher mode
- Classroom worksheets
- Public dataset integrations
- Multilingual brief templates
- Historical case study library

## Installation

```bash
git clone https://github.com/k766807/open-brief-lab.git
cd open-brief-lab
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deployment

This repo includes a GitHub Pages workflow at `.github/workflows/deploy.yml`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** if it is not already enabled. The expected public URL is:

```text
https://k766807.github.io/open-brief-lab/
```

## Project structure

```text
open-brief-lab/
├── index.html
├── package.json
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── types.ts
│   ├── components/
│   ├── data/
│   └── utils/
└── README.md
```

## Portfolio note

Open Brief Lab is built to demonstrate more than frontend skills. It shows product judgment, ethical restraint, accessibility awareness, analytic writing discipline, and the ability to turn a serious research workflow into a usable educational tool.

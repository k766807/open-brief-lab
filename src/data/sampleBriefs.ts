import type { Brief } from '../types';

export const sampleBriefs: Brief[] = [
  {
    id: 'roman-republic-instability',
    title: 'Why did the Roman Republic become unstable?',
    domain: 'Historical',
    bluf:
      'The Roman Republic became unstable through a long interaction of military expansion, wealth inequality, institutional strain, elite competition, and political violence. No single cause explains the collapse of republican norms; the stronger assessment is that Rome’s institutions struggled to govern an empire they were not originally designed to manage.',
    keyJudgments: [
      {
        statement: 'Expansion increased wealth and military power while also intensifying inequality and competition among elites.',
        confidence: 'High',
        reasoning:
          'Conquest brought land, slaves, tribute, and prestige, but the benefits were unevenly distributed and often strengthened ambitious commanders and aristocratic networks.',
        caveat:
          'The scale and timing of economic effects varied across regions and social classes, so this should not be reduced to a single economic cause.',
      },
      {
        statement: 'Republican norms weakened as political disputes increasingly moved outside ordinary constitutional channels.',
        confidence: 'High',
        reasoning:
          'Episodes of intimidation, veto-breaking, emergency commands, and factional violence suggest that informal restraints became less reliable over time.',
        caveat:
          'Roman politics had always included competition and disorder; the key issue is the cumulative erosion of restraint.',
      },
      {
        statement: 'Personal armies and commander loyalty became a major pressure on civilian institutions.',
        confidence: 'Moderate',
        reasoning:
          'Long campaigns and rewards tied soldiers more closely to successful commanders, increasing the political weight of military leadership.',
        caveat:
          'Military loyalty was not automatic or uniform; political context shaped how far commanders could use military backing.',
      },
    ],
    timeline: [
      {
        date: '146 BCE',
        event: 'Rome destroys Carthage and Corinth.',
        significance: 'Major victories expand Roman dominance and increase the scale of imperial governance problems.',
      },
      {
        date: '133 BCE',
        event: 'Tiberius Gracchus is killed during political conflict.',
        significance: 'Political violence becomes more visible inside elite competition.',
      },
      {
        date: '107 BCE',
        event: 'Marius begins major military and political reforms.',
        significance: 'Military service and commander-soldier relationships become more politically consequential.',
      },
      {
        date: '88 BCE',
        event: 'Sulla marches on Rome.',
        significance: 'The use of an army against the city marks a severe breach of republican norms.',
      },
      {
        date: '49 BCE',
        event: 'Caesar crosses the Rubicon.',
        significance: 'Civil war confirms that elite conflict has overwhelmed ordinary institutional settlement.',
      },
    ],
    evidence: {
      strong: [
        'Repeated civil conflicts and political violence in the late Republic.',
        'Growth of extraordinary commands and personalized military prestige.',
        'Visible conflict over land, citizenship, debt, and elite competition.',
      ],
      mixed: [
        'Economic inequality was important, but its political effects differed by class and period.',
        'Military reforms mattered, but they were part of a wider institutional crisis.',
      ],
      weak: [
        'Claims that one reform or one person alone caused the Republic’s fall.',
        'Simple moral decline explanations without institutional or economic evidence.',
      ],
      missing: [
        'Precise experience of non-elite Romans across different regions.',
        'Full detail on how local Italian communities interpreted Roman political breakdown.',
      ],
    },
    competingExplanations: [
      'Institutional mismatch: city-state republican structures could not manage imperial scale effectively.',
      'Economic conflict: land concentration, debt, and inequality drove escalating political conflict.',
      'Elite ambition: powerful individuals exploited existing tensions for personal advancement.',
    ],
    sourceChecklist: [
      'Compare ancient narrative sources with modern historical interpretation.',
      'Ask whether the source is describing events, moralizing, or defending a political tradition.',
      'Separate later imperial interpretations from late Republican evidence.',
      'Check whether a claim explains one episode or the wider pattern.',
    ],
    redFlags: [
      'Single-cause explanation',
      'Hero-villain framing',
      'Treating ancient sources as neutral transcripts',
      'Ignoring chronology across the second and first centuries BCE',
    ],
    changeAssessment: [
      'New evidence showing more resilient local republican institutions would weaken the institutional mismatch explanation.',
      'Stronger evidence of broad non-elite political alignment behind one faction would change the weight assigned to elite competition.',
    ],
    openQuestions: [
      'Which pressure mattered most: economic inequality, military loyalty, or constitutional strain?',
      'How did ordinary citizens understand the breakdown of elite norms?',
      'Could reform have stabilized the Republic without civil war?',
    ],
    nextSources: [
      'Primary source excerpts from Appian, Plutarch, Sallust, and Cicero.',
      'Modern academic histories of the late Republic.',
      'Maps of Roman expansion and land distribution debates.',
    ],
  },
  {
    id: 'fragile-state-instability',
    title: 'What factors increase instability risk in a fragile state?',
    domain: 'Geopolitical',
    bluf:
      'Instability risk tends to rise when weak institutions, economic stress, contested legitimacy, security fragmentation, and external shocks reinforce each other. The highest-risk situations are usually not defined by one indicator, but by several pressures converging faster than the state can absorb.',
    keyJudgments: [
      {
        statement: 'Institutional legitimacy is a central stabilizing or destabilizing factor.',
        confidence: 'High',
        reasoning:
          'When citizens, elites, or security forces no longer view state decisions as legitimate, disputes are more likely to move outside formal channels.',
        caveat:
          'Legitimacy is difficult to measure directly and may vary by region, identity group, or institution.',
      },
      {
        statement: 'Security fragmentation increases risk when armed actors answer to competing authorities.',
        confidence: 'High',
        reasoning:
          'Multiple armed centers of power can reduce state control, complicate bargaining, and increase the chance that local incidents escalate.',
        caveat:
          'Some states manage semi-formal armed groups temporarily, so fragmentation is a risk indicator rather than a guaranteed outcome.',
      },
      {
        statement: 'Economic shocks are most destabilizing when they interact with preexisting grievances.',
        confidence: 'Moderate',
        reasoning:
          'Inflation, unemployment, food stress, or fiscal crisis can intensify public frustration and elite competition.',
        caveat:
          'Economic stress alone does not predict instability without political and social context.',
      },
    ],
    timeline: [
      {
        date: 'Baseline',
        event: 'Institutional trust and service delivery weaken.',
        significance: 'Public confidence declines and informal networks become more important.',
      },
      {
        date: 'Pressure phase',
        event: 'Economic stress or political dispute intensifies grievances.',
        significance: 'Existing tensions become harder for institutions to manage.',
      },
      {
        date: 'Trigger phase',
        event: 'A contested election, corruption scandal, security incident, or price shock occurs.',
        significance: 'A visible event can coordinate opposition or deepen elite splits.',
      },
      {
        date: 'Escalation phase',
        event: 'Security forces, elites, or regional actors split in response.',
        significance: 'Fragmented authority increases risk of wider instability.',
      },
    ],
    evidence: {
      strong: [
        'Contested legitimacy across major institutions.',
        'Security services divided by faction, region, or patronage network.',
        'Repeated failure to deliver basic services or resolve disputes.',
      ],
      mixed: [
        'Public protest may signal instability, but can also reflect civic resilience.',
        'External support may stabilize institutions or deepen dependency and contestation.',
      ],
      weak: [
        'Predictions based on one dramatic news event.',
        'Claims that poverty alone explains instability.',
      ],
      missing: [
        'Reliable local polling or public sentiment data.',
        'Accurate information about elite bargaining and security-force cohesion.',
      ],
    },
    competingExplanations: [
      'Governance explanation: institutions cannot mediate disputes or deliver services.',
      'Economic explanation: livelihood stress increases grievance and elite competition.',
      'Security explanation: coercive power is divided among rival actors.',
      'External shock explanation: outside pressure or regional conflict overwhelms domestic capacity.',
    ],
    sourceChecklist: [
      'Check whether sources distinguish national trends from regional conditions.',
      'Compare official statements with independent reporting and local civil-society information.',
      'Look for dates, named institutions, and corroboration across source types.',
      'Avoid using one index score as a complete explanation.',
    ],
    redFlags: [
      'Country-wide claims based on capital-city reporting only',
      'No distinction between protest, insurgency, coup risk, and state collapse',
      'Emotionally loaded language without indicators',
      'Ignoring incentives of neighboring states or external patrons',
    ],
    changeAssessment: [
      'Evidence of elite compromise or security-force cohesion would lower near-term instability risk.',
      'Evidence of accelerating inflation, defections, or regional armed mobilization would raise concern.',
    ],
    openQuestions: [
      'Which institutions still retain legitimacy?',
      'Are security forces cohesive under stress?',
      'Are grievances organized nationally or fragmented locally?',
    ],
    nextSources: [
      'Public institution reports and budgets.',
      'Independent news coverage from multiple regions.',
      'Academic or think tank work on state capacity and conflict risk.',
    ],
  },
  {
    id: 'ai-misinformation-election-risk',
    title: 'What are the public risks of AI-generated misinformation during elections?',
    domain: 'Technology',
    bluf:
      'AI-generated misinformation can increase election risk by lowering the cost of producing persuasive false or misleading content, accelerating confusion during fast-moving events, and making authentic evidence easier to dismiss. The risk is highest when synthetic content intersects with low trust, weak media literacy, unclear platform response, and tight timelines for correction.',
    keyJudgments: [
      {
        statement: 'The main public risk is not only false content, but uncertainty about what is authentic.',
        confidence: 'High',
        reasoning:
          'Synthetic media can confuse audiences while also allowing real evidence to be dismissed as fake, weakening shared trust in information.',
        caveat:
          'Impact depends on audience trust, platform distribution, timing, and the speed of correction.',
      },
      {
        statement: 'Late-cycle misinformation is especially difficult to correct.',
        confidence: 'Moderate',
        reasoning:
          'When misleading content appears close to a voting deadline or major event, institutions and journalists may have limited time to verify and respond.',
        caveat:
          'Prepared election officials, media outlets, and platforms can reduce harm through rapid public clarification.',
      },
      {
        statement: 'Public resilience depends on verification habits and trusted information channels.',
        confidence: 'Moderate',
        reasoning:
          'Clear official communication, source checking, and cross-platform corroboration can limit the spread and impact of misleading claims.',
        caveat:
          'Trust varies across communities, and some audiences may reject official corrections.',
      },
    ],
    timeline: [
      {
        date: 'Pre-election period',
        event: 'Campaign narratives and voter concerns intensify.',
        significance: 'Audiences become more receptive to emotionally charged or identity-linked claims.',
      },
      {
        date: 'Campaign peak',
        event: 'Synthetic or misleading content circulates across social platforms.',
        significance: 'Volume and speed can overwhelm casual verification habits.',
      },
      {
        date: 'Voting window',
        event: 'False claims about candidates, procedures, or events may emerge.',
        significance: 'Late corrections may not reach all audiences in time.',
      },
      {
        date: 'Post-election period',
        event: 'Disputed narratives may persist after official results.',
        significance: 'Trust damage can outlast the original false claim.',
      },
    ],
    evidence: {
      strong: [
        'Generative tools reduce the cost and time required to create realistic text, image, audio, or video content.',
        'Elections already operate in high-attention, high-emotion information environments.',
        'Correction speed and source trust strongly shape public interpretation.',
      ],
      mixed: [
        'Synthetic content may go viral, but virality does not automatically mean persuasion.',
        'Detection tools can help, but they are not a complete public resilience strategy.',
      ],
      weak: [
        'Claims that AI misinformation alone can determine an election outcome.',
        'Claims that every surprising image, clip, or quote is synthetic.',
      ],
      missing: [
        'Reliable measurement of persuasion effects across different communities.',
        'Complete visibility into private group chats, recommendation systems, and cross-platform spread.',
      ],
    },
    competingExplanations: [
      'Technology explanation: generative tools increase scale and realism of misleading content.',
      'Trust explanation: misinformation spreads because audiences already distrust institutions or media.',
      'Distribution explanation: platform incentives and influencer networks amplify emotionally charged claims.',
    ],
    sourceChecklist: [
      'Verify whether a claim comes from an official election source, reputable newsroom, or traceable primary evidence.',
      'Check publication time and whether later corrections exist.',
      'Look for corroboration outside the platform where the claim first appeared.',
      'Be cautious with anonymous screenshots, clipped audio, and context-free images.',
    ],
    redFlags: [
      'Urgent instruction without a traceable source',
      'Screenshot-only evidence',
      'No publication date or original context',
      'Claims designed mainly to provoke fear, disgust, or panic',
    ],
    changeAssessment: [
      'Stronger evidence of rapid correction reaching affected audiences would reduce assessed harm.',
      'Evidence of coordinated cross-platform spread close to voting deadlines would increase concern.',
    ],
    openQuestions: [
      'Which communities are most vulnerable to confusion because of low trust or limited access to reliable information?',
      'How quickly can local officials correct false procedural claims?',
      'What kinds of media literacy interventions are practical before a voting deadline?',
    ],
    nextSources: [
      'Official election administration guidance.',
      'Nonpartisan election integrity and media literacy resources.',
      'Platform transparency reports and academic research on misinformation spread.',
    ],
  },
];

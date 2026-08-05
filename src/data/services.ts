import type { ServiceArea } from '@/config/site';

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: 'anxiety' | 'depression' | 'relationship' | 'anger' | 'eating';
  tagline: string;
  overview: string[];
  signs: string[];
  howWeHelp: string[];
  whatToExpect: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'anxiety',
    name: 'Anxiety Counseling',
    short: 'Anxiety',
    icon: 'anxiety',
    tagline: 'Calm the noise. Quiet the worry. Move forward with confidence.',
    overview: [
      'Anxiety shows up as a racing mind, a tight chest, restless nights, or a constant hum of "what if." It can make ordinary tasks feel impossible and rob you of the life you want to live.',
      'Our counselors help you understand what your anxiety is telling you, learn practical tools to dial it down, and rebuild confidence so you can re-engage with the people and roles that matter most.'
    ],
    signs: [
      'Persistent worry or dread that is hard to switch off',
      'Restlessness, irritability, or feeling "on edge"',
      'Trouble sleeping, concentrating, or relaxing',
      'Racing heart, tight chest, stomach issues, or panic',
      'Avoiding places, people, or situations because of fear'
    ],
    howWeHelp: [
      'Identify the patterns, triggers, and roots of your anxiety',
      'Learn evidence-based tools like grounding, breathing, and CBT',
      'Reduce panic and avoidance through paced, supported exposure',
      'Build a personalized "calm kit" for daily life and hard moments',
      'Strengthen sleep, routines, and connection over time'
    ],
    whatToExpect: [
      'A free, judgement-free first conversation to understand what you need.',
      'A care plan that fits your situation and your budget — including our sliding scale.',
      'Sessions in-office, via telehealth, or, for many clients, through our mobile unit.',
      'Before you leave your first session you will have at least one concrete tool to use.'
    ],
    faqs: [
      {
        q: 'I have tried to "just calm down" and it never works. Is counseling actually different?',
        a: 'Yes. Anxiety is not a willpower problem — it is a nervous-system reaction that responds to the right tools and practice. Your counselor will teach you specific skills that work with your body, not against it.'
      },
      {
        q: 'Do you treat panic attacks and OCD-type worries?',
        a: 'We treat generalized anxiety, social anxiety, panic, and worry-related stress. For obsessive-compulsive symptoms we will confirm scope on intake and refer to a specialist if needed so you get the right care.'
      },
      {
        q: 'Can I be seen even if I cannot afford the full fee?',
        a: 'Yes. Renewing Hope Strategies is a 501(c)(3) nonprofit and offers a sliding-scale fee based on income and household size. See our Sliding Scale page to download the application in English or Spanish.'
      }
    ]
  },
  {
    slug: 'depression',
    name: 'Depression Counseling',
    short: 'Depression',
    icon: 'depression',
    tagline: 'When everything feels heavy, you do not have to carry it alone.',
    overview: [
      'Depression can look like sadness, but it can also look like numbness, exhaustion, irritability, or the slow disappearance of the things you used to enjoy. It is not a character flaw and you cannot simply "snap out of it."',
      'Our counselors walk with you to lift the weight at your pace — rebuilding routine, hope, and connection, and addressing the roots of what you are carrying.'
    ],
    signs: [
      'Persistent low mood, emptiness, or hopelessness',
      'Loss of interest in activities you used to enjoy',
      'Fatigue, low motivation, or feeling "slowed down"',
      'Changes in sleep, appetite, or concentration',
      'Thoughts of being a burden, or that others would be better off without you'
    ],
    howWeHelp: [
      'Understand the type and roots of your depression',
      'Restore sleep, movement, and meaningful daily routines',
      'Rebuild connection and reduce isolation at a pace that feels safe',
      'Address unresolved grief, loss, or trauma when you are ready',
      'Create a safety plan and a circle of support you can rely on'
    ],
    whatToExpect: [
      'A warm, judgement-free first session — no pressure to "perform" wellness.',
      'We move at your pace, with concrete, gentle steps each week.',
      'A sliding-scale fee and flexible scheduling so cost is not a barrier.',
      'Honest conversations about safety, with a plan that keeps you protected.'
    ],
    faqs: [
      {
        q: 'What if I am not sure I am "depressed enough" to come in?',
        a: 'You do not have to wait for a crisis. If your mood, energy, or motivation has been off and it is affecting your life, you deserve support. A first conversation costs nothing and helps you decide.'
      },
      {
        q: 'I have had thoughts of not wanting to be here. Is it safe to talk about that?',
        a: 'Yes — and you would not be the first person to share it. If you are in crisis right now, please call or text 988 (the Suicide & Crisis Lifeline) any time, day or night. We can help you build a safety plan that keeps you safe between and during sessions.'
      },
      {
        q: 'Do you prescribe medication?',
        a: 'We provide counseling and collaborate with your primary-care provider or a psychiatrist when medication may help. We can also refer you to a trusted prescriber in the area.'
      }
    ]
  },
  {
    slug: 'relationship',
    name: 'Relationship Issues Counseling',
    short: 'Relationship Issues',
    icon: 'relationship',
    tagline: 'Restore trust, communication, and connection — together.',
    overview: [
      'Couples and family conflict is rarely about one big blowup. It is usually a thousand small moments of misunderstanding, unspoken hurt, and patterns that harden over time — until you feel like strangers or adversaries.',
      'Whether you are dating, married, parenting, or part of a chosen family, our counselors help you slow down the cycle, hear each other again, and rebuild a relationship that feels safe.'
    ],
    signs: [
      'The same argument keeps repeating with no real resolution',
      'You feel like roommates, or you constantly walk on eggshells',
      'Trust has been broken by infidelity, secrecy, or addiction',
      'Communication has turned sarcastic, silent, or explosive',
      'Major life changes — parenting, loss, blended family — are straining the bond'
    ],
    howWeHelp: [
      'Identify the negative cycle that keeps pulling you in',
      'Learn to repair ruptures instead of letting them stack up',
      'Rebuild emotional and physical safety and trust',
      'Develop honest, kind communication you can use at home',
      'Create shared meaning and a vision for your future'
    ],
    whatToExpect: [
      'Sessions are structured so both partners feel heard and respected.',
      'You set the pace and the goals — we design the path together.',
      'We offer daytime, evening, and telehealth appointments.',
      'Sliding-scale fees are available based on household income.'
    ],
    faqs: [
      {
        q: 'Should we come together or separately?',
        a: 'For couples work we usually start together, with occasional individual sessions as needed. Family work often blends joint and individual time. We will recommend what fits your situation after the first session.'
      },
      {
        q: 'My partner will not come. Is it still worth coming alone?',
        a: 'Yes. One person changing the dynamic can shift the entire relationship. Many clients start solo and notice real changes at home within a few weeks.'
      },
      {
        q: 'Do you counsel couples who are deciding whether to stay together?',
        a: 'Yes. We provide a non-judgemental space for discernment work — whether the goal is to repair, separate amicably, or simply understand what happened.'
      }
    ]
  },
  {
    slug: 'anger-management',
    name: 'Anger Management Counseling',
    short: 'Anger Management',
    icon: 'anger',
    tagline: 'Anger is information. Learn to use it instead of being used by it.',
    overview: [
      'Anger itself is not bad — it is a signal that a boundary has been crossed, a need is unmet, or something matters deeply. The trouble begins when anger runs the show: loud reactions, broken relationships, regret, and consequences at home or work.',
      'Our counselors help you understand the function your anger serves, learns what triggers the speed-up, and replace blown-up reactions with choices you are proud of.'
    ],
    signs: [
      'Frequent or explosive outbursts you later regret',
      'Anger that feels bigger than the situation warrants',
      'Criticizing, withdrawing, or stonewalling those closest to you',
      'Road rage, conflict at work, or fear about losing a job or relationship',
      'Court-ordered or job-required anger management'
    ],
    howWeHelp: [
      'Identify early body signals before the "boil over" point',
      'Learn calming and communication tools for high-heat moments',
      'Address the unmet needs beneath the anger — exhaustion, fear, hurt, grief',
      'Repair ruptured relationships with accountability and honesty',
      'Provide documentation when required for court or employers'
    ],
    whatToExpect: [
      'A direct, no-shame first conversation about what is happening.',
      'Concrete tools you can use the same week.',
      'Options for individual or group format where available.',
      'Sliding-scale fees and flexible scheduling.'
    ],
    faqs: [
      {
        q: 'Is this a court-approved anger management program?',
        a: 'Our licensed counselors provide mental-health counseling that includes anger-management skills and can supply documentation of attendance when required. Please confirm with your case manager or attorney that this meets your specific court or employer requirements before starting.'
      },
      {
        q: 'I do not want to sit and "talk about feelings." Now what?',
        a: 'That is common and fine. A lot of this work is practical — recognizing patterns, practicing tools, and tracking what works. We meet you in the language that fits you.'
      },
      {
        q: 'Does anger management mean I have to stop feeling angry?',
        a: 'No. The goal is not to erase anger — it is to put you back in the driver\'s seat of it. Most clients feel more in control of their lives, not less.'
      }
    ]
  },
  {
    slug: 'eating-disorders',
    name: 'Eating Disorders Counseling',
    short: 'Eating Disorders',
    icon: 'eating',
    tagline: 'Your worth is not measured in numbers. Healing is possible.',
    overview: [
      'Disordered eating often begins as coping — a way to feel in control, numb pain, or meet impossible standards. Over time the coping takes over, and food, body, and weight become a daily preoccupation that isolates you from the life you want.',
      'Our counselors provide compassionate, non-judgemental support and work as part of your care team — including your medical provider — to help you reclaim a calmer, freer relationship with food and your body.'
    ],
    signs: [
      'Rigid rules, guilt, or shame around food and eating',
      'Preoccupation with weight, shape, calories, or "earning" food',
      'Restricting, bingeing, purging, or compulsive exercise',
      'Hiding eating, eating alone, or feeling out of control around food',
      'Mood, energy, or relationships affected by food/body thoughts'
    ],
    howWeHelp: [
      'Understand the role eating patterns play in your life',
      'Build a steadier, kinder relationship with food and your body',
      'Address the anxiety, depression, or trauma underneath',
      'Coordinate with your primary-care provider or a dietitian',
      'Plan for safety and medical monitoring when needed'
    ],
    whatToExpect: [
      'A careful first conversation that screens for medical risk.',
      'We will refer for higher-level care if that is what you need — you are never pushed into something that is not safe.',
      'Sliding-scale fees so cost is not a barrier to starting.',
      'A team approach that keeps your medical provider in loop (with your consent).'
    ],
    faqs: [
      {
        q: 'Do I need a medical doctor involved?',
        a: 'For eating concerns, yes — we ask that you have a primary-care provider who is aware of what is going on, because eating disorders can affect the body even when you feel "fine." We will coordinate with them with your written consent, and help you find one if you do not have one.'
      },
      {
        q: 'Do you treat anorexia, bulimia, and binge eating disorder?',
        a: 'We provide outpatient counseling for adults and older teens with mild to moderate eating concerns, and we help coordinate higher levels of care (intensive outpatient, residential) when that is the safer fit. We will be honest with you about what level of care you need.'
      },
      {
        q: 'I am not "sick enough" to need help. Is that true?',
        a: 'That thought is one of the most common and convincing symptoms of an eating disorder — and it is rarely accurate. You deserve support at any weight, any size, and any stage. The earlier you start, the easier the path.'
      }
    ]
  }
];

// Convenience: every service × area combo used for the SEO landing pages.
export const serviceAreaCombos = services.flatMap((s) =>
  (['hemet', 'murrieta', 'riverside'] as ServiceArea[]).map((area) => ({
    service: s.slug,
    area
  }))
);
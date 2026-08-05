export type TeamMember = {
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  photo?: string;
  email?: string;
};

// Placeholders — replace bios/photos in /admin once Decap is live, or edit here.
export const team: TeamMember[] = [
  {
    name: '[Board Chair name]',
    role: 'Board Chair',
    bio: '[Add a 2–3 sentence bio: professional background, why they serve on the board, and a personal note about why mental-health access matters to them.]'
  },
  {
    name: '[Executive Director name]',
    role: 'Executive Director',
    bio: '[Add a 2–3 sentence bio: leadership experience, the founding story of Renewing Hope Strategies, and the vision for the next chapter of the organization.]'
  },
  {
    name: '[Clinical Director name]',
    role: 'Clinical Director',
    credentials: 'LMFT',
    bio: '[Add a 2–3 sentence bio: licensure, specializations, and approach to supervision and clinical care.]'
  },
  {
    name: '[Treasurer name]',
    role: 'Treasurer',
    bio: '[Add a 2–3 sentence bio: financial or accounting background, and commitment to transparent stewardship of donor funds.]'
  }
];

export type EventItem = {
  title: string;
  date: string; // ISO YYYY-MM-DD
  time: string;
  location: string;
  description: string;
  category: 'mobile-unit' | 'fundraiser' | 'workshop' | 'community';
};

// Sample events — staff can edit these in /admin (Decap CMS) going forward.
export const events: EventItem[] = [
  {
    title: 'Mobile Mental Health Unit — Hemet',
    date: '2026-08-12',
    time: '9:00am – 1:00pm',
    location: 'Hemet Library, 300 E Stetson Ave, Hemet, CA',
    description:
      'Free walk-up counseling intake and resource navigation. No appointment needed. Bilingual staff available. Call (951) 465-3665 for details.',
    category: 'mobile-unit'
  },
  {
    title: 'Mobile Mental Health Unit — Murrieta',
    date: '2026-08-19',
    time: '10:00am – 2:00pm',
    location: 'Murrieta Public Library, 8 Town Square, Murrieta, CA',
    description:
      'Free counseling intake, sliding-scale enrollment, and connection to local resources. Walk-ins welcome.',
    category: 'mobile-unit'
  },
  {
    title: 'Community Wellness Workshop: Managing Anxiety',
    date: '2026-09-10',
    time: '6:00pm – 7:30pm',
    location: 'Riverfront Library, Riverside, CA',
    description:
      'A free, judgement-free workshop on recognizing anxiety and building a personal calm kit. Open to the public. Spanish interpretation on request.',
    category: 'workshop'
  }
];

export const stats = [
  { number: '5+', label: 'Counseling specialties offered' },
  { number: '3', label: 'Inland Empire communities served' },
  { number: '0', label: 'Turned away for inability to pay' },
  { number: '501(c)(3)', label: 'Registered nonprofit — donations tax-deductible' }
];
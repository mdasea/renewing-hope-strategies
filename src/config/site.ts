// Central site config used across all pages so contact info, SEO, and brand stay
// consistent. Editing one place fixes the inconsistency the old Wix site suffered.
export const site = {
  name: 'Renewing Hope Strategies',
  shortName: 'Renewing Hope',
  tagline: 'Recovery is possible. We can help you get there.',
  legal: 'A Non-profit 501(c)(3)',
  ein: '86-3305441',
  url: 'https://www.renewinghopestrategies.org',
  phoneDisplay: '(951) 465-3665',
  phoneHref: '+19514653665',
  email: 'office@renewing-hope.org',
  hours: {
    weekday: 'Mon – Thu: 8:30am – 5:30pm',
    friday: 'Fri: 8:30am – 4:00pm'
  },
  social: {
    facebook: 'https://www.facebook.com/RenewingHopeStrategies'
  },
  affiliates: {
    rhfcc: 'https://www.renewinghopeinc.com',
    moveWithHope: 'https://www.movewithhope.org'
  },
  donate: {
    givebutterSlug: 'renewinghopestrategies'
  },
  forms: {
    contact: 'mwkgjkal',
    newsletter: 'xqkbljjr'
  },
  slidingScale: {
    english: '/files/sliding-fee-application-english.pdf',
    spanish: '/files/sliding-fee-application-spanish.pdf'
  },
  serviceArea: 'Hemet, Murrieta, Riverside, and surrounding communities in the Inland Empire, CA'
} as const;

export const serviceAreas = ['hemet', 'murrieta', 'riverside'] as const;
export type ServiceArea = (typeof serviceAreas)[number];

export const areas: Record<ServiceArea, { slug: string; name: string; blurb: string }> = {
  hemet: {
    slug: 'hemet',
    name: 'Hemet, CA',
    blurb: 'In-home-style counseling and mobile outreach for individuals and families across the San Jacinto Valley.'
  },
  murrieta: {
    slug: 'murrieta',
    name: 'Murrieta, CA',
    blurb: 'Supportive, judgement-free counseling for residents of Murrieta and the surrounding Southwest Riverside County.'
  },
  riverside: {
    slug: 'riverside',
    name: 'Riverside, CA',
    blurb: 'Accessible mental-health care for the city of Riverside and greater Inland Empire.'
  }
};
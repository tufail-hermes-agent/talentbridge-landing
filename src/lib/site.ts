export const SITE_URL = "https://talentbridge.vercel.app";

export const siteConfig = {
  name: "TalentBridge",
  shortName: "TalentBridge",
  legalName: "TalentBridge Solutions",
  url: SITE_URL,
  locale: "en_US",
  tagline: "Connecting Talent, Building Careers",
  description:
    "TalentBridge is a leading recruitment and placement agency connecting top talent with great companies. We nurture talent, fuel growth, and shape futures one placement at a time.",
  email: "hello@talentbridge.com",
  phones: ["+1 (555) 123-4567"],
  address: {
    street: "123 Business Avenue",
    locality: "San Francisco",
    region: "CA",
    postalCode: "94102",
    country: "US",
  },
  socials: [
    "https://www.linkedin.com",
    "https://www.twitter.com",
    "https://www.facebook.com",
  ],
} as const;

export const primaryPhone = siteConfig.phones[0];

export function absoluteUrl(path = "/") {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
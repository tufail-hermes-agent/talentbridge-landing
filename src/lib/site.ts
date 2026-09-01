export const SITE_URL = "https://gymflow.in";

export const siteConfig = {
  name: "GymFlow",
  shortName: "GymFlow",
  legalName: "GymFlow",
  url: SITE_URL,
  locale: "en_IN",
  tagline: "Smart Gym Management for Indian Gym Owners",
  description:
    "QR check-in, absentee alerts, renewal tracking, and member management — everything your front desk needs, nothing it doesn't. Built for Indian gyms.",
  email: "support@gymflow.in",
  phones: ["+91 9019859543"],
  address: {
    street: "",
    locality: "Belagavi",
    region: "Karnataka",
    postalCode: "590001",
    country: "India",
  },
  socials: [
    "https://instagram.com/gymflow.in",
  ],
} as const;

export const primaryPhone = siteConfig.phones[0];

export function absoluteUrl(path = "/") {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

const CONFIG = {
  name: 'Adhan app',

  origin: 'https://astrowind.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'Adhan app for Slack',
  description:
    'Adhan Slack App is an Islamic prayer times reminder configurable and simple to use, the App job is to help you remember praying before the next prayer time by sending a friendly notification.',

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const SITE = { ...CONFIG };
export const DATE_FORMATTER = CONFIG.dateFormatter;

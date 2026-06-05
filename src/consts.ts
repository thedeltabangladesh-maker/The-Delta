// ───────────────────────────────────────────────────────────────
//  EDIT YOUR SITE HERE
//  This is the one file to change the name, tagline and topics.
//  After editing, save → commit → the site rebuilds automatically.
// ───────────────────────────────────────────────────────────────

export const SITE = {
  /** The masthead name shown at the top of every page. */
  name: 'The Delta',
  /** A short line under the name. */
  tagline: 'Environment, climate and policy from the world’s largest delta',
  /** One sentence used by Google and link previews. */
  description:
    'Independent reporting and policy analysis on Bangladesh’s rivers, climate, energy, ecology and the people living on the front line of environmental change.',
  /** Default author byline used when an article has none. */
  defaultAuthor: 'The Delta Desk',
  /** Used in the footer copyright line and link-preview attribution. */
  publisher: 'The Delta',
  /** Optional social / contact links shown in the footer. Leave '' to hide. */
  links: {
    email: 'editor@example.com',
    twitter: '', // e.g. 'https://twitter.com/yourhandle'
    facebook: '',
  },
};

// The topics articles can be filed under. These must match the options
// offered in the editor (public/admin/config.yml). If you add one here,
// add it there too.
export const CATEGORIES = [
  'Climate & Adaptation',
  'Rivers & Water',
  'Energy & Emissions',
  'Agriculture & Food',
  'Pollution & Health',
  'Biodiversity & Forests',
  'Coast & Sundarbans',
  'Policy & Governance',
] as const;

export type Category = (typeof CATEGORIES)[number];

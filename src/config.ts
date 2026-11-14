// Site-wide settings. Edit this file to change your name, links or the
// open-to-roles line. A link with an empty url is hidden everywhere.

export const SITE = {
  name: 'Shubham Subhnil',
  title: 'Shubham Subhnil',
  description:
    'Machine learning research scientist in Dublin working on large language models and world models.',
  url: 'https://ssubhnil.github.io',
  location: 'Dublin, Ireland',
  openTo: 'Open to ML research scientist, ML engineer and data scientist roles.',
};

export type SocialLink = { label: string; url: string };

export const LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/SSubhnil' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shubham-subhnil' },
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=cAYhxjoAAAAJ' },
  { label: 'Hugging Face', url: 'https://huggingface.co/ssubhnil' },
  { label: 'Email', url: 'mailto:shubhamsubhnil12@gmail.com' },
];

export const NAV = [
  { label: 'Research', href: '/research/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'CV', href: '/cv/' },
];

export const visibleLinks = () => LINKS.filter((l) => l.url.trim() !== '');

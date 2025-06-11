import config from '~/config.json';

export const navLinks = [
  {
    label: 'Public Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Certifications',
    pathname: '/certifications',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ahmed-imtiaz-khan-205a65195/',
    icon: 'linkedin',
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@ahmed.imtiaz2000',
    icon: 'medium',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];

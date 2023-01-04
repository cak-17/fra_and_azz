import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';

const formatIcon = (icon, css = '', iconStyle) => {
  return <FontAwesomeIcon icon={icon} className={css} style={iconStyle} />;
};

const iconLib = {
  socials: {
    facebook: formatIcon(['fab', 'facebook']),
    github: formatIcon(['fab', 'github']),
    telegram: formatIcon(['fab', 'telegram']),
    email: formatIcon('at'),
  },
  commons: {
    logo: formatIcon('shield-dog'),
    bone: formatIcon('bone'),
    user: formatIcon('user'),
    check: formatIcon('check', 'text-success'),
  },
  services: {
    sitter: formatIcon('moon', '', { width: '2rem', height: '2rem' }),
    dayCare: formatIcon('house-chimney', '', {
      width: '2rem',
      height: '2rem',
    }),
    walk: formatIcon('dog', '', { width: '2rem', height: '2rem' }),
  },
};

export default iconLib;

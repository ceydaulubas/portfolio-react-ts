export interface Colors {
  light: string;
  styledTitle: string;
  styledText: string;
  darkTitle: string;
  darkPurple: string;
  contactTitle: string;
  contactButtonBackground: string;
  ProjectTitle: string;

  softPink: string;
  white: string;
  grey: string;
}

export interface Theme {
  light: Colors;
  dark: Colors;
}

export interface StyledTheme {
  theme: Colors;
}

export const colorTheme: Theme = {
  light: {
    light: 'linear-gradient(90deg,   #b05b74, #f8bac5 60%, #f7c9c9 90%, #fadfdf5c 100%)',
    styledTitle: '#ebb4c4',
    styledText: '#000000',
    darkTitle: '#b05b74',
    darkPurple: '#b92839ba',
    white: '#eee',
    contactTitle: '#000000',
    contactButtonBackground: '#db7093',
    ProjectTitle: 'white',

    softPink: '#f7c9c9',

    grey: '#7e7d7d7c',
  },
  dark: {
    light: 'linear-gradient(90deg, #000000,   #414141 100%)',
    styledTitle: '#db7093',
    styledText: '#ffffff',
    darkTitle: '#b05b74',
    darkPurple: '#b02892ba',
    white: '#eee',
    contactTitle: 'palevioletred',
    contactButtonBackground: '#fff1fa',
    ProjectTitle: '#db7093',

    softPink: '#f7c9c9',

    grey: '	#808080',
  },
};

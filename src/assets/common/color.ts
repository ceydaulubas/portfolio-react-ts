export interface Colors {
  light: string;
  styledTitle: string;
  styledText: string;
  darkTitle: string;
  darkPurple: string;

  darkGrey: string;
  softPink: string;
  white: string;
  words: string;
  grey: string;
  transparentLightGrey: string;
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
    // light: 'linear-gradient(90deg, #D99EC9, #F6F0C4 100%)',
    // light: 'linear-gradient(90deg,  #F1A7F1 , #FAD0C4 100%)',
    // light: 'linear-gradient(90deg, #DAACEC, #94C997 100%)',
    // light: 'linear-gradient(90deg,   #D5D0E5, #F3E6E8 100%)',
    // light: 'linear-gradient(90deg,  #f8bac5, #f8b4b4 60%, #f7c9c9 90%, #fadfdf5c 100%)',
    light: 'linear-gradient(90deg,   #b05b74, #f8bac5 60%, #f7c9c9 90%, #fadfdf5c 100%)',

    styledTitle: '#db7093',
    styledText: '#ffffff',
    darkTitle: '#b05b74',

    darkPurple: '#b92839ba',

    darkGrey: '#3f3f3fc0',
    softPink: '#f7c9c9',
    white: '#eee',
    words: '#435bb5',
    grey: '#7e7d7d7c',
    transparentLightGrey: '#abababd8',
  },
  dark: {
    light: 'linear-gradient(90deg, #000000,   #414141 100%)',
    styledTitle: '#db7093',
    styledText: '#ffffff',
    darkTitle: '#b05b74',
    darkPurple: '#b02892ba',

    darkGrey: '#C6C2C3',
    softPink: '#f7c9c9',
    white: '#eee',
    words: '#FFFFFF',
    grey: '	#808080',
    transparentLightGrey: '#abababd8',
  },
};

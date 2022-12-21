export interface Colors {
  words: string;
  backgroundColor: string;

  softPink: string;
  mediumRed: string;
  darkPink: string;
  white: string;
  grey: string;
  darkGrey: string;
  transparentGrey: string;
  transparentLightGrey: string;
  light: string;
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
    words: '#435bb5',
    backgroundColor: '#d8e2f6',

    softPink: '#f7c9c9',

    mediumRed: '#b92839ba',
    darkPink: '#e2216a',
    white: '#eee',
    grey: '#7e7d7d7c',
    darkGrey: '#3f3f3fc0',
    transparentGrey: '#3f3f3fd8',
    transparentLightGrey: '#abababd8',
    // light: 'linear-gradient(90deg, #D99EC9, #F6F0C4 100%)',
    // light: 'linear-gradient(90deg,  #F1A7F1 , #FAD0C4 100%)',
    // light: 'linear-gradient(90deg, #DAACEC, #94C997 100%)',
    // light: 'linear-gradient(90deg,   #D5D0E5, #F3E6E8 100%)',
    light: 'linear-gradient(90deg, #fadfdf5c, #f7c9c9 60%, #f8b4b4 90%, #fab27e 100%)',
  },
  dark: {
    words: '#FFFFFF',
    backgroundColor: '#000000',
    softPink: '#f7c9c9',
    mediumRed: '#b02892ba',
    darkPink: '#e2209a',
    white: '#eee',
    grey: 'blue',
    darkGrey: '#C6C2C3',
    transparentGrey: '#3f3f3fd8',
    transparentLightGrey: '#abababd8',
    light: 'linear-gradient(90deg, #414141,  #000000 100%)',
  },
};

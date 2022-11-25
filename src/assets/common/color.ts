export const colors = {
  softPink: '#f7c9c9',
  mediumRed: '#b92839ba',
  darkPink: '#e2216a',
  white: '#eee',
  grey: '#7e7d7d7c',
  darkGrey: '#3f3f3fc0',
  transparentGrey: '#3f3f3fd8',
  transparentLightGrey: '#abababd8',
  light: 'linear-gradient(90deg, #fadfdf5c, #f7c9c9 60%, #f8b4b4 90%, #fab27e 100%)',
};

export interface Colors {
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
    softPink: '#f7c9c9',
    mediumRed: '#b92839ba',
    darkPink: '#e2216a',
    white: '#eee',
    grey: '#3f3f3f',
    darkGrey: '#e2216a',
    transparentGrey: '#3f3f3fd8',
    transparentLightGrey: '#abababd8',
    light: 'linear-gradient(90deg, #fadfdf5c, #f7c9c9 60%, #f8b4b4 90%, #fab27e 100%)',
  },
  dark: {
    softPink: '#f7c9c9',
    mediumRed: '#b02892ba',
    darkPink: '#e2209a',
    white: '#eee',
    grey: 'blue',
    darkGrey: '#C6C2C3',
    transparentGrey: '#3f3f3fd8',
    transparentLightGrey: '#abababd8',
    light: 'linear-gradient(90deg, #fadfdf6d, #732A40 60%, #561F30 90%, #1C0A0F 100%)',
  },
};

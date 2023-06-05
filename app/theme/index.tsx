import {extendTheme} from '@chakra-ui/react';
import {createBreakpoints, mode} from '@chakra-ui/theme-tools';

import '@fontsource/titillium-web/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/open-sans';

import '@fontsource/open-sans/600.css';
import '@fontsource/poppins';

const fonts = {
    heading: 'Roboto',
    roboto: 'Roboto',
    body: 'TitilliumWeb, sans-serif',
    titil: 'Titillium Web, sans-serif',
    fld: 'Rajdhani, sans-serif',
    openSans: 'Open Sans, sans-serif',
    poppins: 'Poppins',
  };

  const colors = {
    gray: {
      625: '#c7d1d8',
      600: '#818181',
      575: '#848c98',
      550: '#e6eaee',
      525: '#3f536e',
      500: '#838383',
      475: '#9d9ea5',
      450: '#5b5b5b',
      425: '#949494',
      400: '#808992',
      375: '#353c48',
      350: '#9f9f9f',
      325: '#e9e9ec',
      300: '#d7d9df',
      275: '#222222',
      250: '#3d495d',
      225: '#3e495c',
      200: '#f1f1f3',
      175: '#86929d',
      150: '#7e8993',
      125: '#3a495f',
      100: '#f4f6f9',
      75: '#535353',
      50: '#fafbfc',
      25: '#e9edf1',
      10: '#c5d1d9',
      0: '#ffffff',
    },
    blue: {
      500: '#257eee',
      400: '#0062C2',
      300: '#2A72E5',
      200: '#007AFF',
      100: '#0070ED',
    },
    white: {
      300: '#dee4ef',
      200: '#f3f4f1',
      100: '#FFFFFF',
    },
    black: {
      400: '#2d3136',
      300: '#304156',
      200: '#222222',
    },
    yellow: {
      300: '#ffc200',
      200: '#fecf05',
      100: '#ffff07',
    },
    green: {
      100: '#36af47',
    },
    orange: {
      100: '#f7981c',
    },
    red: {
      100: '#ff3b3b',
    },
  };


  const theme = extendTheme ({
    colors,
    fonts,
    breakpoints: {
      sm: "799px",
      md: "1199px",
      lg: "1900px",
    },
  })

  export default theme;

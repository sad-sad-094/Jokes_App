/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { styled } from '@mui/material/styles';
// import { green, purple, red, blue } from '@mui/material/colors';

export const Responsive = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('mobile')]: {
    color: 'rgb(1,122,155)'
  },
  [theme.breakpoints.up('tabletPortrait')]: {
    color: 'rgb(1,122,155)'
  },
  [theme.breakpoints.up('tabletLandscape')]: {
    color: 'rgb(1,122,155)'
  },
  [theme.breakpoints.up('largeScreen')]: {
    color: 'rgb(1,122,155)'
  },
}))


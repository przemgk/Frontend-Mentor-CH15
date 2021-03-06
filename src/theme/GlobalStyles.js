import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; /*10px*/
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.r.home};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-display: swap;
    color: ${({ theme }) => theme.fontColor.primary};
    background-color: ${({ theme }) => theme.bgColor};
  }
`;

export default GlobalStyles;

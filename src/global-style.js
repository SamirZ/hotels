import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 12px;
    font-family: sans-serif;
    margin: 0;
  }

  /* Override bootstrap making the input larger when there is an error */
  .form-control.is-invalid, .was-validated .form-control:invalid {
    padding-right: .75rem !important;
  }
`;

export default GlobalStyle;

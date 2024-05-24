import { createGlobalStyle } from 'styled-components'

const GlobalStyleReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background: #f0f0f0;
    color: #333;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 20px 0;
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    padding: 5px;
  }
  input, textarea, select {
    padding: 5px;
    margin: 5px 0;
  }
  button {
    background: none;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

`

export default GlobalStyleReset;

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /*
    global
  */

  * {
    margin: 0;
    padding: 0;
  }

  li { list-style: none; }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    vertical-align: bottom;
    border: none;
  }
`

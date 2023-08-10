import { css } from "@emotion/react";

const reset = css`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #eee;
    height: 100vh;
  }
  ul li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1em;
    font-weight: normal;
    margin: 0; /* or ‘0 0 1em’ if you’re so inclined */
  }
`;

export default reset;

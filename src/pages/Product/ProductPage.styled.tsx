import { css } from "@emotion/react";

const productDetailStyle = css`
  display: flex;
`;

const productTitleStyle = css`
  margin: 16px 0px;
  & span {
    display: block;
  }
  & span:last-child {
    text-align: right;
  }
`;

const totalPriceStyle = css`
  & span {
    font-size: 2rem;
  }
  text-align: right;
  margin-bottom: 16px;
`;

export { productDetailStyle, productTitleStyle, totalPriceStyle };

import { css } from "@emotion/react";
import { CreateProductOptionResponse } from "server/data/mockData";
import { createComma } from "utils";

interface Props {
  productOption: CreateProductOptionResponse;
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const selectStyle = css`
  width: 100%;
  font-size: 20px;
  border: 1px solid #ccc;
`;

export function Select({ productOption, onSelect }: Props) {
  return (
    <select onChange={onSelect} css={selectStyle}>
      <option>선택하세요.</option>
      {productOption.productOptions.map((option) => {
        const soldOut = option.stock === 0;
        return (
          <option key={option.id} value={option.id} disabled={soldOut}>
            {soldOut && "(품절) "}
            {productOption.name} {option.name}{" "}
            {option.price > 0 && `(+ ${createComma(option.price)}원 )`}
          </option>
        );
      })}
    </select>
  );
}

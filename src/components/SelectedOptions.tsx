import {
  CreateProductOptionResponse,
  SelectedOptionsType,
} from "server/data/mockData";
import { createComma } from "utils";
import { Txt } from "./Txt";
import { css } from "@emotion/react";
interface Props {
  selectedOptions: SelectedOptionsType[];
  productOption: CreateProductOptionResponse;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const selectedOptionsTextStyle = css`
  display: flex;
  justify-content: space-between;
  & span {
    display: block;
  }
  & input {
    width: 50px;
  }
`;

export function SelectedOptions({
  selectedOptions,
  productOption,
  onChange,
}: Props) {
  return (
    <>
      {selectedOptions.map((option) => {
        return (
          <div css={selectedOptionsTextStyle} key={option.id}>
            <Txt>
              {productOption.name} {option.name}{" "}
              {createComma(option.price + productOption.price)}원
            </Txt>
            <Txt>
              <input
                name={String(option.id)}
                min={0}
                type="number"
                onChange={onChange}
                value={option.quantity}
                max={option.stock}
              />
              개
              <br />
            </Txt>
          </div>
        );
      })}
    </>
  );
}

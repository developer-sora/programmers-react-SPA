import {
  CreateProductOptionResponse,
  SelectedOptionsType,
} from "server/data/mockData";
import { createComma } from "./createComma";
import { CartProductsType } from "Types";

export const getTotalPrice = (
  productOption: CreateProductOptionResponse,
  selectedOptions: SelectedOptionsType[]
) => {
  return createComma(
    selectedOptions.reduce((acc, selected) => {
      const { quantity, price } = selected;
      const selectedPrice = quantity * (price + productOption.price);
      return acc + selectedPrice;
    }, 0)
  );
};

export const getCartTotalPrice = (products: CartProductsType[]) => {
  return createComma(
    products.reduce(
      (acc, option) =>
        acc +
        (option.productPrice + (option.optionPrice || 0)) * option.quantity,
      0
    )
  );
};

import { useState, useCallback, ChangeEvent } from "react";
import {
  CreateProductOptionResponse,
  SelectedOptionsType,
} from "server/data/mockData";

type ReturnType = [
  selectedOptions: SelectedOptionsType[],
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void
];

export function useSelectOption(
  productOption?: CreateProductOptionResponse
): ReturnType {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType[]>(
    []
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = e;
    const quantity = +value;
    const id = +name;
    const copiedArr = [...selectedOptions];
    copiedArr.forEach((item) => {
      if (item.id === id && item.stock >= quantity) {
        item.quantity = quantity;
      }
    });
    setSelectedOptions([...copiedArr]);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = e;
    const id = +value;
    const index = selectedOptions.findIndex((option) => {
      return option.id === id;
    });
    if (index !== -1) {
      return;
    }
    const selectedValue = productOption?.productOptions.filter((option) => {
      return option.id === id;
    })[0];
    if (selectedValue) {
      setSelectedOptions([
        { ...selectedValue, quantity: 1 },
        ...selectedOptions,
      ]);
    }
  };

  return [selectedOptions, onChange, handleSelect];
}

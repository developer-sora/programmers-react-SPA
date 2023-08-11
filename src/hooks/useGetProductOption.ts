import { useEffect, useState } from "react";
import { CreateProductOptionResponse } from "server/data/mockData";
import { request } from "utils";

export const useGetProductOption = (productId: string | undefined) => {
  const [productOption, setProductOption] =
    useState<CreateProductOptionResponse>();
  useEffect(() => {
    const fetchProductOption = async () => {
      const productOptionRes = await request(`/products/${productId}`);
      setProductOption(productOptionRes);
    };
    fetchProductOption();
  }, []);

  return productOption;
};

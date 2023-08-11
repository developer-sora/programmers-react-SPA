import { useState, useEffect } from "react";
import { CreateProductsResponse } from "server/data/mockData";
import { request } from "utils";

export const useGetProducts = () => {
  const [products, setProducts] = useState<CreateProductsResponse[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await request("/products");
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return products;
};

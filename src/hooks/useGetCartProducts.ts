import { useState, useEffect } from "react";
import { CreateProductOptionResponse } from "server/data/mockData";
import { CartProductsType, CartType } from "Types";
import { getItem, request } from "utils";

export function useGetCartProducts() {
  const [cartItems, setCartItems] = useState<CartProductsType[]>([]);
  const cartData: CartType[] = getItem("products_cart", []);

  useEffect(() => {
    const fetchProducts = async () => {
      const products: CartProductsType[] = await Promise.all(
        cartData.map(async (cartItem) => {
          const product: CreateProductOptionResponse = await request(
            `/products/${cartItem.productId}`
          );
          const selectedOption = product.productOptions.find(
            (option) => option.id === cartItem.optionId
          );

          return {
            imageUrl: product.imageUrl,
            productName: product.name,
            quantity: cartItem.quantity,
            productPrice: product.price,
            optionName: selectedOption?.name,
            optionPrice: selectedOption?.price,
          };
        })
      );
      setCartItems(products);
    };
    fetchProducts();
  }, []);

  return cartItems;
}

/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { request } from "api/api";
import { CreateProductsResponse } from "api/data";
import { createComma } from "utils/comma";
import { Link } from "react-router-dom";
import { Txt, Image, ImageBox } from "components";

export function WebPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await request("/products");
      setProducts(products);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Txt typography="h1" color="black">
        상품 목록
      </Txt>
      <ul
        css={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products.map((list: CreateProductsResponse) => {
          return (
            <li key={list.id}>
              <Link to={`products/${list.id}`}>
                <ImageBox width={250} padding={16} margin={8}>
                  <Image
                    width={250}
                    height={250}
                    altText="상품이미지"
                    src={list.imageUrl}
                  />
                  <div
                    css={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Txt color="black">{list.name}</Txt>
                    <Txt color="black">{createComma(list.price)}원~</Txt>
                  </div>
                </ImageBox>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Image, ImageBox, Txt } from "components";
import { request } from "api/api";
import {
  CreateProductOptionResponse,
  ProductOptionsType,
  SelectedOptionsType,
} from "api/data";
import { createComma } from "utils/comma";

export function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [productOption, setProductOption] =
    useState<CreateProductOptionResponse>();
  const [selectedOption, setSelectedOption] = useState<SelectedOptionsType[]>(
    []
  );

  let totalPrice = 0;

  selectedOption.forEach((v) => {
    totalPrice += v.price * v.count;
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, id },
    } = event;
    if (!productOption || +value < 0) {
      return;
    }
    const copiedArr = [...selectedOption];
    copiedArr.forEach((v) => {
      if (v.id === +id && v.stock >= +value) {
        v.count = +value;
      }
    });
    setSelectedOption([...copiedArr]);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    if (!Number(value) || !productOption) {
      return;
    }
    const index = selectedOption.findIndex((v) => {
      return v.id === +value;
    });
    if (index !== -1) {
      return;
    }
    const selectedValue = productOption.productOptions.filter((v) => {
      return v.id === +value;
    })[0];
    if (selectedValue) {
      selectedValue.price += productOption.price;
    }
    setSelectedOption([{ ...selectedValue, count: 1 }, ...selectedOption]);
  };

  interface CartType {
    productId: number;
    optionId: number;
    quantity: number;
  }

  const onClick = () => {
    if (!productOption) {
      return;
    }
    const cartArray: CartType[] = [];
    const savedCart = localStorage.getItem("products_cart");
    if (savedCart === null) {
      selectedOption.forEach((v) => {
        cartArray.push({
          productId: productOption?.id,
          optionId: v.id,
          quantity: v.count,
        });
      });
      localStorage.setItem("products_cart", JSON.stringify(cartArray));
    } else {
      const data: CartType[] = JSON.parse(savedCart);
    }

    navigate("/web/cart");
  };

  useEffect(() => {
    const fetchProductOption = async () => {
      const productOptionRes = await request(`/products/${params.productId}`);
      setProductOption(productOptionRes);
    };
    fetchProductOption();
  }, [params.productId]);
  return (
    <>
      <Txt typography="h1" color="black">
        상품 목록
      </Txt>
      <ImageBox padding={24}>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            width={700}
            src={productOption?.imageUrl}
            altText="상품 디테일 이미지"
          />
          <ImageBox padding="0 16">
            <Txt typography="h2" color="black">
              커피잔
            </Txt>
            <Txt color="black">10,000원~</Txt>
            <select onChange={handleSelect}>
              <option>선택하세요.</option>
              {productOption?.productOptions.map((option) => {
                return (
                  <>
                    {option.stock === 0 ? (
                      <option disabled>
                        {`(품절) ${productOption.name} ${option.name}`}
                      </option>
                    ) : (
                      <option value={option.id}>
                        {productOption.name} {option.name}
                        {option.price > 0 && ` (+${createComma(option.price)})`}
                      </option>
                    )}
                  </>
                );
              })}
            </select>
            <ImageBox padding={16}>
              <Txt typography="h3" color="black">
                선택된 상품
                <br />
              </Txt>
              {selectedOption.map((v) => {
                return (
                  <Txt color="black">
                    {v.name} {createComma(v.price)}원
                    <input
                      id={v.id + ""}
                      type="number"
                      onChange={onChange}
                      value={v.count}
                    />
                    개
                    <br />
                  </Txt>
                );
              })}
              <Txt color="black">{createComma(totalPrice)}원</Txt>
              <Button
                onClick={() => {
                  navigate("/web/cart");
                }}
              >
                주문하기
              </Button>
            </ImageBox>
          </ImageBox>
        </div>
      </ImageBox>
    </>
  );
}

import { Box, Button, Image, Txt } from "components";
import { useGetCartProducts } from "hooks";
import { createComma } from "utils";
import { getCartTotalPrice } from "utils/getTotalPrice";
import { css } from "@emotion/react";
export function CartPage() {
  const products = useGetCartProducts();
  return (
    <section css={{ width: 600, margin: "0 auto" }}>
      <Txt typography="h1">장바구니</Txt>
      <Box padding={16}>
        <ul>
          {products.map((list) => {
            return (
              <li css={{ display: "flex", alignItems: "center" }}>
                <Image
                  width={100}
                  src={list.imageUrl}
                  alt={list.productName + "이미지"}
                />
                <div
                  css={{
                    marginLeft: "16px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {list.productName} {list.optionName} {list.quantity}개{" "}
                  </div>
                  <div>{createComma(list.productPrice)}원 </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Txt
          css={{
            display: "block",
            fontSize: "24px",
            textAlign: "right",
            marginBottom: "16px",
          }}
        >
          총 상품가격 {getCartTotalPrice(products)}원
        </Txt>
        <Button>주문하기</Button>
      </Box>
    </section>
  );
}

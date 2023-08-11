import { Link } from "react-router-dom";
import { useGetProducts } from "hooks";
import { createComma } from "utils";
import { Txt, Image, Box } from "components";
import { productListStyle, productTextStyle } from "./WebPage.styled";

export function WebPage() {
  const products = useGetProducts();
  return (
    <section>
      <Txt typography="h1">상품 목록</Txt>
      <ul css={productListStyle}>
        {products.map((list) => {
          return (
            <li key={list.id}>
              <Link to={`products/${list.id}`}>
                <Box width={250} padding={16} margin={8}>
                  <Image
                    width={250}
                    height={250}
                    alt={`${list.name} 이미지`}
                    src={list.imageUrl}
                  />
                  <div css={productTextStyle}>
                    <Txt>{list.name}</Txt>
                    <Txt>{createComma(list.price)}원~</Txt>
                  </div>
                </Box>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

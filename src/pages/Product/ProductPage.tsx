import { useNavigate, useParams } from "react-router-dom";
import { Button, Image, Box, Txt, Select, SelectedOptions } from "components";
import { createComma, getItem, getTotalPrice, setItem } from "utils";
import {
  productDetailStyle,
  productTitleStyle,
  totalPriceStyle,
} from "./ProductPage.styled";
import { useGetProductOption } from "hooks/useGetProductOption";
import { useSelectOption } from "hooks";
import { CartType } from "Types";
export function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const productOption = useGetProductOption(params.productId);
  const [selectedOptions, onChange, handleSelect] =
    useSelectOption(productOption);

  const onClick = () => {
    if (!productOption) {
      return;
    }
    const cartData: CartType[] = getItem("products_cart", []);
    setItem("products_cart", [
      ...cartData,
      ...selectedOptions.map((option) => ({
        productId: productOption.id,
        optionId: option.id,
        quantity: option.quantity,
      })),
    ]);
    navigate("/web/cart");
  };

  return (
    <section>
      {productOption === undefined ? (
        <div>상품이 없습니다.</div>
      ) : (
        <>
          <Txt typography="h1">상품 목록</Txt>
          <Box padding={24}>
            <div css={productDetailStyle}>
              <Image
                width={700}
                src={productOption.imageUrl}
                alt={`${productOption.name}이미지`}
              />
              <Box
                padding="0 16"
                css={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <div css={productTitleStyle}>
                  <Txt typography="h2">{productOption.name}</Txt>
                  <Txt>{createComma(productOption.price)}원~</Txt>
                </div>
                <Select productOption={productOption} onSelect={handleSelect} />
                <Box padding={16} margin={"auto 0 16px 0"}>
                  <Txt typography="h3">
                    선택된 상품
                    <br />
                  </Txt>
                  <SelectedOptions
                    selectedOptions={selectedOptions}
                    productOption={productOption}
                    onChange={onChange}
                  />
                  <div css={totalPriceStyle}>
                    <Txt>{getTotalPrice(productOption, selectedOptions)}원</Txt>
                  </div>
                  <Button onClick={onClick}>주문하기</Button>
                </Box>
              </Box>
            </div>
          </Box>
        </>
      )}
    </section>
  );
}

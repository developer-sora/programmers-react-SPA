export interface CreateProductsResponse {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductOptionsType {
  id: number;
  name: string;
  price: number;
  stock: number;
  created_at: string;
  updated_at: string;
}

export interface SelectedOptionsType extends ProductOptionsType {
  quantity: number;
}

export interface CreateProductOptionResponse extends CreateProductsResponse {
  productOptions: ProductOptionsType[];
}

export function createProductsResponse(): CreateProductsResponse[] {
  return PRODUCTS;
}

export function createProductOptionResponse(
  productId: number
): CreateProductOptionResponse {
  return PRODUCT_OPTION.filter((value) => value.id === productId)[0];
}

const PRODUCTS = [
  {
    id: 1,
    name: "커피 컵",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
    price: 10000,
  },
  {
    id: 2,
    name: "커피컵 종이홀더",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_cup_paper_sleeve.png",
    price: 1000,
  },
  {
    id: 3,
    name: "커피 머신",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_self_service.png",
    price: 500000,
  },
  {
    id: 4,
    name: "우유 거품기",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cooking_milk_foamer.png",
    price: 20000,
  },
  {
    id: 5,
    name: "우유용 컵",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/drink_cafe_milk_jag.png",
    price: 10000,
  },
  {
    id: 6,
    name: "그렙 커피",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/drink_petbottle_coffee.png",
    price: 3000,
  },
  {
    id: 7,
    name: "에스프레소 메이커",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/espresso_maker.png",
    price: 50000,
  },
  {
    id: 8,
    name: "냉동 샌드위치",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/food_sandwitch.png",
    price: 10000,
  },
  {
    id: 9,
    name: "티 메이커",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/press_tea_maker.png",
    price: 35000,
  },
  {
    id: 10,
    name: "각설탕 묶음",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/sugar_kakuzatou.png",
    price: 500,
  },
  {
    id: 11,
    name: "커피 시럽",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/sweets_milk_cream.png",
    price: 500,
  },
  {
    id: 12,
    name: "에스프레소 머신",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/espresso_maker_2.png",
    price: 300000,
  },
];

const PRODUCT_OPTION = [
  {
    id: 1,
    name: "커피 컵",
    price: 10000,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
    productOptions: [
      {
        id: 1,
        name: "100개 묶음",
        price: 0,
        stock: 5,
        created_at: "2021-08-23T22:52:17.634Z",
        updated_at: "2021-08-23T22:52:17.638Z",
      },
      {
        id: 2,
        name: "200개 묶음",
        price: 8000,
        stock: 5,
        created_at: "2021-08-23T22:52:34.248Z",
        updated_at: "2021-08-23T22:52:34.252Z",
      },
      {
        id: 24,
        name: "10개 묶음",
        price: 0,
        stock: 555,
        created_at: "2021-08-23T23:03:04.873Z",
        updated_at: "2021-08-23T23:03:04.879Z",
      },
    ],
  },
  {
    id: 2,
    name: "커피컵 종이홀더",
    price: 1000,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_cup_paper_sleeve.png",
    productOptions: [
      {
        id: 3,
        name: "100개 묶음",
        price: 0,
        stock: 50,
        created_at: "2021-08-23T22:52:55.546Z",
        updated_at: "2021-08-23T22:52:55.549Z",
      },
      {
        id: 4,
        name: "1000개 묶음",
        price: 8000,
        stock: 65,
        created_at: "2021-08-23T22:53:13.276Z",
        updated_at: "2021-08-23T23:00:19.536Z",
      },
    ],
  },
  {
    id: 3,
    name: "커피 머신",
    price: 500000,
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_self_service.png",
    productOptions: [
      {
        id: 5,
        name: "기본형",
        price: 0,
        stock: 0,
        created_at: "2021-08-23T22:53:27.437Z",
        updated_at: "2021-08-23T22:53:27.440Z",
      },
      {
        id: 6,
        name: "고급형",
        price: 50000,
        stock: 5,
        created_at: "2021-08-23T22:53:35.269Z",
        updated_at: "2021-08-23T23:00:26.542Z",
      },
    ],
  },
];

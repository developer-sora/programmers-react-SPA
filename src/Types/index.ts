export interface CartType {
  productId: number;
  optionId: number;
  quantity: number;
}

export interface CartProductsType {
  imageUrl: string;
  productName: string;
  quantity: number;
  productPrice: number;
  optionName?: string;
  optionPrice?: number;
}

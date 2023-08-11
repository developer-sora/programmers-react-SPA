import { rest } from "msw";
import {
  createProductOptionResponse,
  createProductsResponse,
} from "./data/mockData";

export function handlers() {
  return [
    rest.get("/products", createProducts),
    rest.get("/products/:productId", createProductOption),
  ];
}

const createProducts: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  const productsResponse = createProductsResponse();
  return res(ctx.status(200), ctx.json(productsResponse));
};

const createProductOption: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const { productId } = req.params;
  const productOption = createProductOptionResponse(Number(productId));
  return res(ctx.status(200), ctx.json(productOption));
};

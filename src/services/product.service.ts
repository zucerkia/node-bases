import productsJson from "../db/products.json";
import { Product, NewProduct } from "../models/product.interface";

const products: Product[] = productsJson as Product[];

export const getProduct = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProducts = (): Product[] => {
  return products;
};

export const postProduct = (product: NewProduct): boolean => {
  products.push({
    id: Date.now(),
    ...product,
  });
  return true;
};

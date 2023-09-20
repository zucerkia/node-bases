import { Request, Response } from "express";
import {
  getProducts,
  postProduct,
  getProduct,
} from "../services/product.service";
import { NewProduct } from "../models/product.interface";

export const getProductsController = (_req: Request, res: Response): void => {
  const response = getProducts();
  res.status(200).json({ response });
};

export const getProductController = (req: Request, res: Response): void => {
  const id = req.params.id;

  const response = getProduct(Number(id));
  res.status(200).json({ response });
};

export const postProductController = (req: Request, res: Response): void => {
  const product = req.body as NewProduct;
  const response = postProduct(product);

  if (response) {
    res.status(200).json({ response });
  } else {
    res.status(404);
  }
};

import express from "express";
import {
  getProductController,
  getProductsController,
  postProductController,
} from "../../controllers/product.controller";

const mainRoutes = express.Router();

mainRoutes.get("/", getProductsController);
mainRoutes.get("/:id", getProductController);
mainRoutes.post("/", postProductController);

export default mainRoutes;

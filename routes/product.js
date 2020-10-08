import express from "express";
import { productController } from "../controllers/index.js";
const router = express.Router();

router.get("/add-product", productController.addProductPage);
router.post("/add-product", productController.addProduct);

router.get("/", productController.getProductsPage);

export default router;

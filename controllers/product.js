import { Product } from "../models/product.js";

const addProductPage = (req, res) => {
  res.render("addProducts", {
    title: "Hello World",
  });
};

const addProduct = (req, res) => {
  const product = req.body;
  Product.addProduct(product, () => {
    res.redirect("/products");
  });
};

const getProductsPage = (req, res) => {
  Product.getAllProduts((products) => {
    res.render("products.ejs", {
      title: "Products",
      products: products,
    });
  });
};

export default { addProductPage, addProduct, getProductsPage };

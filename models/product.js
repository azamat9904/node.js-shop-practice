import fs from "fs";
import path from "path";
import rootDir from "../rootPath.js";

const filePath = path.join(rootDir, "data", "product.json");

export class Product {
  static getAllProduts(callback) {
    fs.readFile(filePath, "utf-8", (err, fileContent) => {
      if (err || !fileContent) {
        callback([]);
        return;
      }
      callback(JSON.parse(fileContent));
    });
  }

  static addProduct(product, callback) {
    Product.getAllProduts((products) => {
      products.push(product);
      fs.writeFile(filePath, JSON.stringify(products), (error) => {
        if (error) console.log("Product is not saved");
        callback();
      });
    });
  }
}

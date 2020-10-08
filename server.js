import express from "express";
import bodyParser from "body-parser";
import { productRoutes } from "./routes/index.js";

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log("server is running on port " + port);
});

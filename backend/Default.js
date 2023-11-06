import { products } from "./constants/data";
import Product from "./model/product.schema";

const DefaultData = () => {
  try {
    console.log("Data imported successfully");
    Product.insertMany(products);
  } catch (error) {
    console.log("Error while inserting default data", error.message);
  }
};

import { products } from "./constants/data.js";
import ProductModel from "./model/productSchema.js";

const defaultData = async () => {
  try {
    // await ProductModel.deleteMany({})
    await ProductModel.insertMany(products);
    console.log("Data Inserted Successfully");
  } catch (error) {
    console.log("Error in defaultData", error.message);
  }
}; 
 
export default defaultData;
                             
import express from "express";
import { userSignup, userLogin } from "../controllers/userController.js";
import { getAllProducts } from "../controllers/productController.js";
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getAllProducts);

export default router;

import { Fragment } from "react";
import React from "react";
import Banner from "./Banner";
import { Box } from "@mui/material";
import getAllProducts from "../../redux/actions/productAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  //9.Ye useSelector State se data nikal ke dega
  // 10 is data ko hmne GetProducts me store kr diya
  const getProducts = useSelector((state) => state.getAllProducts);
  //11. yada Data destruct kr diya
  const { products } = getProducts;
  console.log(products);
  const dispatch = useDispatch();

  /// 1.sbse phlee call hoga ye effect hook
  useEffect(() => {
    ///2. Isko getALlProducts ko call krke dispatch kiya
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Box>
        <Banner />
      </Box>
    </>
  );
};
export default Home;

import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../redux/actions/productAction";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Grid, styled, Typography } from "@mui/material";
import ActionItems from "./ActionItems";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
 

`;

const Container = styled(Grid)`
  background: white;
  display: flex;
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
  margin-left: 50px;
`;

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetail);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetail(id));
  }, [dispatch, product, loading]);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>
          <RightContainer item lg={4} md={4} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Rating & Reviews
            </Typography>
            <Typography>
              <Box component="span" style={{ fontSize: 28 }}>
                ₹{product.price.cost}
              </Box>&nbsp;
              <Box component="span">
                <strike>₹{product.price.mrp}</strike>
              </Box>&nbsp;
              <Box component="span">{product.price.discount}</Box>
            </Typography>
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default ProductDetail;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button, styled, Divider, Typography } from "@mui/material";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Products = styled(Box)`
  margin-top: 10px;
  background-color: white;
`;

const DealOfTheDayAndTimer = styled(Box)`
  padding: 15px 20px;
  display: flex;
  /* margin-left: 10px; */
  align-items: center;
`;

const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;

const DealOfTheDay = styled(Typography)`
  font-size: 22px;
  font-weight: 500;
  margin-right: 25px;
  line-height: 34px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
`;

const Image = styled("img")`
  height: 150px;
  width: "auto";
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 6px;
`;

const ProductComponent = ({ products, title, timer }) => {
  const countdown_URL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };

  return (
    <Products>
      <DealOfTheDayAndTimer>
        <DealOfTheDay>{title}</DealOfTheDay>
        {timer && (
          <Timer>
            <img
              src={countdown_URL}
              alt="timer"
              style={{ width: 25, paddingRight: 10 }}
            />
            <Countdown date={Date.now() + 12788734} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton variant="contained"> View All</ViewAllButton>
      </DealOfTheDayAndTimer>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Box textAlign="center" style={{ padding: "25px 15px" }}>
            <Image src={product.url} alt="product" />
            <Text style={{ fontWeight: 600, color: "#212121" }}>
              {product.title.shortTitle}
            </Text>
            <Text style={{ color: "green" }}>{product.discount}</Text>
            <Text style={{ color: "#7f7f7f" }}>{product.tagline}</Text>
          </Box>
        ))}
      </Carousel>
    </Products>
  );
};

export default ProductComponent;

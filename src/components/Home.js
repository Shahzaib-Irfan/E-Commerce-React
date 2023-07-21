import React from "react";
import Carousel from "./sub-components/Carousel";
import ProductHome from "./sub-components/ProductsHome";

const Home = () => {
  return (
    <>
      <Carousel />
      <ProductHome Title="Previous Products" />
    </>
  );
};

export default Home;

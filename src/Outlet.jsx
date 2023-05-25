import React from "react";
import Categories from "./Categories";
import Contact from "./Contact";
import FeaturedProducts from "./FeaturedProducts";
import Slider from "./Slider";

const Outlet = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Outlet;

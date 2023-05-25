import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Outlet from "./Outlet";
import Products from "./Products";
import "./Home.scss";
const Home = () => {
  return (
    <div>
      <Navbar />

      <Products />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Home;

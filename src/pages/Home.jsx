import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
const Home = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <FoodItems />
      <Cart />
    </>
  );
};

export default Home;
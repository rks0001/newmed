import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

import Footer from "../components/Footer";
import Section1 from "./Section1";
import Catcard from "../components/Catcard";
import Categories from "../components/Categories";

const Home = () => {


  return (
    <div>
      <Carousel />
      <Categories/>


    </div>
  );
};

export default Home;



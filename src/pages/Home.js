import React from "react";
import Announcement from "../components/Announcement";
import EmailList from "../components/EmailList";
import FeaturedFlavors from "../components/FeaturedFlavors";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Products />
      <FeaturedFlavors />
      <EmailList />
      <Footer />
    </div>
  );
};

export default Home;

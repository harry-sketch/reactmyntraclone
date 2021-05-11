import React from "react";
import { useState, useEffect } from "react";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";
import Header from "./components/header/Header";
import Showcase from "./components/showcase/Showcase";
import ImgSlider from "./components/slider/ImgSlider";
import DealsOfDay from "./components/dealsDay/DealsOfDay";
import BiggestDeal from "./components/biggestDeal/BiggestDeal";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import IndianWear from "./components/indian/IndianWear";
import FootWear from "./components/footwear/FootWear";
import SportsWear from "./components/sports/SportsWear";
import Footer from "./components/footer/Footer";
import PostFooter from "./components/postFooter/PostFooter";
import Intro from "./components/intro/Intro";

const App = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin:13rem auto;
    border-color: #f41cb2;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <DotLoader
          loading={loading}
          css={override}
          color={"#f41cb2"}
          size={200}
        />
      ) : (
        <>
          <p className="side_bar">
            Flat 200% <ArrowRightIcon className="side_icon" />
          </p>
          <Header />
          <Showcase />
          <ImgSlider />
          <Intro/>
          <DealsOfDay />
          <BiggestDeal />
          <IndianWear />
          <FootWear />
          <SportsWear />
          <Footer />
          <PostFooter />
        </>
      )}
    </>
  );
};
export default App;

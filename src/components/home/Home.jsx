import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import Content from "./Content";
import "./home.css";

const Home = () => {
  const { t } = useTranslation();

  //AntD's bugs fix here:
  //" https://github.com/akiran/react-slick/tree/master/examples "
  //extra add carouselSettings//
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false
  };

  return (
    <React.Fragment>
      {/*heroSquare*/}
      <div className="floating-square">
        <h1>{t("floating.0.title")}</h1>
        <p>{t("floating.0.content")}</p>
        <p>{t("floating.0.content2")}</p>
      </div>
      {/*carouselWrapper*/}
      <div className="carousel-wrapper">
        <Carousel effect="fade" {...settings}>
          <div id="one" className="div-style"></div>
          <div id="two" className="div-style"></div>
          <div id="three" className="div-style"></div>
          <div id="four" className="div-style"></div>
        </Carousel>
      </div>
      {/*pageContent*/}
      <div className="content-wrapper">
        <div className="title">
          <h1>Ristorante</h1>
        </div>
        <Content />
        <Link to="/menu">
          <Button>MENU</Button>
        </Link>
      </div>
      {/*bridge*/}
      <div className="bridge" id="home-bridge" />
    </React.Fragment>
  );
};

export default Home;

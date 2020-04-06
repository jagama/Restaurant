import React from "react";
import { useTranslation } from "react-i18next";
import Plates from "./Plates";
import "./menu.css";

const Menu = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {/*megaHero redo with map remember to myself !!!!! see here!!!!!*/}
      <div id="hero">
        <div id="intro">
          <div id="text-intro">
            <h1>{t("menu.0.title")}</h1>
            <h3>{t("menu.0.content")}</h3>
            <br />
            <div className="text-style">
              <p>{t("menu.0.menu")}</p>
              <p>€290</p>
            </div>
            <hr />
            <div className="text-style">
              <p>{t("menu.0.vine")}</p>
              <p>€190</p>
            </div>
            <hr />
          </div>
        </div>
        <div id="intro-mobile">
          <div id="text-intro">
            <h1>{t("menu.0.title")}</h1>
            <h3>{t("menu.0.content")}</h3>
            <br />
            <div className="text-style">
              <p>{t("menu.0.menu")}</p>
              <p>€290</p>
            </div>
            <hr />
            <div className="text-style">
              <p>{t("menu.0.vine")}</p>
              <p>€190</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
      {/*menuWrapper*/}
      <div id="food-wrapper">
        <h1>A LA CARTE</h1>
        {/*menuComponent*/}
        <Plates />
      </div>
      {/*bridge*/}
      <div className="bridge" id="menu-bridge" />
    </React.Fragment>
  );
};

export default Menu;

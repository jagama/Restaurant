import React from "react";
import { useTranslation } from "react-i18next";
import "./plates.css";

const Plates = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {t("menu", { returnObjects: true })
        .filter(({ id }) => id !== 0)
        .map(({ title, content, content2, content3, content4, id }) => (
          <React.Fragment key={id}>
            <div id="menu-container">
              <h2>{title}</h2>
              <div className="menu-style">
                <p>{content}</p>
                <p>€90</p>
              </div>
              <hr />
              <div className="menu-style">
                <p>{content2}</p>
                <p>€80</p>
              </div>
              <hr />
              <div className="menu-style">
                <p>{content3}</p>
                <p>€80</p>
              </div>
              <hr />
              <div className="menu-style">
                <p>{content4}</p>
                <p>€70</p>
              </div>
              <hr />
            </div>
          </React.Fragment>
        ))}
    </React.Fragment>
  );
};

export default Plates;

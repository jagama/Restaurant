import React from "react";
import { useTranslation } from "react-i18next";
import "./content.css";

const Content = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {/*contentWrapper*/}
      <div className="content-wrapper">
        <div className="container">
          <React.Fragment>
            {t("content", { returnObjects: true }).map(
              ({ title, content, url, id }) => (
                <React.Fragment key={id}>
                  <img src={url} alt={"plate"} />
                  <div className="title">
                    <h1>{title}</h1>
                    <p>{content}</p>
                  </div>
                </React.Fragment>
              )
            )}
          </React.Fragment>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;

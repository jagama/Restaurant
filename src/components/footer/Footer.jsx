import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import pic from '../../assets/logoU.png'
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {/*footerWrapper*/}
      <div id="footer">
        <div id="footer-content">
          <h1>{t('footer.0.title')}</h1>
          <p>{t('footer.0.content')}</p>
        </div>
        <Button>{t('footer.0.button')}</Button>
        <div id='center'>        
        <img src={pic} alt="logo" id="footer-img" />
        </div>
        <hr/>
        <p>Ristorante</p>
        <small>Via a Caso</small>
        <br/>
        <small>P.IVA 123456789</small>
      </div>
    </React.Fragment>
  );
};

export default Footer;

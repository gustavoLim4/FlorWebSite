import React from "react";
import logo from "../../img/GREENMIND.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./styles.css";

const Footer = () => {
  return (
    <main className="footer">
      <div className="footer-container">
        <div className="links-footerOne">
          <img src={logo} alt="logo greenmind" />
          <p>We help you find your dream plant</p>
          <div>
            <ul>
              <a href="#sdadasda">
                <FaWhatsapp />
              </a>

              <a href="#sdadadas">
                <FaFacebook />
              </a>

              <a href="#dadasdada">
                <FaInstagram />
              </a>
            </ul>
          </div>
        </div>
        <div className="links-footerTwo">
          <div className="informationc">
            <h3>Information</h3>
            <a href="#About"> About</a>
            <a href="#Product"> Product</a>
            <a href="#Blog"> Blog</a>
          </div>
          <div className="informationc">
            <h3>Company</h3>
            <a href="#Community"> Community</a>
            <a href="#Career"> Career</a>
            <a href="#Our story"> Our story</a>
          </div>
          <div className="informationc"> 
            <h3>Contact</h3>
            <a href="#Getting"> Getting Started</a>
            <a href="#Pricing"> Pricing</a>
            <a href="#Resources"> Resources</a>
          </div>
        </div>
      </div>
      <h4>2023 all Right Reserved Term of use GREENMIND</h4>
    </main>
  );
};

export default Footer;

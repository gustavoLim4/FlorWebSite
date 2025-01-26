import React from "react";
import "./styles.css";
import Group1 from "../../img/Group1.png";
import Group2 from "../../img/Group2.png";
import Group3 from "../../img/Group3.png";
import SobreTxt from "./SobreTxt/SobreTxt";

const Sobre = () => {
  return (
    <main className="sobre-container">
      <h1>About us</h1>
      <h4>Order now and appreciate the beauty of nature</h4>
      <div className="sobre-import">
        <SobreTxt
          svgSR={Group1}
          title="Large Assortment"
          description="we offer many different types of products with fewer variations in
          each category."
        />
        <SobreTxt
          svgSR={Group2}
          title="Fast & Free Shipping"
          description="4-day or less delivery time, free shipping and an expedited delivery
          option."
        />
        <SobreTxt
          svgSR={Group3}
          title="24/7 Support"
          description="answers to any business related inquiry 24/7 and in real-time. "
        />
      </div>
    </main>
  );
};

export default Sobre;

import React from "react";
import "./styles.css";
import { FaArrowRightLong } from "react-icons/fa6";
import planta3 from "../../img/planta1.png";
import planta2 from "../../img/planta2.png";
import planta1 from "../../img/planta3.png";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Produtos = () => {
  const carousel = useRef();

  const [width, setWidth] = useState();

  useEffect(() => {
    //pega o numero X de ate quanto o carrosel vai 
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);

    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const productCard = [
    {id: 1, foto: planta3, nameplantas: "Artificial Plants", preco: "P 900.00"},
    {id: 2, foto: planta2, nameplantas: "Artificial Plants", preco: "P 900.00",},
    {id: 3, foto: planta1, nameplantas: "Artificial Plants", preco: "P 900.00",},
    {id: 4, foto: planta3, nameplantas: "Artificial Plants", preco: "P 900.00"},
    {id: 5, foto: planta2, nameplantas: "Artificial Plants", preco: "P 900.00",},
    {id: 6, foto: planta1, nameplantas: "Artificial Plants", preco: "P 900.00",},
    {id: 7, foto: planta1, nameplantas: "Artificial Plants", preco: "P 900.00",},
    {id: 8, foto: planta3, nameplantas: "Artificial Plants", preco: "P 900.00"},
    {id: 9, foto: planta2, nameplantas: "Artificial Plants", preco: "P 900.00",},
    {id: 10, foto: planta1, nameplantas: "Artificial Plants", preco: "P 900.00",},

  ];

  return (
    <main className="card-container" >
      <div className="plantas-container">
        <h1>Best Selling Plants</h1>
        <p>Easiest way to healthy life by buying your favorite plants </p>
        <div className="button-see" > 
          <a href="#ir">
            See more <FaArrowRightLong />
          </a>
        </div>
      </div>

      <div className="container">
        <motion.div
          ref={carousel}
          className="card-produtos"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
          className="inner" 
          drag="x"
          dragConstraints={{right: 0, left: -width}}
          initial={{x:150}}
          animate= {{x:0}}
          transition={{duration: 0.7}}
          >
            {productCard.map((item) => (
              <motion.div className="item" key={item.id}>
                <img src={item.foto} alt={item.plantas} />
                <h3>{item.nameplantas}</h3>
                <p id="aboutus">{item.preco}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Produtos;
// user-select: none; touch-action: pan-y; transform: translateX(-490.769px);
// npm frame-motion

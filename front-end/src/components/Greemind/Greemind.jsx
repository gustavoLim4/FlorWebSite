import React, { useEffect, useState } from "react";
import "./styles.css";

import pessoa1 from "../../img/pessoa3.png";
import pessoa2 from "../../img/pessoa1.png";
import pessoa3 from "../../img/pessoa3.png";
import pessoa4 from "../../img/pessoa1.png";

import { IoStar } from "react-icons/io5";

const Greemind = () => {
  const cards = [
    {
      id: 1,
      foto: pessoa1,
      name: "John Doe",
      work: "Youtube",
      depoimento:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      classificacao: 3.9,
    },
    {
      id: 2,
      foto: pessoa2,
      name: "John Doe",
      work: "Youtube",
      depoimento:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      classificacao: 4.5,
    },
    {
      id: 3,
      foto: pessoa3,
      name: "John Doe",
      work: "Youtube",
      depoimento:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      classificacao: 4.2,
    },
    {
      id: 4,
      foto: pessoa4,
      name: "John Doe",
      work: "Youtube",
      depoimento:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      classificacao: 4.2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <main>
      <div className="title-container">
        <h1>What customers say about GREEMIND?</h1>
      </div>
      <div className="carrossel">
        <div
          className="cards"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <p>{card.depoimento}</p>
              <div className="pessoa-container">
                <img src={card.foto} alt={`Foto do depoente ${card.id}`} />
                <div className="nome-container">
                  <h4>{card.name}</h4>
                  <p>{card.work}</p>
                </div>
                <div className="classific">
                  <IoStar />
                  <span>{card.classificacao}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Greemind;

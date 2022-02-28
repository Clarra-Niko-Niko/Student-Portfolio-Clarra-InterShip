import { useState } from "react";
import "./certification.scss";
import Arrow from "../assets/arrow.png"
import Certif from "../assets/Certif.png"
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
     
      title: "Scrum Master Certification",
      desc: "Cette certification m'a permit non seulement de monter en compétence et de connaître la méthode et comment prendre en main une équipe ",
      img: {Certif},
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span className="Text">Certification</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={Certif}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={Arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={Arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

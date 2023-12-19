import style from "./PrevContent.module.css";
import foto from "../foto.png";
import Prototype from "prop-types";
import {
  ButtonSave,
  ButtonLike,
  ButtonReturn,
  ButtonComent,
  ButtonShare,
} from "./Buttons.js";
import { useState, useEffect } from "react";

function PrevContent() {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  const [notices, setnotices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/", {
      method: "GET",
      headers: headers,
    })
      .then((body) => body.json())
      .then((data) => {
        console.log(data);
        setnotices(data);
      })
      .catch((res) => console.log(res));
  }, []);

  const changeColor = (e) => {
    // const bodyContent = document.getElementById(notices.id);
    console.log(e.target);

    // bodyContent.style.background = "#D9D9D9";
  };

  return (
    <div className={style.containerPrev}>
      {notices.map((n, index) => (
        <>
          <div
            className={style.prevContent}
            key={n.id}
            onMouseEnter={changeColor}
            onMouseLeave={changeColor}
          >
            <span>by:</span>
            <h1>{n.titlePost}</h1>
            <span>{n.content}</span>
            <br></br>
            <a href="www.google.com.br">Ler mais+</a>
            <br></br>
            <img src={foto}></img>
          </div>
          <div>
            <br></br>
            <ul className={style.topics}>
              <li className={style.liStyle}>Assuntos:</li>
              <li className={style.liStyle}>{n.theme_one}</li>
              <li className={style.liStyle}>{n.theme_two}</li>
              <li className={style.liStyle}>{n.theme_three}</li>
            </ul>
          </div>
          <div className={style.ctaButton}>
            <ButtonLike numberLikes={n.id} idPost={n.id} />
            <ButtonComent />
            <ButtonSave />
            <ButtonShare />
          </div>
        </>
      ))}
    </div>
  );
}
PrevContent.prototype = {
  name: Prototype.string.isRequired,
  title: Prototype.string.isRequired,
  content: Prototype.string.isRequired,
  img: Prototype.string,
};
export default PrevContent;

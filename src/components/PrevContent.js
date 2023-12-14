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

function PrevContent({ name, title, content, img }) {
  console.log(name);
  return (
    <div className={style.containerPrev}>
      <div className={style.prevContent}>
        <span>by: {name}</span>
        <h1>{title}</h1>
        <span>
          {content}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          dictum placerat nisl in tincidunt. In luctus vulputate gravida.
          Quisque et lectus sit amet quam egestas vulputate. Etiam aliquam
          dignissim euismod. Pellentesque lobortis enim nunc, vitae posuere
          neque neque, malesuada varius feugiat vitae, faucibus sit amet erat.
        </span>
        <br></br>
        <a href="www.google.com.br">Ler mais+</a>
        <br></br>
        <img src={foto}></img>
      </div>
      <div>
        <br></br>
        <ul className={style.topics}>
          <li className={style.liStyle}>Assuntos:</li>
          <li className={style.liStyle}>games,</li>
          <li className={style.liStyle}>xbox,</li>
          <li className={style.liStyle}>computador</li>
        </ul>
      </div>
      <div className={style.ctaButton}>
        <ButtonLike />
        <ButtonComent />
        <ButtonSave />
        <ButtonShare />
      </div>
    </div>
  );
}
PrevContent.prototype = {
  name: Prototype.string.isRequired,
  title: Prototype.string.isRequired,
  content: Prototype.string.isRequired,
  img: Prototype.string,
};

PrevContent.defaultProps = {
  name: "joão",
  title: "Lorem ipsum dolor sit amet",
};
export default PrevContent;

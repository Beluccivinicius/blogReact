import style from "./PrevContent.module.css";
import styleComment from "./Comment.module.css";
import stylesButton from "./Button.module.css";
import foto from "../foto.png";
import Prototype from "prop-types";
import {
  ButtonSave,
  ButtonLike,
  ButtonReturn,
  ButtonComment,
  ButtonShare,
} from "./Buttons.js";
import { Comment, MoreComment } from "./Comment.js";
import headers from "../utils/headers.js";
import * as ReactDOM from "react-dom";

import { useState, useEffect } from "react";

function PrevContent(props) {
  const post = props.props;

  //change color background div post
  const changeColor = (e) => {
    const element = e.target;
    const div = element.closest(".PrevContent_prevContent__uhUTT");

    if (!div.value || div.value == "hover") {
      div.style.backgroundColor = "#D9D9D9";
      div.value = "noHover";
      return;
    }
    div.style.backgroundColor = "#fff";
    div.value = "hover";
  };

  const [isOpen, setOpen] = useState(false);
  const [comments, setComment] = useState([]);

  const commentPost = () => {
    fetch(`http://localhost:5050/messages/${post.id}`, {
      method: "GET",
      headers: headers,
    })
      .then((body) => body.json())
      .then((data) => {
        setComment(data);
        setOpen(!isOpen);
      })
      .catch((res) => console.log(res));
  };

  const savePost = () => {};

  const [isSave, setSave] = useState(false);
  const changeColorButton = (e) => {};

  const dispararEventos = (e) => {
    const element = e.target;
    const button = element.closest(".Button_button__iEiBG");

    setSave(!isSave);

    if (isSave) {
      console.log("clicou");
      button.id = `${stylesButton.isSave}`;
    } else {
      button.id = `${stylesButton.noSavedButton}`;
    }

    savePost(e);
    changeColorButton();
  };

  return (
    <div className={style.containerPrev}>
      <div
        className={style.prevContent}
        key={post.id_post}
        id={post.id_post}
        onMouseEnter={changeColor}
        onMouseLeave={changeColor}
      >
        <span>by:</span>
        <h1>{post.titlePost}</h1>
        <span>{post.content}</span>
        <br></br>
        <a href="www.google.com.br">Ler mais+</a>
        <br></br>
        <img src={foto}></img>
        <div>
          <br></br>
          <ul className={style.topics}>
            <li className={style.liStyle}>Assuntos:</li>
            <li className={style.liStyle}>{post.theme_one}</li>
            <li className={style.liStyle}>{post.theme_two}</li>
            <li className={style.liStyle}>{post.theme_three}</li>
          </ul>
        </div>
        <div className={style.ctaButton}>
          <ButtonLike numberLikes={post.id} id={`${post.id_post}buttonLike`} />
          <ButtonComment
            onClick={() => {
              commentPost();
            }}
            id={post.id}
          />
          <ButtonSave onClick={dispararEventos} />
          <ButtonShare />
        </div>
      </div>
      <hr></hr>
      <div className="closed" id={post.id_post + "divComment"}>
        {isOpen
          ? comments.map((comment) => (
              <Comment props={comment} key={comment.id + "comment"} />
            ))
          : null}
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
export default PrevContent;

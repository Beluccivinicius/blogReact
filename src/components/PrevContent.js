import style from "./PrevContent.module.css";
import styleComment from "./Comment.module.css";
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

  const [comments, setComment] = useState([]);

  const commentPost = () => {
    fetch(`http://localhost:5050/messages/${post.id}`, {
      method: "GET",
      headers: headers,
    })
      .then((body) => body.json())
      .then((data) => {
        console.log(data);
        setComment(data);
      })
      .catch((res) => console.log(res));
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
          <ButtonLike numberLikes={post.id} id={post.id} />
          <ButtonComment
            evento={() => {
              commentPost();
            }}
          />
          <ButtonSave />
          <ButtonShare />
        </div>
      </div>
      <hr></hr>
      {comments.length > 0 ? (
        comments.map((comment) => <Comment props={comment} />)
      ) : (
        <h1>não tem nada</h1>
      )}
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

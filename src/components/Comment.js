import style from "./Comment.module.css";
import { ButtonLike, ButtonSendComment } from "./Buttons";
import { useCallback, useEffect, useState } from "react";
import headers from "../utils/headers.js";

function MoreComment() {
  return (
    <div className={style.moreComment}>
      <a className={style.nameProfile}>More+</a>
    </div>
  );
}

function SpaceToComment({ idPost, idUser, onClick }) {
  const commentingPost = async () => {
    let idUser = 1;

    let input = document.getElementById(`${idPost}input`).value;

    let data = {
      comment: input,
      idUser: idUser,
    };

    fetch("http://localhost:5050/sendMessages", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.doComment}>
      <div className={style.search}>
        <img
          src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
          className={style.imgComment}
        ></img>
        <input
          id={`${idPost}input`}
          type="text"
          className={style.input}
          placeholder="Diga alguma coisa"
        ></input>
      </div>
      <div className={style.divSendComment}>
        <ButtonSendComment onClick={commentingPost} />
      </div>
    </div>
  );
}

function Comment({ props, evento }) {
  return (
    <div className={style.divComment}>
      <div className={style.divNameComment}>
        <img
          className={style.imgComment}
          src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
        ></img>
        <span className={style.nameProfile}>{props.author}</span>
      </div>
      <div className={style.comment}>
        <span className={style.comment}>{props.comment}</span>
      </div>
      <ButtonLike numberLikes={props.likes} id={`${props.id}buttonLike`} />
      <hr></hr>
    </div>
  );
}

export { Comment, MoreComment, SpaceToComment };

import style from "./Comment.module.css";
import { ButtonLike, ButtonSendComment } from "./Buttons";
import { useCallback, useEffect, useState } from "react";

function MoreComment() {
  return (
    <div className={style.moreComment}>
      <a className={style.nameProfile}>More+</a>
    </div>
  );
}

function SpaceToComment({ idPost, idUser }) {
  const commentPost = (idPost, idUser, content) => {
    // fetch(`http://localhost:5050/messages/${post.id}`, {
    //   method: "GET",
    //   headers: headers,
    // })
    //   .then((body) => body.json())
    //   .then((data) => {})
    //   .catch((res) => console.log(res));
  };

  return (
    <div className={style.search}>
      <img
        src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
        className={style.imgComment}
      ></img>
      <input
        type="text"
        className={style.input}
        placeholder="Diga alguma coisa"
      ></input>
      <div className={style.divSendComment}>
        <ButtonSendComment onClick={commentPost} />
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

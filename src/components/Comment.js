import style from "./Comment.module.css";

function Comment() {
  return (
    <div className={style.divComment}>
      <div className={style.nameComment}>
        <img
          className={style.imgComment}
          src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
        ></img>
        <span className={style.nameProfile}>João da Silva</span>
      </div>
      <span>aqui vai ser um comentário</span>
      <button>Aqui vai um botão de curtida</button>
    </div>
  );
}

export default Comment;

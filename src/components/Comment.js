import style from "./Comment.module.css";
import { ButtonLike } from "./Buttons";

function MoreComment() {
  return (
    <div className={style.moreComment}>
      <a className={style.nameProfile}>More+</a>
    </div>
  );
}

function Comment() {
  return (
    <div className={style.divComment}>
      <div className={style.divNameComment}>
        <img
          className={style.imgComment}
          src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
        ></img>
        <span className={style.nameProfile}>João da Silva</span>
      </div>
      <div className={style.comment}>
        <span className={style.comment}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets co
        </span>
      </div>
      <ButtonLike />
    </div>
  );
}

export { Comment, MoreComment };

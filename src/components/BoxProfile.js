import style from "./BoxProfile.module.css";
import imageDefault from "../perfilDefault.jpg";

function BoxProfile({ name, qtdPost }) {
  return (
    <nav className={style.profile}>
      <img src={imageDefault} className={style.image}></img>
      <span className="links-Profile">Olá Mr.{name}</span>
      <span className="links-Profile">Qtd. Posts {qtdPost}</span>
      <span className="links-Profile">Meus Posts</span>
      <button className="button" id={style.buttonProfile}>
        Create Post +
      </button>
    </nav>
  );
}

export default BoxProfile;

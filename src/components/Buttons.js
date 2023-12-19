import styles from "./Button.module.css";
import { BiShare } from "react-icons/bi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { SlArrowLeft } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";

function ButtonLike({ numberLikes, idPost }) {
  const [numberLike, setNumberLikes] = useState(numberLikes);

  const changeColor = (e) => {
    const myButton = document.getElementById(idPost);

    if (!myButton.value || myButton.value == "dontLiked") {
      myButton.style.background = "#4F5FF1";
      myButton.value = "liked";
      setNumberLikes(idPost + 1);
      return;
    }

    myButton.style.background = "#AAABB8";
    myButton.value = "dontLiked";
    setNumberLikes(numberLike - 1);
  };

  return (
    <button className={styles.likeButton} id={idPost} onClick={changeColor}>
      <span id={styles.numberLikes}>{numberLike}</span>
      <AiOutlineLike />
    </button>
  );
}
ButtonLike.defaultProps = {
  numberLikes: "NaN",
};

function ButtonShare() {
  return (
    <button className={styles.button}>
      <BiShare />
    </button>
  );
}

function ButtonComent() {
  return (
    <button className={styles.button} name="coment">
      <IoChatbubbleOutline />
    </button>
  );
}

function ButtonSave() {
  const changeColor = (e) => {
    let button = e.target.parentElement;
    if (!button.name) {
      button = e.target;
    }

    if (button.name === "save") {
      button.id = `${styles.savedButton}`;
      button.name = "saved";
      return;
    }

    button.id = `${styles.noSavedButton}`;
    button.name = "save";
  };

  return (
    <button className={styles.button} onClick={changeColor} name="save">
      <CiBookmark />
    </button>
  );
}

function ButtonReturn() {
  return (
    <button id={styles.buttonBack}>
      <SlArrowLeft />
      <span>voltar</span>
    </button>
  );
}

export { ButtonSave, ButtonReturn, ButtonComent, ButtonShare, ButtonLike };

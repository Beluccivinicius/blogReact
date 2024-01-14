import styles from "./Button.module.css";
import { BiShare } from "react-icons/bi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { SlArrowLeft } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import headers from "../utils/headers.js";

import { useState, useEffect } from "react";

function ButtonLike({ numberLikes, id }) {
  const [numberLike, setNumberLikes] = useState(numberLikes);

  const changeColor = (e) => {
    const myButton = document.getElementById(id);

    if (!myButton.value || myButton.value == "dontLiked") {
      myButton.style.background = "#4F5FF1";
      myButton.value = "liked";
      setNumberLikes(numberLikes + 1);
      return;
    }

    myButton.style.background = "#AAABB8";
    myButton.value = "dontLiked";
    setNumberLikes(numberLike - 1);
  };

  return (
    <button className={styles.likeButton} id={id} onClick={changeColor}>
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

function ButtonComment({ onClick }) {
  const [comments, setComment] = useState([]);
  const [isOpen, setOpen] = useState(false);

  return (
    <button className={styles.button} onClick={onClick}>
      <IoChatbubbleOutline />
    </button>
  );
}

function ButtonSave({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick} name="save">
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

export { ButtonSave, ButtonReturn, ButtonComment, ButtonShare, ButtonLike };

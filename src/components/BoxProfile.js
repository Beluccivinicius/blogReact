import style from "./BoxProfile.module.css";
import imageDefault from "../perfilDefault.jpg";
import { useEffect, useState } from "react";

function BoxProfile({ name, qtdPost }) {
  const [infoUser, setUser] = useState([]);
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  useEffect(() => {
    fetch("http://localhost:5050/user", {
      method: "GET",
      headers: headers,
    })
      .then((body) => body.json())
      .then((data) => {
        setUser(data);
      })
      .catch((res) => console.log(res));
  }, []);

  // cpf: "33438447304";
  return (
    <nav className={style.profile}>
      <img src={imageDefault} className={style.image}></img>
      <span className="links-Profile">{infoUser.name}</span>
      <span className="links-Profile">Qtd. Posts {infoUser.id}</span>
      <span className="links-Profile">Meus Posts</span>
      <button className="button" id={style.buttonProfile}>
        Create Post +
      </button>
    </nav>
  );
}

export default BoxProfile;

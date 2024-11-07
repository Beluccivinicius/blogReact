import BoxProfile from "../../components/BoxProfile.js";
import PrevContent from "../../components/PrevContent.js";
import { Comment, MoreComment } from "../../components/Comment.js";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import headers from "../../utils/headers.js";

function Home() {
  const [notices, setNotices] = useState([]);

  //fetch posts
  useEffect(() => {
    fetch("http://localhost:5050/", {
      method: "GET",
      headers: headers,
    })
      .then((body) => body.json())
      .then((data) => {
        const validPost = data.filter((post) => {
          return post.content != null;
        });
        console.log(data);
        setNotices(validPost);
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <button>login</button>
      {notices.length > 0 && notices.map((n) => <PrevContent props={n} />)}
    </>
  );
}

export default Home;

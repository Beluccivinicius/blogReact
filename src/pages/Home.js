import BoxProfile from "../components/BoxProfile";
import PrevContent from "../components/PrevContent";
import { Comment, MoreComment } from "../components/Comment";
import style from "./Home.module.css";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <PrevContent />
      <Comment />
      <MoreComment />
    </>
  );
}

export default Home;

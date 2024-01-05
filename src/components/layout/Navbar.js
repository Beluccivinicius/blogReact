import { IoSearch } from "react-icons/io5";
import foto from "../../logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <img className={styles.interprise} src={foto}></img>
      <div className={styles.search}>
        <i>
          <IoSearch />
        </i>
        <input type="text" className={styles.input}></input>
      </div>
    </nav>
  );
}

export default Navbar;

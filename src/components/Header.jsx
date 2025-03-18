import styles from "./Header.module.scss";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

//<i class="fa-solid fa-bars"></i>

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={logo} alt="logo cookchef" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`${styles.headerXs} fa-solid fa-bars`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;

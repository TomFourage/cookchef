import styles from "./Header.module.scss";
import logo from "../assets/images/logo.svg";

//<i class="fa-solid fa-bars"></i>

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i className="fa-solid fa-bars"></i>
      <div className="flex-fill">
        <img src={logo} alt="logo cookchef" />
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-basket-shopping mr-5"></i>
          <span>Panier</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
    </header>
  );
}

export default Header;

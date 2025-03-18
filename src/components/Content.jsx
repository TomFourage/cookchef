import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/Recipes";
import { useState } from "react";

function Content() {
  const recipes = data;

  const [filter, setFilter] = useState("");

  function handleInput(e) {
    const filer = e.target.value;
    setFilter(filer.trim().toLowerCase());
  }

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`d-flex flex-column card p-20 ${styles.contentCard}`}>
        <div
          className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
        </div>
        <div className={styles.grid}>
          {recipes
            .filter((r) => r.title.toLocaleLowerCase().startsWith(filter))
            .map((r) => (
              <Recipe key={r._id} title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;

import styles from "./Recipe.module.scss";

function Recipe({
  recipe,
  updateRecipe,
  deleteRecipe,
}) {
  function handleClickLike() {
    updateRecipe({
      ...recipe,
      liked: !recipe.liked,
    });
  }

  function handleClickDelete(e) {
    e.stopPropagation();
    deleteRecipe(recipe._id);
    
  }
  return (
    <div onClick={handleClickLike} className={styles.recipe}>
      <i onClick={handleClickDelete} className="fa-regular fa-circle-xmark"></i>
      <div className={styles.imageContainer}>
        <img src={recipe.image} alt="recette" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{recipe.title}</h3>
        <i className={`fa-solid fa-heart ${recipe.liked ? "text-primary" : ""}`}></i>
      </div>
    </div>
  );
}

export default Recipe;

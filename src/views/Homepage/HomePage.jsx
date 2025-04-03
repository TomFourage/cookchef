import Loading from "../../components/Loading/Loading";
import styles from "./HomePage.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { useState } from "react";
import Search from "./components/Search/Search";
import { useFetchRecipes } from "../../hooks/useFetchRecipes";
import { updateRecipe as updateR, deleteRecipe as deleteR } from "../../apis";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { recipesState, selectFilteredRecipes } from "src/state";

function Homepage() {
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(1);
    const [isLoading] = useFetchRecipes(page);
    const recipes = useRecoilValue(selectFilteredRecipes(filter));
    const setRecipes = useSetRecoilState(recipesState);

    async function updateRecipe(updatedRecipe) {
        const savedRecipe = await updateR(updatedRecipe);
        setRecipes(
            recipes.map((r) => (r._id === savedRecipe._id ? savedRecipe : r))
        );
    }

    async function deleteRecipe(_id) {
        await deleteR(_id);
        setRecipes(recipes.filter((r) => r._id !== _id));
    }

    function handleClickLoadMoreRecipes() {
        setPage(page + 1);
    }

    return (
        <div className="flex-fill d-flex flex-column container p-20">
            <h1 className="my-30">
                Découvrez nos nouvelles recettes{" "}
                <small className={styles.small}> - {recipes.length}</small>{" "}
            </h1>
            <div
                className={`flex-fill d-flex flex-column card p-20 mb-20 ${styles.contentCard}`}
            >
                <Search setFilter={setFilter} />
                {isLoading && <Loading />}
                <div className={styles.grid}>
                    {recipes
                        .filter((r) =>
                            r.title.toLocaleLowerCase().startsWith(filter)
                        )
                        .map((r) => (
                            <Recipe
                                key={r._id}
                                recipe={r}
                                deleteRecipe={deleteRecipe}
                                updateRecipe={updateRecipe}
                            />
                        ))}
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center p-20">
                    <button
                        onClick={handleClickLoadMoreRecipes}
                        className="btn btn-primary"
                    >
                        Voir plus de recettes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;

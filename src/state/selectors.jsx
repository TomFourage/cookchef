import { selectorFamily } from "recoil";
import { recipesState } from "./atoms";

export const selectFilteredRecipes = selectorFamily({
    key: "selectFilteredRecipes",
    get:
        (filter) =>
        ({ get }) => {
            const recipes = get(recipesState);
            return (
                recipes.length &&
                recipes.filter((r) =>
                    r.title.tolowerCase().startsWith(filter())
                )
            );
        },
});

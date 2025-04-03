import { useEffect, useState } from "react";
import { getRecipes } from "../apis";
import { useSetRecoilState } from "recoil";
import { recipesState } from "src/state";

export function useFetchRecipes(page) {
    const setRecipes = useSetRecoilState(recipesState);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState([]);

    useEffect(() => {
        let cancel = false;
        async function fetchRecipes() {
            try {
                setIsLoading(true);
                const queryParams = new URLSearchParams();
                if (page) {
                    queryParams.append("skip", (page - 1) * 18);
                    queryParams.append("limit", 18);
                    queryParams.append("sort", "createdAt:-1");
                }
                const fetchedRecipes = await getRecipes(queryParams.toString());
                if (!cancel) {
                    setRecipes((x) => [...x, ...fetchedRecipes]);
                }
            } catch (e) {
                setError("Erreur lors de la récupération des recettes", e);
            } finally {
                if (!cancel) {
                    setIsLoading(false);
                }
            }
        }
        fetchRecipes();
        return () => {
            cancel = true;
        };
    }, [page, setRecipes]);
    return [isLoading, error];
}

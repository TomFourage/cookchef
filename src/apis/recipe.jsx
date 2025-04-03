const RECIPES_API = "https://restapi.fr/api/recipes";

export async function getRecipes(queryParams) {
    const response = await fetch(
        `${RECIPES_API}${queryParams ? `?${queryParams}` : ""}`
    );
    if (response.ok) {
        const body = await response.json();
        return Array.isArray(body) ? body : [body];
    } else {
        throw new Error("Erreur lors de la récupération des recettes");
    }
}
export async function getRecipe(_id) {
    const response = await fetch(`${RECIPES_API}/${_id}`);
    if (response.ok) {
        const body = await response.json();
        return body;
    } else {
        throw new Error("Erreur lors de la récupération de la recette");
    }
}
export async function createRecipe(newRecipe) {
    const response = await fetch(RECIPES_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Erreur lors de la création de la recette");
    }
}

export async function deleteRecipe(_id) {
    const response = await fetch(`${RECIPES_API}/${_id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        return _id;
    } else {
        throw new Error("Erreur lors de la suppression de la recette");
    }
}
export async function updateRecipe(updatedRecipe) {
    const { _id, ...restRecipe } = updatedRecipe;
    const response = await fetch(`${RECIPES_API}/${_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(restRecipe),
    });
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Erreur lors de la mise à jour de la recette");
    }
}

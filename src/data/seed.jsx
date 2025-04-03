import { data } from "./Recipes";

export async function seedRecipes() {
    await fetch("https://restapi.fr/api/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

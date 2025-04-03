import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
import { getRecipe } from "./apis";

const Homepage = lazy(() => import("./views/Homepage/HomePage"));
const Admin = lazy(() => import("./views/Admin/Admin"));
const AdminRecipes = lazy(() =>
  import("./views/Admin/pages/AdminRecipes/AdminRecipes")
);
const AdminUsers = lazy(() =>
  import("./views/Admin/pages/AdminUsers/AdminUsers")
);
const AdminRecipesList = lazy(() =>
  import("./views/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList")
);
const AdminRecipesForm = lazy(() =>
  import("./views/Admin/pages/AdminRecipes/pages/AdminRecipesForm/AdminRecipesForm")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "recipes",
            element: <AdminRecipes />,
            children: [
              {
                index: true,
                loader: async () => redirect("list"),
              },
              {
                path: "list",
                element: <AdminRecipesList />,
              },
              {
                path: "new",
                element: <AdminRecipesForm />,
              },
              {
                path: "edit/:recipeId",
                loader: async ({params: {recipeId}}) => getRecipe(recipeId),
                element: <AdminRecipesForm />,
              },
            ],
          },
          {
            path: "users",
            element: <AdminUsers />,
          },
          {
            index: true,
            loader: async () => redirect("recipes"),
          },
        ],
      },
    ],
  },
]);

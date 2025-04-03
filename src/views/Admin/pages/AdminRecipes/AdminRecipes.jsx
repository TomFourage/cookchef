import { Outlet, useLocation } from "react-router-dom";
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav";
import { Suspense } from "react";

function AdminRecipes() {
  const {key} = useLocation();
  return (
    <div className="d-flex flex-column flex-fill">
      <h4 className="p-20">Gestion des recettes</h4>
      <div className="d-flex flex-column flex-fill p-20">
        <AdminRecipesNav></AdminRecipesNav>
        <div className="d-flex flex-colomn  ">
          <Suspense>
            <Outlet key={key} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default AdminRecipes;

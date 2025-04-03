import styles from "./AdminRecipesForm.module.scss";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRecipe, updateRecipe } from "../../../../../../apis";
import { useLoaderData, useNavigate } from "react-router-dom";

function AdminRecipesForm() {
  const recipe = useLoaderData();
  const navigate = useNavigate();

  const defaultValues = {
    title: recipe ? recipe.title : "",
    image: recipe ? recipe.image : "",
  };

  const recipeSchema = yup.object({
    title: yup
      .string()
      .required("Le titre est requis")
      .min(3, "Le titre doit contenir au moins 3 caractères")
      .max(30, "Le titre doit contenir au maximum 30 caractères"),
    image: yup
      .string()
      .url("L'URL de l'image doit être valide")
      .required("L'URL de l'image est requise"),
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(recipeSchema),
  });

  async function submit(values) {
    try {
      clearErrors();
      if (recipe) {
        await updateRecipe({
          ...values,
          _id: recipe._id,
        });
        navigate("/admin/recipes/list");
      } else {
        await createRecipe(values);
        navigate("/admin/recipes/list");
        reset(defaultValues);
      }
    } catch (e) {
      setError("generic", {
        type: "generic",
        message: "Il y a eu une erreur catch",
        e,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`d-flex flex-column card p-20 ${styles.recipeForm}`}
    >
      <h2 className="mb-20">Ajouter une recette</h2>
      <div className="d-flex flex-column mb-20">
        <label>Titre de la recette</label>
        <input {...register("title")} type="text" />
        {errors.title && <p className="form-error">{errors.title.message}</p>}
      </div>
      <div className="d-flex flex-column mb-20">
        <label>Image de la recette</label>
        <input {...register("image")} type="text" />
        {errors.image && <p className="form-error">{errors.image.message}</p>}
      </div>
      {errors.generic && <p className="form-error">{errors.generic.message}</p>}
      <div>
        <button disabled={isSubmitting} className="btn btn-primary">
          Sauvegarder
        </button>
      </div>
    </form>
  );
}

export default AdminRecipesForm;

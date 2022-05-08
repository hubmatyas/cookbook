import { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";

const URL = "http://localhost:5000/recipes";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Recipes = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setRecipes(data.recipes));
  }, []);

  console.log(recipes);

  return (
    <div className="recipes-wrapper">
      {recipes &&
        recipes.map((recipe, i) => (
          <div className="recipe-promo" key={i}>
            <Recipe recipe={recipe} />
          </div>
        ))}
    </div>
  );
};

export default Recipes;

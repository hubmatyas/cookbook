import { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { ReactComponent as SearchIcon } from "../../res/icons/search.svg";

const URL = "http://localhost:5000/recipes";
let recipeResult = [];

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const RecipesList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <section className="itemsSection">
      <div className="wrapper">
        <div className="title-wrapper-flex">
          <h2 className="sectionTitle">
            {searchTerm != "" ? 'Vyhledávání: ' + searchTerm : 'Všechny recepty'}
          </h2>
            <div className="searchbar">
              <SearchIcon />
              <input 
              type="text" 
              placeholder="Vyhledávání..." 
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              />
            </div>
        </div>
        <div className="recipes-wrapper">
          {recipeResult = recipes && recipes.filter((recipe) => {
            if (searchTerm == "") {
              return recipe;
            } else if (recipe.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return recipe;
            } else {
              
            }
          }).map((recipe, i) => 
            <Recipe recipe={recipe} key={i}/>
          )}
          {!recipeResult || !recipeResult.length &&
            <h2 className="noresults">Nenašli jsme žádný recept&hellip;</h2>
          }
        </div>
      </div>
    </section>
  );
};

export default RecipesList;

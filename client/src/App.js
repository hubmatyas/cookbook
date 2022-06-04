import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import AddRecipe from "./components/Recipe/AddRecipe";
import RecipeUpdate from "./components/Recipe/RecipeUpdate";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import RecipesList from "./components/Recipe/RecipesList";
import IngredientsList from "./components/Ingredients/IngredientsList";
import IngredientUpdate from "./components/Ingredients/IngredientUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} exact>
            <Route path="/" element={<Home />} exact />
            <Route path="/add" element={<AddRecipe />} exact />
            <Route path="/recipes" element={<RecipesList />} exact />
            <Route path="/recipes/:id" element={<RecipeDetail />} exact />
            <Route path="/edit/:id" element={<RecipeUpdate />} exact />
            <Route path="/ingredients" element={<IngredientsList />} exact />
            <Route path="/ingredients/:id" element={<IngredientUpdate />} exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

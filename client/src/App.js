import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import AddRecipe from "./components/Recipe/AddRecipe";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import Recipes from "./components/Recipe/Recipes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} exact>
            <Route path="/" element={<Home />} exact />
            <Route path="/add" element={<AddRecipe />} exact />
            <Route path="/detail" element={<RecipeDetail />} exact />
            <Route path="/recipes" element={<Recipes />} exact />
            <Route path="/recipes/:id" element={<RecipeDetail />} exact />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

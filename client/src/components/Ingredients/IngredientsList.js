import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const IngredientsList = () => {

  const [ingredients, setIngredients] = useState();


  const URL = "http://localhost:5000/ingredients";

    const fetchHandler = async () => {
      return await axios.get(URL).then((res) => res.data);
    };

  useEffect(() => {

    fetchHandler().then((data) => setIngredients(data.ingredients));

  });


  return (
    <>
       <section className="subpage-wrapper">
       <div className="title-wrapper-flex">
            <h1 className="sectionTitle">Správa ingrediencí</h1>
            <Link to="/ingredients/add" className="btn nomargin">Přidat</Link>
        </div>
        <div className="wrapper ingredients-wrapper">
          {ingredients && ingredients.map((ingredient) =>
            <Link className="ingredient-promo" to={`/ingredients/edit/${ingredient._id}`} title="Upravit">
              <strong>{ ingredient.name }</strong><br />
              <span>Jednotka: <strong>{ ingredient.unit }</strong></span>
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default IngredientsList;

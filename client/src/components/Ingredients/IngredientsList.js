import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const IngredientsList = () => {


  const id = useParams().id;

  const [ingredients, setIngredients] = useState();


  const URL = "http://localhost:5000/ingredients";

    const fetchHandler = async () => {
      return await axios.get(URL).then((res) => res.data);
    };

  useEffect(() => {
    window.scrollTo(0,0)

    fetchHandler().then((data) => setIngredients(data.ingredients));

  });


  return (
    <>
      <header>
        <h1 className="product-title"></h1>
        <p className="product-description"></p>
      </header>
      <section className="container">
        <div className="wrapper ingredients-wrapper">
          {ingredients && ingredients.map((ingredient) =>
            <Link className="ingredient-promo" to={`/ingredients/${ingredient._id}`} title="Upravit">
              <strong>{ ingredient.name }</strong><br />
              <span>Unit: <strong>{ ingredient.unit }</strong></span>
            </Link>
          )}
         
        </div>
      </section>
    </>
  );
};

export default IngredientsList;

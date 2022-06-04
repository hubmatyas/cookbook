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
       <section className="subpage-wrapper">
       <div className="title-wrapper-flex">
            <h1 className="sectionTitle">Správa ingrediencí</h1>
            <Link to="/ingredients/add" className="btn nomargin">Přidat</Link>
        </div>
        <div className="wrapper ingredients-wrapper">
          {ingredients && ingredients.map((ingredient) =>
            <Link className="ingredient-promo" to={`/ingredients/${ingredient._id}`} title="Upravit">
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

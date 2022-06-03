import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Ingredients = () => {


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
        <div className="wrapper">
          {ingredients && ingredients.map((ingredient) =>
            <>
              <p>{ingredient.name}</p>
              <p>{ingredient.unit}</p>
              <br />
            </>
          )}
         
        </div>
      </section>
    </>
  );
};

export default Ingredients;

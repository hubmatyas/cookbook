import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddRecipe = () => {
  const history = useNavigate();

  const [ingredients, setIngredients] = useState();

  const URL = "http://localhost:5000/ingredients";

  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

  useEffect(() => {
    fetchHandler().then((data) => setIngredients(data.ingredients));
  }, []);

  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    image: "",
    servingCount: "",
    prepTime: "",
    ingredient: "",
    category: "",
    difficulty: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addIngredientFields = (e) => {
    e.preventDefault();
    let newIngredientField = {name: "", unit: ""};

    setIngredientFields([...ingredientFields, newIngredientField])
  }

  const [ingredientFields, setIngredientFields] = useState([
    { name: "", unit: "" },
  ]);

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/recipes", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        prepTime: Number(inputs.prepTime),
        image: String(inputs.image),
        servingCount: String(inputs.servingCount),
        ingredients: String(inputs.ingredient),
        category: String(inputs.category),
        difficulty: String(inputs.difficulty),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/recipes"));
  };

  return (
    <section className="subpage-wrapper">
      <h1 className="sectionTitle">Přidat recept</h1>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Název receptu</label>
          <input
            name="name"
            type="text"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Autor</label>
          <input
            name="author"
            type="text"
            value={inputs.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-control wide">
          <label>Popisek</label>
          <textarea
            name="description"
            type="text"
            rows="8"
            cols="60"
            value={inputs.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>URL Obrázku</label>
          <input
            name="image"
            type="text"
            value={inputs.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Čas přípravy</label>
          <input
            name="prepTime"
            type="number"
            min="0"
            max="1000"
            value={inputs.prepTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Počet porcí</label>
          <input
            name="servingCount"
            type="number"
            value={inputs.servingCount}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Kategorie</label>
          <select
            name="category"
            type="text"
            value={inputs.category}
            onChange={handleChange}
          >
            <option>Předkrm</option>
            <option>Hlavní chod</option>
            <option>Dezert</option>
          </select>
        </div>
        <div className="form-control">
          <label>Obtížnost</label>
          <select name="difficulty" type="text" onChange={handleChange}>
            <option>Začátečník</option>
            <option>Pokročilý</option>
            <option>Expert</option>
          </select>
        </div>
        <div className="form-control full-width">
          <label>Ingredience</label>
          {ingredientFields.map((ingredientField, index) => {
              return (
                <div class="dynamic-inputs">
                <input type="number" min="0" max="10000" />
                <select 
                key={index}
                name="category"
                type="text"
                value={inputs.category}
                onChange={handleChange}
                >
                  {ingredients &&
                    ingredients.map((ingredient, index) => (
                      <option name={index} key={ingredient._id}>
                        {ingredient.name + ' (' + ingredient.unit + ')'}
                      </option>
                  ))}
                </select>
                </div>
              )
            })}
        </div>
          <button onClick={addIngredientFields}>Přidat ingredienci</button>
        <div className="btn-wrapper">
          <Link className="btn grey submit" to="/recipes">
            Zrušit
          </Link>
          <button type="submit" className="btn submit" onClick={handleSubmit}>
            Přidat
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddRecipe;

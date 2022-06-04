import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddRecipe = () => {
  const history = useNavigate();

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

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/recipes", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        prepTime: Number(inputs.prepTime),
        image: String(inputs.image),
        servingCount: String(inputs.servingCount),
        ingredient: String(inputs.ingredient),
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
        <form className="add-product-form" onSubmit={handleSubmit} >
          <div className="form-control">
            <label>Název</label>
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
          onChange={handleChange}>
            <option>Předkrm</option>
            <option>Hlavní chod</option>
            <option>Dezert</option>
          </select>
        </div>
        <div className="form-control">
          <label>Obtížnost</label>
          <select
          name="difficulty"
          type="text"
          onChange={handleChange}>
            <option>Začátečník</option>
            <option>Pokročilý</option>
            <option>Expert</option>
          </select>
        </div>
        <Link className="btn grey submit" to="/recipes">
          Zrušit
        </Link>
        <button type="submit" className="btn submit" onClick={handleSubmit}>
          Přidat
        </button>
      </form>
    </section>
  );
};

export default AddRecipe;

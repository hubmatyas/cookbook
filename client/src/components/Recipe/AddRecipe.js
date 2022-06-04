import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddRecipe = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    rating: "",
    image: "",
    servingCount: "",
    prepTime: "",
    ingredient: "",
    category: "",
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
        rating: Number(inputs.rating),
        prepTime: Number(inputs.prepTime),
        image: String(inputs.image),
        servingCount: String(inputs.servingCount),
        ingredient: String(inputs.ingredient),
        category: String(inputs.category),
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
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label>Author</label>
            <input
              name="author"
              type="text"
              value={inputs.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-control wide">
            <label>Description</label>
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
          <label>Image</label>
          <input
            name="image"
            type="text"
            value={inputs.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Rating</label>
          <input
            name="rating"
            type="number"
            value={inputs.rating}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Čas přípravy</label>
          <input
            name="prepTime"
            type="number"
            value={inputs.rating}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Serving count</label>
          <input
            name="servingCount"
            type="number"
            value={inputs.servingCount}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label>Serving count</label>
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
        <Link className="btn grey submit" to="/recipes">
          Cancel
        </Link>
        <button type="submit" className="btn submit" onClick={handleSubmit}>
          Add recipe
        </button>
      </form>
    </section>
  );
};

export default AddRecipe;

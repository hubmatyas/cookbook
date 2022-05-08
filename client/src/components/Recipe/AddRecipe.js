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
        image: String(inputs.image),
        servingCount: String(inputs.servingCount),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/recipes"));
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
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
      <div className="form-control">
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
        <label>Serving count</label>
        <input
          name="servingCount"
          type="number"
          value={inputs.servingCount}
          onChange={handleChange}
        />
      </div>
      <Link type="submit" class="btn grey submit" to="/recipes">
        Cancel
      </Link>
      <button type="submit" class="btn submit">
        Add recipe
      </button>
    </form>
  );
};

export default AddRecipe;

import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

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
      })
      .then((res) => res.data);
  };

  const [ingredientFields, setIngredientFields] = useState([
    { id: uuidv4(), ingredientName: '', ingredientUnit: '', ingredientUnitCount: '' },
  ]);

  const handleChangeInput = (id, event) => {
    const newIngredientFields = ingredientFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setIngredientFields(newIngredientFields);
  }

  const handleAddIngredientFields = () => {
    setIngredientFields([...ingredientFields, { id: uuidv4(),  ingredientName: '', ingredientUnit: '', ingredientUnitCount: '' }])
  }

  const handleRemoveIngredientFields = id => {
    const values  = [...ingredientFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setIngredientFields(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/recipes"));
  };

  return (
    <section className="subpage-wrapper">
      <h1 className="sectionTitle">Přidat recept</h1>
        <form className="add-recipe-form" /*onSubmit={handleSubmit} */>
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
          <label>Ingredients</label>
         {ingredientFields.map(ingredientField => (
            <div className="ingredient duplicable" key={ingredientField.id}>
            <input
              name="ingredientName"
              type="number"
              value={inputs.rating}
              onChange={event => handleChangeInput(ingredientField.id, event)}
            />
            <select name="ingredientUnit">
              <option value="g">gram</option>
              <option value="ml">mililitr</option>
            </select>
            <input
              name="ingredientUnitCount"
              type="number"
              value={inputs.rating}
              onChange={event => handleChangeInput(ingredientField.id, event)}
            />
            <button onClick={handleAddIngredientFields}>Přidat pole</button>
            <button onClick={handleRemoveIngredientFields(ingredientField.id)}>Odebrat pole</button>
          </div>
         ))}
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

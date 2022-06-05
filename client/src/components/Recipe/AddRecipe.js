import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from '../../res/icons/trash.svg'

const AddRecipe = () => {
  const history = useNavigate();

  const [ingredients, setIngredients] = useState([]);


  const [ingredientFields, setIngredientFields] = useState([
    { ingredientName: "", ingredientCount: "" },
  ]);



  const fetchHandler = async () => {
    return await axios.get("http://localhost:5000/ingredients").then((res) => res.data);
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
    category: "",
    difficulty: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleIngredientChange = (e, i) => {
    let ingredientData = [...ingredientFields];
    ingredientData[i][e.target.name] = e.target.value;
    setInputs((prevState) => ({
      ...prevState,
      
    }));
    setIngredientFields(ingredientData);
 }

  const addIngredientFields = (e) => {
    e.preventDefault();
    let newIngredientField = {ingredientName: "", ingredientCount: ""};

    setIngredientFields([...ingredientFields, newIngredientField]);
  }

  const removeIngredientField = (e, i) => {
    e.preventDefault();
    let ingredientData = [...ingredientFields];
    ingredientData.splice(i, 1)
    setIngredientFields(ingredientData)

  }


  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/recipes", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        prepTime: Number(inputs.prepTime),
        chodenIngredients: Array(inputs.ingredientFields),
        image: String(inputs.image),
        servingCount: String(inputs.servingCount),
        category: String(inputs.category),
        difficulty: String(inputs.difficulty),
      })
      .then((res) => res.data)
      .then((res) => console.table(res.data));
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
        <div className="form-control">
          <label>Obtížnost</label>
          <select name="difficulty" type="text" onChange={handleChange}>
            <option>Vyberte obtížnost</option>
            <option>Začátečník</option>
            <option>Pokročilý</option>
            <option>Expert</option>
          </select>
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
          <label>Čas přípravy <span>(v minutách)</span></label>
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
            <option>Vyberte kategorii</option>
            <option>Předkrm</option>
            <option>Hlavní chod</option>
            <option>Dezert</option>
          </select>
        </div>
        <div className="form-control full-width">
          <label>Ingredience</label>
          {ingredientFields.map((ingredientField, i) => {
              return (
                <div className="dynamic-inputs" key={i}>
                  <i>{i + 1}</i>
                  <input
                  name="ingredientCount"
                  type="number"
                  min="0"
                  max="10000"
                  onChange={e => handleIngredientChange(e, i)}
                  value={ingredientField.ingredientCount}
                  />
                  <select 
                  name="ingredientName"
                  type="text"
                  onChange={e => handleIngredientChange(e, i)}
                  value={ingredientField.ingredientName}
                  >
                    {ingredients &&
                      ingredients.map((ingredient, i) => (
                        <option name={i} key={ingredient._id} onChange={e => handleIngredientChange(e, i)}>
                          {ingredient.name + ' (' + ingredient.unit + ')'}
                        </option>
                    ))}
                  </select>
                  <button onClick={(e) => removeIngredientField(e, i)} className="btn nomargin btn-icon red"><DeleteIcon /></button>
                </div>
              )
            })}
          <button className="btn btn-round" onClick={addIngredientFields}>Přidat ingredienci</button>
        </div>
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

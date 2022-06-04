import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const RecipeDetail = () => {

  const [inputs, setInputs] = useState({});

  const id = useParams().id;

  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0)

    // Fetch data from database using axios
    const fetchHandler = async (req, res, next) => {
      await axios
        .get(`http://localhost:5000/recipes/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.recipe));
    };
    fetchHandler().then((data) => setInputs(data.recipe));
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/recipes/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        image: String(inputs.image),
        servingCount: String(inputs.servingCount),
        difficulty: String(inputs.difficulty),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/recipes"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="container subpage-wrapper">
        <div className="wrapper">
          {inputs && (
            <form className="add-product-form" onSubmit={handleSubmit}>
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
              <div className="form-control">
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
                <label>Počet porcí</label>
                <input
                  name="servingCount"
                  type="number"
                  min="0"
                  max="1000"
                  value={inputs.servingCount}
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
                 value={inputs.category}
                 onChange={handleChange}>
                   <option>Začátečník</option>
                   <option>Pokročilý</option>
                   <option>Expert</option>
                 </select>
               </div>
              <button type="submit" class="btn submit">
                Aktualizovat
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default RecipeDetail;

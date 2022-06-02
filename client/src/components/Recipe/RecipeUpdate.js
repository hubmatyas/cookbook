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
        rating: Number(inputs.rating),
        image: String(inputs.image),
        servingCount: String(inputs.servingCount),
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
      <header>
        <h1 className="product-title"></h1>
        <p className="product-description"></p>
      </header>
      <section className="container">
        <div className="wrapper">
          {inputs && (
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
              <button type="submit" class="btn submit">
                Update recipe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default RecipeDetail;

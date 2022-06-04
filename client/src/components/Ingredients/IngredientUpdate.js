import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const IngredientUpdate = () => {

  const [inputs, setInputs] = useState({});

  const id = useParams().id;

  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0)

    // Fetch data from database using axios
    const fetchHandler = async (req, res, next) => {
      await axios
        .get(`http://localhost:5000/ingredients/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.ingredient));
    };
    fetchHandler().then((data) => setInputs(data.ingredient));
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/ingredients/${id}`, {
        name: String(inputs.name),
        unit: String(inputs.unit),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/ingredients"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="subpage-wrapper">
      <h1 className="sectionTitle">Úprava ingredience: { inputs.name }</h1>
          {inputs && (
            <form className="add-product-form" onSubmit={handleSubmit}>
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
                <label>Jednotka</label>
                <select
                  name="unit"
                  type="text"
                  value={inputs.unit}
                  onChange={handleChange}
                >
                    <option>g</option>
                    <option>ml</option>
                    <option>ks</option>
                </select>
              </div>
              <button type="submit" class="btn submit">
                Aktualizovat
              </button>
            </form>
          )}
      </section>
    </>
  );
};

export default IngredientUpdate;

import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ReactComponent as DeleteIcon } from '../../res/icons/trash.svg'

const IngredientUpdate = () => {

  const [inputs, setInputs] = useState({});

  const id = useParams().id;

  const history = useNavigate();

  const deleteHandler = async (ingredientsName) => {
    await axios
      .delete(`http://localhost:5000/ingredients/${id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/ingredients"));

      alert('ingredience byla odstraněna!')
  };

  useEffect(() => {
    // Fetch data from database using axios
    const fetchHandler = async (req, res, next) => {
      await axios
        .get(`http://localhost:5000/ingredients/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.ingredient));
    };
    fetchHandler().then((data) => setInputs(data.ingredient));
  }, [id]);

  const sendRequest = async (targetId) => {
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
      <div className="title-wrapper-flex">
            <h1 className="sectionTitle">Úprava ingredience: { inputs.name }</h1>
        </div>
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
              <div className="btn-wrapper">
              <button onClick={deleteHandler} className="btn btn-icon red"><DeleteIcon /></button>
              <button type="submit" class="btn submit">
                Aktualizovat
              </button>
              </div>
            </form>
          )}
      </section>
    </>
  );
};

export default IngredientUpdate;

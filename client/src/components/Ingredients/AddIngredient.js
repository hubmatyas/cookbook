import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddIngredient = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    unit: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/ingradients", {
        name: String(inputs.name),
        unit: String(inputs.unit),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/ingredients"));
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

export default AddIngredient;

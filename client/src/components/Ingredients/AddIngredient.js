import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddIngredient = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    unit: "",
    count: ""
  });


  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/ingredients", {
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
        <div className="title-wrapper-flex">
            <h1 className="sectionTitle">Přidat ingredienci</h1>
        </div>
        <form className="add-product-form" onSubmit={handleSubmit} >
        <div className="form-control">
            <label>Název ingredience</label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label>Jednotka</label>
            <select
              name="unit"
              onChange={handleChange}
              type="text"
              value={inputs.unit}
              required
            >
                <option>Vyberte jednotku</option>
                <option value="g">g</option>
                <option value="ml">ml</option>
                <option value="ks">ks</option>
            </select>
        </div>
        <div className="btn-wrapper">
            <Link className="btn grey" to="/ingredients">
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

export default AddIngredient;

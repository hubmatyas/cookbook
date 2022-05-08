import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Recipe = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, servingCount, rating, image } =
    props.recipe;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/recipes/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/recipes"));
  };

  return (
    <>
      <img src={image} alt={name} />
      <p>By {author}</p>
      <h3>{name}</h3>
      <p className="desc">{description}</p>
      <p>{servingCount}</p>
      <p>{rating}</p>
      <Link className="btn" to={`/recipes/${_id}`}>
        Update
      </Link>
      <Link onClick={deleteHandler} className="btn" to="">
        Delete
      </Link>
    </>
  );
};

export default Recipe;

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as EditIcon } from '../../res/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../res/icons/trash.svg'

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
      <img className="thumb" src={image} alt={name} />
      <p>Autor: {author}</p>
      <h3>{name}</h3>
      <p className="desc">{description}</p>
      <p>Počet porcí: {servingCount}</p>
      <p>Hodnocení: {rating}</p>
      <div className="tools">
        <Link className="btn" to={`/recipes/${_id}`}>
          <EditIcon />
        </Link>
        <Link onClick={deleteHandler} className="btn red" to="">
          <DeleteIcon />
        </Link>
      </div>
    </>
  );
};

export default Recipe;

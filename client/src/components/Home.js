import { Link } from "react-router-dom";
import RecipesList from "./Recipe/RecipesList";

const Home = () => {

  return (
    <>
      <header className="landing-header">
        <div className="wrapper">
          <div className="headerBox">
            <h1 className="title">
              Přispějte do naší databáze
              <br />
              řeckých receptů!
            </h1>
            <Link to="/recipes/add" className="btn">
              Přidat recept
            </Link>
          </div>
        </div>
      </header>

      <RecipesList />
    </>
  );
};

export default Home;

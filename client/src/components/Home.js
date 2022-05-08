import { Link } from "react-router-dom";
import Recipes from "./Recipe/Recipes";

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
            <Link to="/add" className="btn">
              Přidat recept
            </Link>
          </div>
        </div>
      </header>

      <section className="itemsSection">
        <div className="wrapper">
          <h2 className="sectionTitle">Všechny recepty</h2>
          <Recipes />
        </div>
      </section>
    </>
  );
};

export default Home;

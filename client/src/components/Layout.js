import { useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import logo from "../res/logo.svg";

const Layout = () => {


  const location = useLocation();
  useEffect(() => {
    // Go to the top of the page when location changes
    window.scrollTo(0,0);
  }, [location])
  

  return (
    <>
      <nav>
        <div className="wrapper">
          <a href="/" className="logo">
            <img src={logo} alt="logo" width="90" height="45" />
          </a>
          <ul className="navLinks">
            <li>
              <NavLink to="/recipes">Recepty</NavLink>
            </li>
            <li>
              <NavLink to="/ingredients">Ingredience</NavLink>
            </li>
            <li>
              <NavLink to="/recipes/add">Přidat recept</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="wrapper">
          <p>
            Aplikace byla vytvořena v&nbsp;rámci předmětu Architektura
            Cloudových Aplikací
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;

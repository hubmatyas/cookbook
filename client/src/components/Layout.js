import { Outlet, NavLink } from "react-router-dom";
import logo from "../res/logo.svg";

const Layout = () => {
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
              <NavLink to="/add">Přidat recept</NavLink>
            </li>
            <li>
              <NavLink to="/">Odhlásit se</NavLink>
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

import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link className="navbar-brand mx-2" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/contact">
              Contact <span className="sr-only"></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

// Styling
import { ThemeButton, Logo, NavStyle } from "../styles";
import { Link, NavLink } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/" className="navbar-brand">
        {" "}
        <img
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          height="100px"
        />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavStyle to="/" className="nav-item" style={{ padding: "0.25em 1em" }}>
          Home
        </NavStyle>
        <Link
          to="/products"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Products
        </Link>

        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;

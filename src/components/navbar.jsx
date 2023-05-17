import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flexblock">
      <div className="flexblock pageWidth">
        <img className="logo" src={logo}></img>
        <ul className="flexblock">
          <li>
            <Link to={"/"}>Strona główna</Link>
          </li>
          <li>
            <Link to={"/aktualności"}>Aktualności</Link>
          </li>
          <li>
            <Link to={"/oferty"}>Oferty</Link>
          </li>
          <li>
            <Link to={"/kontakt"}>Kontakt</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

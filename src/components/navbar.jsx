import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { memo } from "react";
import axios from "axios";

const Navbar = memo((props) => {
  const { isLogged, setIsLogged } = props;
  useEffect(() => {
    async function Authenticate() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:5000/authentication",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setIsLogged(true);
      } catch (err) {
        console.log(err);
      }
    }
    Authenticate();
  }, []);
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
          {isLogged && (
            <li>
              <Link to={"/panel"}>Panel</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;

import logo from "../assets/Logo.png";
import hamburger from "../assets/hamburger.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { memo } from "react";
import axios from "axios";
import { useState } from "react";

const Navbar = memo((props) => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const { isLogged, setIsLogged } = props;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };

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
        <img className="logo-desktop logo" src={logo}></img>
        <ul className={isActive ? "flexblock active" : "flexblock"}>
          <li className="nav-toogle">
            <img className="logo" src={logo}></img>
            <img
              className="burger"
              src={hamburger}
              onClick={() => {
                setActive(!isActive);
              }}
            ></img>
          </li>
          <li className={isActive ? "nav-link active" : "nav-link"}>
            <Link to={"/"}>Strona główna</Link>
          </li>
          <li className={isActive ? "nav-link active" : "nav-link"}>
            <Link to={"/aktualności"}>Aktualności</Link>
          </li>
          <li className={isActive ? "nav-link active" : "nav-link"}>
            <Link to={"/oferty"}>Oferty</Link>
          </li>
          <li className={isActive ? "nav-link active" : "nav-link"}>
            <Link to={"/kontakt"}>Kontakt</Link>
          </li>
          {isLogged && (
            <li className={isActive ? "nav-link active" : "nav-link"}>
              <Link to={"/panel"}>Panel</Link>
            </li>
          )}
          {isLogged && (
            <li className={isActive ? "nav-link active" : "nav-link"}>
              <a className="send-input" onClick={() => handleLogout()}>
                Wyloguj się
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;

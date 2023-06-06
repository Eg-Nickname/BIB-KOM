import "./Login.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  async function login() {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: data.username,
        password: data.password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      console.log(err.response.data.msg);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let { username, password } = data;
    username = username.trim();
    password = password.trim();
    login();
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  return (
    <div className="site-wrapper">
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            className="text-input"
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <h2>Hasło</h2>
          <input
            className="text-input"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <button className="send-input">Zaloguj sie</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

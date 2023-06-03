import "./Login.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
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
    console.log(username);
    console.log(password);
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
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button>LOGIN</button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;

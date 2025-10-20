import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../login.css";
import bg from "../assets/bg.jpg";
import girl from "../assets/girl.png";
import trees from "../assets/trees.png";
import leaf1 from "../assets/leaf_01.png";
import leaf2 from "../assets/leaf_02.png";
import leaf3 from "../assets/leaf_03.png";
import leaf4 from "../assets/leaf_04.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login handler running", { email: email.trim() });

    const userStr = localStorage.getItem("user");
    if (!userStr) {
      alert("No user found! Please sign up first.");
      return;
    }

    try {
    const user = JSON.parse(userStr);

    if (email.trim() === (user.email ?? "") && password === (user.password ?? "")) {
      console.log("Credentials OK — calling navigate");
      alert(`Welcome back, ${user.name}! 🎉`);
      localStorage.setItem("isLoggedIn", "true");
      // redirect to landing page or dashboard
      navigate("/app", { replace: true });

      // fallback: if navigate didn't change the hash, force it after a tiny delay
      setTimeout(() => {
        if (window.location.hash !== "#/app") {
          console.log("Fallback: forcing hash to #/app");
          window.location.hash = "#/app";
        }
      }, 50);
    } else {
      console.log("Credentials mismatch", { entered: email.trim(), stored: user.email });
      alert("Invalid email or password 😔");
    }
  } catch (err) {
    console.error("Failed parsing user from localStorage", err);
    alert("Stored user data is invalid. Please sign up again.");
  }
  };

  return (
    <section>
      <div className="leaves">
        <div className="set">
          <div><img src={leaf1} alt="leaf1" /></div>
          <div><img src={leaf2} alt="leaf2" /></div>
          <div><img src={leaf3} alt="leaf3" /></div>
          <div><img src={leaf4} alt="leaf4" /></div>
          <div><img src={leaf1} alt="leaf1" /></div>
          <div><img src={leaf2} alt="leaf2" /></div>
          <div><img src={leaf3} alt="leaf3" /></div>
          <div><img src={leaf4} alt="leaf4" /></div>
        </div>
      </div>

      <img src={bg} className="bg" alt="background" />
      <img src={girl} className="girl" alt="girl" />
      <img src={trees} className="trees" alt="trees" />

      <div className="login">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="inputBox">
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input type="submit" value="Login" id="btn" />
          </div>
        </form>
        <div className="group">
          <Link to="/forget-password">Forget Password</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;

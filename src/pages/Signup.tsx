import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../login.css"; // same CSS for styling
import bg from "../assets/bg.jpg";
import girl from "../assets/girl.png";
import trees from "../assets/trees.png";
import leaf1 from "../assets/leaf_01.png";
import leaf2 from "../assets/leaf_02.png";
import leaf3 from "../assets/leaf_03.png";
import leaf4 from "../assets/leaf_04.png";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Save user data to localStorage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! 🎉");
    // Optional: redirect to login page
    navigate("/login");
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
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            <input type="submit" value="Sign Up" id="btn" />
          </div>
        </form>
        <div className="group">
        <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;

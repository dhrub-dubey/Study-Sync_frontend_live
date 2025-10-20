import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../login.css";
import bg from "../assets/bg.jpg";
import girl from "../assets/girl.png";
import trees from "../assets/trees.png";
import leaf1 from "../assets/leaf_01.png";
import leaf2 from "../assets/leaf_02.png";
import leaf3 from "../assets/leaf_03.png";
import leaf4 from "../assets/leaf_04.png";

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleRetrieve = (e: React.FormEvent) => {
    e.preventDefault();
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      alert("No user found! Please sign up first.");
      return;
    }
    const user = JSON.parse(userStr);
    if (email === user.email) {
      alert(`Your password is: ${user.password}`);
    } else {
      alert("Email not found 😔");
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
        <h2>Forget Password</h2>
        <form onSubmit={handleRetrieve}>
          <div className="inputBox">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input type="submit" value="Retrieve Password" id="btn" />
          </div>
        </form>
        <div className="group">
          <Link to="/login">Back to Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

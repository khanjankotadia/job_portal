import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const submitHandle = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      "http://localhost:2105/backend/Login?email=" +
        email +
        "&password=" +
        password
    );
    if (res.data > 0) {
      sessionStorage.setItem("company_id", res.data);
      navigate("/");
      window.location.reload();
    } else {
      alert("INVALID USER ID OR PASSWORD");
    }
  };
  return (
    <div>
      <div className="form-signup">
        <div className="signup-form">
          <h2>SignIn</h2>
          <form onSubmit={""}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" onClick={submitHandle}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

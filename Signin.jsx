import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState(1);
  const navigate = useNavigate();
  const submitHandle = async (e) => {
    e.preventDefault();
    let res = "";
    if (role == 1) {
      res = await axios.get(
        "http://localhost:2105/backend/Login?email=" +
          email +
          "&password=" +
          password
      );
    } else {
      res = await axios.get(
        "http://localhost:2105/backend/Companylogin?email=" +
          email +
          "&password=" +
          password
      );
    }

    if (res.data == "0") {
      alert("INVALID USER ID OR PASSWORD");
    } else {
      sessionStorage.setItem("token", res.data);
      sessionStorage.setItem("role_id", role);
      navigate("/");
      window.location.reload();
    }
  };
  return (
    <div>
      <div className="form-signup">
        <div className="signup-form">
          <h2>SignIn</h2>
          <form onSubmit={""}>
            {/* <div>
              <label>select:</label>
              <select
                type="email"
                name="email"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value={"1"}>Admin</option>
                <option value={"2"}>User</option>
              </select>
            </div> */}
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

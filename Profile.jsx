import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [username, setName] = useState();
  const [auth, setAuth] = useState(sessionStorage.getItem("token"));
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [resume, setResume] = useState();
  const [status, setStatus] = useState(1);
  useEffect(() => {
    if (auth) {
      fatchUserName();
    }
  }, []);
  const fatchUserName = async () => {
    const res = await axios.get(
      "http://localhost:2105/backend/Manageuser/" + auth
    );
    setName(res.data.user_name);
    setPassword(res.data.password);
    setEmail(res.data.email);
    setResume(res.data.resume);
    setMobile(res.data.mobile);
    setStatus(res.data.status);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_name", username);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("resume", resume);
    formData.append("status", status);

    const res = await axios.put(
      "http://localhost:2105/backend/Manageuser/" + auth,
      formData
    );
    alert(res.data);
  };
  return (
    <div>
      <div className="form-signup">
        <div className="signup-form">
          <h2>Profile</h2>
          <form onSubmit={""}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                onChange={(e) => setName(e.target.value)}
                defaultValue={username}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={email}
                required
              />
            </div>
            <div>
              <label>Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                defaultValue={mobile}
                required
              />
            </div>
            <div class="col-12">
              <label for="inputPassword4">Resume :</label>
              <input
                type="file"
                id="inputPassword4"
                onChange={(e) => setResume(e.target.files[0])}
                defaultValue={resume}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                defaultValue={password}
                required
              />
            </div>
            <button type="submit" onClick={(e) => submitHandle(e)}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

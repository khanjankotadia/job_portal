import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Signup() {
  const [user_name, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [mobileError, setMobileError] = useState("");
  const [resume, setResume] = useState();
  const [status, setStatus] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    if (id) {
      fatchUsers();
    }
  }, []);

  const fatchUsers = async () => {
    const res = await axios.get(
      "http://localhost:2105/backend/Manageuser/" + id
    );
    console.log(res);
    setUsername(res.data.user_name);
    setPassword(res.data.password);
    setEmail(res.data.email);
    setMobile(res.data.mobile);
    setResume(res.data.resume);
    setStatus(res.data.status);
  };
  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobile(value);

      // Validate if the mobile number is exactly 10 digits
      if (value.length === 10) {
        setMobileError("");
      } else {
        setMobileError("Mobile number must be exactly 10 digits long.");
      }
    } else {
      setMobileError("");
    }
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("user_name", user_name);
    formdata.append("password", password);
    formdata.append("email", email);
    formdata.append("mobile", mobile);
    formdata.append("resume", resume);
    formdata.append("status", status);

    if (!mobileError) {
      console.log("Form submitted with mobile number:", mobile);
    } else {
      console.log("Form contains errors");
    }
    if (id) {
      const res = await axios.put(
        "http://localhost:2105/backend/Manageuser/" + id,
        formdata
      );
      alert(res.data);
    } else {
      const res = await axios.post(
        "http://localhost:2105/backend/Manageuser",
        formdata
      );
      alert(res.data);
    }
  };
  return (
    <div>
      <div className="form-signup">
        <div className="signup-form">
          <h2>Signup</h2>
          <form onSubmit={""}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                defaultValue={user_name}
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
                onChange={handleMobileChange}
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

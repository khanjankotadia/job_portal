import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Profile() {
  const [Categories, setCategory] = useState([]);
  const [company, setName] = useState();
  const [company_name, setCompanyname] = useState();
  const [password, setPassword] = useState();
  const [category_id, setCategoryid] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [mobileError, setMobileError] = useState("");
  const [status, setStatus] = useState(1);
  const [entryby, setEntryby] = useState();
  const [role, setRole] = useState();
  const { id } = useParams();
  const [auth, setAuth] = useState(sessionStorage.getItem("company_name"));
  useEffect(() => {
    if (auth) {
      fatchCompany();
    }
  }, []);
  const fatchCompany = async () => {
    const res = await axios.get(
      "http://localhost:2105/backend/Managecompany/" + auth
    );
    setName(res.data.company_name);
    setCategoryid(res.data.category_id);
    setAddress(res.data.setAddress);
    setEmail(res.data.email);
    setMobile(res.data.mobile);
    setStatus(res.data.status);
    setEntryby(res.data.entryby);
    setRole(res.data.role);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("user_name", username);
    // formData.append("password", password);
    // formData.append("email", email);
    // formData.append("mobile", mobile);
    // formData.append("resume", resume);
    // formData.append("status", status);

    const res = await axios.put(
      "http://localhost:2105/backend/Manageuser/" + auth
      //   formData
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
                defaultValue={company_name}
                required
              />
            </div>
            <div>
              <label>Select Category:</label>
              <select
                id="category"
                name="category"
                value={category_id}
                onChange={(e) => setCategoryid(e.target.value)}
                defaultValue={category_id}
              >
                <option value="">Select Category</option>
                {Categories.map((obj) => (
                  <option value={obj.category_id}>{obj.category_name}</option>
                ))}
              </select>
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
              <label for="inputPassword4">Address :</label>
              <input
                type="text"
                id="inputPassword4"
                onChange={(e) => setAddress(e.target.value)}
                defaultValue={address}
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Companysignup() {
  const [Categories, setCategory] = useState([]);
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

  useEffect(() => {
    console.log(id);
    fatchCategory();
    if (id) {
      const fatchCompany = async () => {
        if (id) {
          const res = await axios.get(
            "http://localhost:2105/backend/Managecompany/" + id
          );
          setCompanyname(res.data.company_name);
          setCategoryid(res.data.category_id);
          setAddress(res.data.setAddress);
          setEmail(res.data.email);
          setMobile(res.data.mobile);
          setStatus(res.data.status);
          setEntryby(res.data.entryby);
          setRole(res.data.role);
        }
      };
      fatchCompany();
    }
  }, []);

  const fatchCategory = async () => {
    const res = await axios.get(
      "http://localhost:2105/backend/Companycategory"
    );
    setCategory(res.data);
    console.log(res.data);
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

  const submitHandle = async () => {
    if (!mobileError) {
      console.log("Form submitted with mobile number:", mobile);
    } else {
      console.log("Form contains errors");
    }
    if (id) {
      const res = await axios.put(
        "http://localhost:2105/backend/Managecompany/" + id,
        {
          company_name,
          category_id,
          address,
          email,
          mobile,
          status,
          entryby,
          role,
        }
      );
      alert(res.data);
    } else {
      const res = await axios.post(
        "http://localhost:2105/backend/Managecompany",
        {
          company_name,
          category_id,
          address,
          email,
          mobile,
          status,
          entryby,
          role,
        }
      );
      alert(res.data);
    }
  };
  return (
    <div>
      <div className="form-signup">
        <div className="signup-form">
          <h2>Company Signup</h2>
          <form onSubmit={""}>
            <div>
              <label>Company name:</label>
              <input
                type="text"
                name="username"
                onChange={(e) => setCompanyname(e.target.value)}
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
                onChange={handleMobileChange}
                required
              />
            </div>
            <div>
              <label>Address:</label>
              <textarea
                type="text"
                name="mobile"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
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

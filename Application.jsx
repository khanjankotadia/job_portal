import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Application() {
  const [application, setApplication] = useState();
  const [job_category_id, setJobcategoryid] = useState();
  const [user, setUser] = useState([]);
  const [user_id, setUserid] = useState();
  const [email, setEmail] = useState();
  const [category, setCategoryname] = useState([]);
  const [resume, setResume] = useState();
  const [role, setRole] = useState(1);
  const [status, setStatus] = useState(1);
  const { id } = useParams();
  const [auth, setAuth] = useState(sessionStorage.getItem("user_id"));

  useEffect(() => {
    console.log(id);
    fatchJobcategory();
    fatchUser();
    if (id) {
      const fatchJobapp = async () => {
        if (id) {
          const res = await axios.get(
            "http://localhost:2105/backend/Jobapply/" + id
          );
          setApplication(res.data.application);
          setJobcategoryid(res.data.job_category_id);
          setUser(res.data.user);
          setEmail(res.data.email);
          setResume(res.data.resume);
          setStatus(res.data.status);
          setRole(res.data.role);
        }
      };
      fatchJobapp();
    }
  }, []);
  const fatchJobcategory = async () => {
    const res = await axios.get("http://localhost:2105/backend/Jobcategory");
    setCategoryname(res.data);
    console.log(res.data);
  };
  const fatchUser = async () => {
    const res = await axios.get("http://localhost:2105/backend/Manageuser");
    setUser(res.data);
    console.log(res.data);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("application", application);
    formdata.append("job_category_id", job_category_id);
    formdata.append("user_id", user_id);
    formdata.append("email", email);
    formdata.append("resume", resume);
    formdata.append("role", role);
    formdata.append("status", status);

    if (id) {
      const res = await axios.put(
        "http://localhost:2105/backend/Jobapply/" + id,
        formdata
      );
      alert(res.data);
    } else {
      const res = await axios.post(
        "http://localhost:2105/backend/Jobapply",
        formdata
      );
      alert(res.data);
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add JobApplication</h5>

            <form class="row g-3">
              <div class="col-12">
                <label for="category" class="form-label">
                  Category Name :
                </label>
                <select
                  id="category"
                  class="form-control"
                  name="category"
                  value={job_category_id}
                  onChange={(e) => setJobcategoryid(e.target.value)}
                  defaultValue={job_category_id}
                >
                  <option value="">Select Category</option>
                  {category.map((obj) => (
                    <option value={obj.job_category_id}>
                      {obj.category_name}
                    </option>
                  ))}
                </select>
              </div>
              <div class="col-12">
                <label for="category" class="form-label">
                  User Name :
                </label>
                <select
                  id="category"
                  class="form-control"
                  name="category"
                  value={auth}
                  onChange={(e) => setAuth(e.target.value)}
                  defaultValue={user_id}
                >
                  <option value="">Select Userid</option>
                  {user.map((obj) => (
                    <option value={obj.user_id}>{obj.user_name}</option>
                  ))}
                </select>
              </div>
              <div class="col-12">
                <label for="inputEmail4" class="form-label">
                  Email id :
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={email}
                />
              </div>
              <div class="col-12">
                <label for="inputPassword4" class="form-label">
                  Resume :
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="inputPassword4"
                  onChange={(e) => setResume(e.target.files[0])}
                  defaultValue={resume}
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Status :
                </label>
                <select
                  id="category"
                  class="form-control"
                  name="category"
                  onChange={(e) => setStatus(e.target.value)}
                  defaultValue={status}
                >
                  <option value={"active"}>Active</option>
                  <option value={"inactive"}>InActive</option>
                </select>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={(e) => submitHandle(e)}
                >
                  Submit
                </button>
                <button type="reset" class="btn btn-secondary">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

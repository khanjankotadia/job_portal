import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";

export default function Header() {
  const [OpenDropdown, setDropdownOpen] = useState();
  const [auth, setAuth] = useState(sessionStorage.getItem("token"));
  const [username, setName] = useState();
  const [companyname, setcompanyName] = useState();
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setDropdownOpen(!OpenDropdown);
  };

  useEffect(() => {
    if (auth) {
      fatchUserName();
      fatchCompanyName();
    }
  }, []);

  const fatchUserName = async () => {
    const res = await axios.get(
      "http://localhost:2105/backend/Manageuser/" + auth
    );
    setName(res.data.user_name);
  };
  const fatchCompanyName = async () => {
    const res = await axios.get(
      "http://localhost:2105/backend/Managecompany/" + auth
    );
    setcompanyName(res.data.company_name);
  };

  const signout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <header class="">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand">
              <Link to={"/"}>
                <h2>
                  Job Agency <em>Website</em>
                </h2>
              </Link>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                  {/* <a class="nav-link"> */}
                  <NavLink to={"/"} className="nav-link">
                    Home
                  </NavLink>
                  <span class="sr-only">(current)</span>
                  {/* </a> */}
                </li>

                <li class="nav-item">
                  {/* <a class="nav-link"> */}
                  <NavLink to={"/jobs"} className="nav-link">
                    Jobs
                  </NavLink>
                  {/* </a> */}
                </li>

                <li class="nav-item">
                  {/* <a class="nav-link" > */}
                  <NavLink to={"/aboutus"} className="nav-link">
                    About Us
                  </NavLink>
                  {/* </a> */}
                </li>

                <li class="nav-item">
                  {/* <a class="nav-link"> */}
                  <NavLink to={"/blog"} className="nav-link">
                    Blogs
                  </NavLink>
                  {/* </a> */}
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup={OpenDropdown ? "true" : "false"}
                    aria-expanded={OpenDropdown ? "true" : "false"}
                    onClick={toggleDropdown}
                  >
                    More
                  </a>
                  <div
                    className={`dropdown-menu ${OpenDropdown ? "show" : ""}`}
                  >
                    {/* <a className="dropdown-item"> */}
                    <NavLink to={"/team"} className="dropdown-item">
                      Team
                    </NavLink>
                    {/* </a> */}
                    {/* <a className="dropdown-item" href="testimonials"> */}
                    <NavLink to={"/testimonials"} className="dropdown-item">
                      Testimonials
                    </NavLink>
                    {/* </a> */}
                    {/* <a className="dropdown-item" href="terms"> */}
                    <NavLink to={"/terms"} className="dropdown-item">
                      Terms
                    </NavLink>
                    {/* </a> */}
                  </div>
                </li>

                <li class="nav-item">
                  {/* <a class="nav-link"> */}
                  <NavLink to={"/contactus"} className="nav-link">
                    Contact Us
                  </NavLink>
                  {/* </a> */}
                </li>
              </ul>
              {auth ? (
                <>
                  <button onClick={signout}>Sign Out</button>
                  <label style={{ color: "white" }}>{username}</label>
                </>
              ) : (
                <>
                  <button>
                    <Link to={"/signin"}>Sign In</Link>
                  </button>
                  <button>
                    <Link to={"/signup"}>Sign Up</Link>
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

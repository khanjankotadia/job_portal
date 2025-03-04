import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Jobs() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategoryname] = useState([]);
  const [job_category_id, setJobcategoryid] = useState();
  const [location, setLocation] = useState([]);
  const [auth, setAuth] = useState(sessionStorage.getItem("user_id"));
  const { id } = useParams();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [loading, setLoading] = useState(true);
  const [jobpost, setJobpost] = useState([]);
  const [job_title, setJobtitle] = useState();
  const [companies, setCompanies] = useState([]);
  const [company_id, setCompanyid] = useState();
  const [job_desc, setDescription] = useState();
  const [salary, setSalary] = useState();
  const [status, setStatus] = useState(1);

  useEffect(() => {
    fatchLocation();
    fatchJobcategory();
    // fatchJobpost();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fatchJobcategory = async () => {
    const res = await axios.get("http://localhost:2105/backend/Jobcategory");
    setCategoryname(res.data);
    console.log(res.data);
  };

  const fatchLocation = async () => {
    const res = await axios.get("http://localhost:2105/backend/Location");
    setLocation(res.data);
    console.log(res.data);
  };
  const handleSearch = async () => {
    const fatchJobpost = async () => {
      const res = await axios.get("http://localhost:2105/backend/Jobpost");
      setJobpost(res.data);
      console.log(res.data);
    };
    fatchJobpost();
  };
  return (
    <div>
      {loading && (
        <div id="preloader">
          <div className="jumper">
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
      <div
        className="page-heading about-heading header-text"
        style={{ backgroundImage: "url(assets/images/heading-6-1920x500.jpg)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <h4>Security / Protective Services Jobs</h4>

                <h2>Security Officer - Luxury Retail</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="drop">
        <select
          class="form-select form-select-sm"
          aria-label="Small select example"
        >
          <option value="">Select Category</option>
          {category.map((obj) => (
            <option value={obj.job_category_id}>{obj.category_name}</option>
          ))}
        </select>

        <select
          class="form-select form-select-sm"
          aria-label="Small select example"
        >
          <option value="">Select Location</option>
          {location.map((obj) => (
            <option value={obj.location}>{obj.location}</option>
          ))}
        </select>
        <button
          type="submit"
          id="form-submit"
          class="filled-button"
          onClick={handleSearch}
        >
          Go
        </button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company Name</th>
            <th scope="col">Job Title</th>
            <th scope="col">Category Name</th>
            <th scope="col">Description</th>
            <th scope="col">Location</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {jobpost.map((obj, i) => (
            <tr>
              <th scope="row">{++i}</th>

              <td>{obj.company_name}</td>
              <td>{obj.job_title}</td>
              <td>{obj.category_name}</td>
              <td>{obj.job_desc}</td>
              <td>{obj.location}</td>
              <td>{obj.salary}</td>
              <td>
                {auth ? (
                  <>
                    <button>
                      <Link to="/profile">Apply</Link>
                    </button>
                  </>
                ) : (
                  <button>
                    <Link to="/signup">Apply</Link>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="products">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-8">
              <p class="lead">
                {/* <i class="fa fa-map-marker"></i> London &nbsp;&nbsp;
                <i class="fa fa-calendar"></i> 20-06-2020 &nbsp;&nbsp;
                <i class="fa fa-file"></i> Contract */}
              </p>

              <br />
              <br />

              {/* <div class="form-group">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h5>
              </div> */}

              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                delectus totam non est excepturi expedita, illum vitae vel
                dolore exercitationem nobis quasi dicta illo id quas. Error
                commodi, modi minus. <br />
                <br />
                Perferendis, quidem, facilis. Aspernatur alias numquam saepe
                deleniti dolorem quos repudiandae eaque ad eligendi quam,
                ratione, error minima culpa suscipit nostrum magni omnis est.
                Suscipit dolor sint aut maiores eius, id nemo, optio, quos
                tempora cum est quas. At recusandae obcaecati consequatur ipsa
                dignissimos, eius commodi qui quae exercitationem fugiat,
                voluptatem, nesciunt!
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem voluptatem vero culpa rerum similique labore, nisi minus
                voluptatum numquam fugiat. <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat fugit sint reiciendis quas temporibus quam maxime nulla
                vitae consectetur perferendis, fugiat assumenda ex dicta
                molestias soluta est quo totam cum?
              </p> */}

              <br />
              <br />
            </div>

            <div class="col-md-3 col-sm-4">
              <div class="contact-form">
                <div class="form-group">
                  {/* <button type="submit" class="filled-button btn-block">
                    Apply for this job
                  </button> */}
                </div>
              </div>

              {/* <div>
                <img
                  src="assets/images/product-1-370x270.jpg"
                  alt=""
                  class="img-fluid wc-image"
                />
              </div> */}

              <br />

              {/* <ul class="social-icons text-center">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-behance"></i>
                  </a>
                </li>
              </ul> */}

              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              {/* <div class="section-heading">
                <h2>About Cannon Guards Security ltd</h2>
              </div> */}

              {/* <p class="lead">
                <i class="fa fa-map-marker"></i> London
              </p> */}

              {/* <p>
                Looking to improve the security at your place of business? If
                so, we will provide you with the trained security officers and
                professionally licensed personnel needed for any business. From
                a security guard for construction site security to private event
                security, you can be sure to get the very best from our staff.
                Alternatively we provide tailor-made security guard training for
                your existing security staff.
              </p>
              <br />
              <p>
                Looking to improve the security at your place of business? If
                so, we will provide you with the trained security officers and
                professionally licensed personnel needed for any business. From
                a security guard for construction site security to private event
                security, you can be sure to get the very best from our staff.
                Alternatively we provide tailor-made security guard training for
                your existing security staff.
              </p> */}
            </div>

            <div class="col-md-3">
              <div class="section-heading">
                {/* <h2>Contact Details</h2> */}
              </div>

              <div class="left-content">
                <p>
                  {/* <span>Name</span> */}

                  <br />

                  {/* <strong>John Smith</strong> */}
                </p>

                <p>
                  {/* <span>Phone</span> */}

                  <br />

                  {/* <strong>
                    <a href="tel:123-456-789">123-456-789</a>
                  </strong> */}
                </p>

                <p>
                  {/* <span>Mobile phone</span>

                  <br />

                  <strong>
                    <a href="tel:456789123">456789123</a>
                  </strong> */}
                </p>

                <p>
                  {/* <span>Email</span> */}

                  <br />

                  <strong>
                    {/* <a href="mailto:john@carsales.com">john@carsales.com</a> */}
                  </strong>
                </p>

                <p>
                  {/* <span>Website</span> */}

                  <br />

                  <strong>
                    {/* <a href="http://www.cannonguards.com/">
                      http://www.cannonguards.com/
                    </a> */}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h5 class="modal-title" id="exampleModalLabel">
                Book Now
              </h5> */}
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {/* <span aria-hidden="true">&times;</span> */}
              </button>
            </div>
            <div class="modal-body">
              <div class="contact-form">
                <form action="#" id="contact">
                  <div class="row">
                    <div class="col-md-6">
                      <fieldset>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Pick-up location"
                          required=""
                        />
                      </fieldset>
                    </div>

                    <div class="col-md-6">
                      <fieldset>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Return location"
                          required=""
                        />
                      </fieldset>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <fieldset>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Pick-up date/time"
                          required=""
                        />
                      </fieldset>
                    </div>

                    <div class="col-md-6">
                      <fieldset>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Return date/time"
                          required=""
                        />
                      </fieldset>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter full name"
                    required=""
                  />

                  <div class="row">
                    <div class="col-md-6">
                      <fieldset>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter email address"
                          required=""
                        />
                      </fieldset>
                    </div>

                    <div class="col-md-6">
                      <fieldset>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter phone"
                          required=""
                        />
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button> */}
              {/* <button type="button" class="btn btn-primary">
                Book Now
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

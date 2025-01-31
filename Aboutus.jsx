import React, { useEffect, useState } from "react";

export default function Aboutus() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <>
        {loading && (
          <div id="preloader">
            <div className="jumper">
              <div />
              <div />
              <div />
            </div>
          </div>
        )}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" href="assets/images/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <title>PHPJabbers.com | Free Job Agency Website Template</title>
        {/* Bootstrap core CSS */}
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Additional CSS Files */}
        <link rel="stylesheet" href="assets/css/fontawesome.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/owl.css" />
        {/* ***** Preloader Start ***** */}
        {/* <div id="preloader">
          <div className="jumper">
            <div />
            <div />
            <div />
          </div>
        </div> */}
        {/* ***** Preloader End ***** */}
        {/* Header */}
        {/* <header className="">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="index.html">
                <h2>
                  Job Agency <em>Website</em>
                </h2>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="jobs.html">
                      Jobs
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="about-us.html">
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      More
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="team.html">
                        Team
                      </a>
                      <a className="dropdown-item" href="testimonials.html">
                        Testimonials
                      </a>
                      <a className="dropdown-item" href="terms.html">
                        Terms
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header> */}
        {/* Page Content */}
        <div
          className="page-heading about-heading header-text"
          style={{
            backgroundImage: "url(assets/images/heading-1-1920x500.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>about us</h4>
                  <h2>our company</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="best-features about-features">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <img src="assets/images/about-1-570x350.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="left-content">
                  <h4>Lorem ipsum dolor sit amet.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed voluptate nihil eum consectetur similique? Consectetur,
                    quod, incidunt, harum nisi dolores delectus reprehenderit
                    voluptatem perferendis dicta dolorem non blanditiis ex
                    fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Et, consequuntur, modi mollitia corporis ipsa voluptate
                    corrupti eum ratione ex ea praesentium quibusdam? Aut, in
                    eum facere corrupti necessitatibus perspiciatis quis.
                  </p>
                  <ul className="social-icons">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-members">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <h5>Lorem ipsum dolor sit amet.</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  voluptate nihil eum consectetur similique? Consectetur, quod,
                  incidunt, harum nisi dolores delectus reprehenderit voluptatem
                  perferendis dicta dolorem non blanditiis ex fugiat. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti
                  eum ratione ex ea praesentium quibusdam? Aut, in eum facere
                  corrupti necessitatibus perspiciatis quis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  quae eveniet tempora reprehenderit quo, necessitatibus vel sit
                  laboriosam, sunt obcaecati quisquam explicabo voluptatibus
                  earum facilis quidem fuga maiores. Quasi, obcaecati? <br />
                  <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Sequi, est officiis. Ipsam quas consequuntur adipisci
                  quis, fuga pariatur eius eveniet qui similique nulla inventore
                  accusantium, suscipit asperiores quibusdam culpa iure!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner-content">
                  <p>
                    Copyright © 2020 Company Name - Template by:{" "}
                    <a href="https://www.phpjabbers.com/">PHPJabbers.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer> */}
        {/* Bootstrap core JavaScript */}
        {/* Additional Scripts */}
      </>
    </div>
  );
}

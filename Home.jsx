import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
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

      <div>
        <div className="banner header-text">
          <Slider {...settings}>
            <div className="item banner-item-01">
              <div className="text-content">
                <h4>Find your car today!</h4>
                <h2>Lorem ipsum dolor sit amet</h2>
              </div>
            </div>
            <div className="item banner-item-02">
              <div className="text-content">
                <h4>Fugiat Aspernatur</h4>
                <h2>Laboriosam reprehenderit ducimus</h2>
              </div>
            </div>
            <div className="item banner-item-03">
              <div className="text-content">
                <h4>Saepe Omnis</h4>
                <h2>Quaerat suscipit unde minus dicta</h2>
              </div>
            </div>
          </Slider>
        </div>
        {/* Banner Ends Here */}
        <div className="latest-products">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Featured Jobs</h2>
                  <a href="jobs.html">
                    view more <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <a href="job-details.html">
                    <img src="assets/images/product-1-370x270.jpg" alt="" />
                  </a>
                  <div className="down-content">
                    <a href="job-details.html">
                      <h4>Lorem ipsum dolor sit amet</h4>
                    </a>
                    <h6>$60 000</h6>
                    <h4>
                      <small>
                        <i className="fa fa-briefcase" /> Medical / Health Jobs{" "}
                        <br />{" "}
                        <strong>
                          <i className="fa fa-building" /> BMI Kings Park
                          Hospital
                        </strong>
                      </small>
                    </h4>
                    <small>
                      <strong title="Posted on">
                        <i className="fa fa-calendar" /> 15-06-2020
                      </strong>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <strong title="Type">
                        <i className="fa fa-file" /> Contract
                      </strong>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <strong title="Location">
                        <i className="fa fa-map-marker" /> London
                      </strong>
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <a href="job-details.html">
                    <img src="assets/images/product-2-370x270.jpg" alt="" />
                  </a>
                  <div className="down-content">
                    <a href="job-details.html">
                      <h4>Lorem ipsum dolor sit amet</h4>
                    </a>
                    <h6>$60 000</h6>
                    <h4>
                      <small>
                        <i className="fa fa-briefcase" /> Medical / Health Jobs{" "}
                        <br />{" "}
                        <strong>
                          <i className="fa fa-building" /> BMI Kings Park
                          Hospital
                        </strong>
                      </small>
                    </h4>
                    <small>
                      <strong title="Posted on">
                        <i className="fa fa-calendar" /> 15-06-2020
                      </strong>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <strong title="Type">
                        <i className="fa fa-file" /> Contract
                      </strong>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <strong title="Location">
                        <i className="fa fa-map-marker" /> London
                      </strong>
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <a href="job-details.html">
                    <img src="assets/images/product-3-370x270.jpg" alt="" />
                  </a>
                  <div className="down-content">
                    <a href="job-details.html">
                      <h4>Lorem ipsum dolor sit amet</h4>
                    </a>
                    <h6>$60 000</h6>
                    <h4>
                      <small>
                        <i className="fa fa-briefcase" /> Medical / Health Jobs{" "}
                        <br />{" "}
                        <strong>
                          <i className="fa fa-building" /> BMI Kings Park
                          Hospital
                        </strong>
                      </small>
                    </h4>
                    <small>
                      <strong title="Posted on">
                        <i className="fa fa-calendar" /> 15-06-2020
                      </strong>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <strong title="Type">
                        <i className="fa fa-file" /> Contract
                      </strong>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <strong title="Location">
                        <i className="fa fa-map-marker" /> London
                      </strong>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="best-features">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>About Us</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="left-content">
                  <p>
                    Lorem ipsum dolor sit amet, <a href="#">consectetur</a>{" "}
                    adipisicing elit. Explicabo, esse consequatur alias repellat
                    in excepturi inventore ad <a href="#">asperiores</a> tempora
                    ipsa. Accusantium tenetur voluptate labore aperiam molestiae
                    rerum excepturi minus in pariatur praesentium, corporis,
                    aliquid dicta.
                  </p>
                  <ul className="featured-list">
                    <li>
                      <a href="#">Lorem ipsum dolor sit amet</a>
                    </li>
                    <li>
                      <a href="#">Consectetur an adipisicing elit</a>
                    </li>
                    <li>
                      <a href="#">It aquecorporis nulla aspernatur</a>
                    </li>
                    <li>
                      <a href="#">Corporis, omnis doloremque</a>
                    </li>
                  </ul>
                  <a href="about-us.html" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <img src="assets/images/about-1-570x350.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="services"
          style={{
            backgroundImage:
              "url(assets/images/other-image-fullscren-1-1920x900.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Latest blog posts</h2>
                  <a href="blog.html">
                    read more <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <a href="#" className="services-item-image">
                    <img
                      src="assets/images/blog-1-370x270.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="down-content">
                    <h4>
                      <a href="#">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        hic
                      </a>
                    </h4>
                    <p style={{ margin: 0 }}>
                      {" "}
                      John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                      &nbsp;&nbsp;|&nbsp;&nbsp; 114
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <a href="#" className="services-item-image">
                    <img
                      src="assets/images/blog-2-370x270.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="down-content">
                    <h4>
                      <a href="#">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </a>
                    </h4>
                    <p style={{ margin: 0 }}>
                      {" "}
                      John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                      &nbsp;&nbsp;|&nbsp;&nbsp; 114
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item">
                  <a href="#" className="services-item-image">
                    <img
                      src="assets/images/blog-3-370x270.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="down-content">
                    <h4>
                      <a href="#">
                        Aperiam modi voluptatum fuga officiis cumque
                      </a>
                    </h4>
                    <p style={{ margin: 0 }}>
                      {" "}
                      John Doe &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                      &nbsp;&nbsp;|&nbsp;&nbsp; 114
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="happy-clients">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Happy Clients</h2>
                  <Link to={"testimonials"}>
                    read more <i className="fa fa-angle-right" />
                  </Link>
                </div>
              </div>
              <div className="col-md-12">
                <Slider {...settings}>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>John Doe</h4>
                      <p className="n-m">
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur an
                          adipisicing elit. Itaque, corporis nulla at quia
                          quaerat."
                        </em>
                      </p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>Jane Smith</h4>
                      <p className="n-m">
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur an
                          adipisicing elit. Itaque, corporis nulla at quia
                          quaerat."
                        </em>
                      </p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>Antony Davis</h4>
                      <p className="n-m">
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur an
                          adipisicing elit. Itaque, corporis nulla at quia
                          quaerat."
                        </em>
                      </p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>John Doe</h4>
                      <p className="n-m">
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur an
                          adipisicing elit. Itaque, corporis nulla at quia
                          quaerat."
                        </em>
                      </p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>Jane Smith</h4>
                      <p className="n-m">
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur an
                          adipisicing elit. Itaque, corporis nulla at quia
                          quaerat."
                        </em>
                      </p>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <div className="down-content">
                      <h4>Antony Davis</h4>
                      <p className="n-m">
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur an
                          adipisicing elit. Itaque, corporis nulla at quia
                          quaerat."
                        </em>
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner-content">
                  <div className="row">
                    <div className="col-md-8">
                      <h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Itaque corporis amet elite author nulla.
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-6 text-right">
                      <a href="contact.html" className="filled-button">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
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
      </div>
    </>
  );
}

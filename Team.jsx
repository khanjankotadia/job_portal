import React, { useEffect, useState } from "react";

export default function Team() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
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
        style={{ backgroundImage: "url(assets/images/heading-2-1920x500.jpg)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <h4>Lorem ipsum dolor</h4>
                <h2>Our Team Members</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="team-members">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="team-member">
                <div class="thumb-container">
                  <img src="assets/images/team_01.jpg" alt="" />
                  <div class="hover-effect">
                    <div class="hover-content">
                      <ul class="social-icons">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="down-content">
                  <h4>Johnny William</h4>
                  <span>CO-Founder</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-member">
                <div class="thumb-container">
                  <img src="assets/images/team_02.jpg" alt="" />
                  <div class="hover-effect">
                    <div class="hover-content">
                      <ul class="social-icons">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="down-content">
                  <h4>Karry Pitcher</h4>
                  <span>Product Expert</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-member">
                <div class="thumb-container">
                  <img src="assets/images/team_03.jpg" alt="" />
                  <div class="hover-effect">
                    <div class="hover-content">
                      <ul class="social-icons">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="down-content">
                  <h4>Michael Soft</h4>
                  <span>Chief Marketing</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-member">
                <div class="thumb-container">
                  <img src="assets/images/team_04.jpg" alt="" />
                  <div class="hover-effect">
                    <div class="hover-content">
                      <ul class="social-icons">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="down-content">
                  <h4>Mary Cool</h4>
                  <span>Product Specialist</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-member">
                <div class="thumb-container">
                  <img src="assets/images/team_05.jpg" alt="" />
                  <div class="hover-effect">
                    <div class="hover-content">
                      <ul class="social-icons">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="down-content">
                  <h4>George Walker</h4>
                  <span>Product Photographer</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-member">
                <div class="thumb-container">
                  <img src="assets/images/team_06.jpg" alt="" />
                  <div class="hover-effect">
                    <div class="hover-content">
                      <ul class="social-icons">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
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
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="down-content">
                  <h4>Kate Town</h4>
                  <span>General Manager</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing itaque
                    corporis nulla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

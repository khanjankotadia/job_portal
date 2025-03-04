import React, { useEffect, useState } from "react";

export default function Testimonials() {
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
        style={{ backgroundImage: "url(assets/images/heading-3-1920x500.jpg)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <h4>Dolore doloribus sint</h4>
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="services section-background">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="service-item">
                <div class="icon">
                  <i class="fa fa-user"></i>
                </div>
                <div class="down-content">
                  <h4>John Doe</h4>
                  <p class="n-m">
                    <em>
                      "Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat."
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-item">
                <div class="icon">
                  <i class="fa fa-user"></i>
                </div>
                <div class="down-content">
                  <h4>Jane Smith</h4>
                  <p class="n-m">
                    <em>
                      "Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat."
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-item">
                <div class="icon">
                  <i class="fa fa-user"></i>
                </div>
                <div class="down-content">
                  <h4>Antony Davis</h4>
                  <p class="n-m">
                    <em>
                      "Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat."
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="service-item">
                <div class="icon">
                  <i class="fa fa-user"></i>
                </div>
                <div class="down-content">
                  <h4>John Doe</h4>
                  <p class="n-m">
                    <em>
                      "Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat."
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-item">
                <div class="icon">
                  <i class="fa fa-user"></i>
                </div>
                <div class="down-content">
                  <h4>Jane Smith</h4>
                  <p class="n-m">
                    <em>
                      "Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat."
                    </em>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="service-item">
                <div class="icon">
                  <i class="fa fa-user"></i>
                </div>
                <div class="down-content">
                  <h4>Antony Davis</h4>
                  <p class="n-m">
                    <em>
                      "Lorem ipsum dolor sit amet, consectetur an adipisicing
                      elit. Itaque, corporis nulla at quia quaerat."
                    </em>
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

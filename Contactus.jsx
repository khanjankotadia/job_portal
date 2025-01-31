import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Contactus() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [email_id, setEmail] = useState();
  const [whatsapp_no, setWhatsappno] = useState();
  const [contact_no, setContactno] = useState();
  const [Address1, setAddress1] = useState();
  const [Address2, setAddress2] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [facebook_link, setFacebook] = useState();
  const [instagram_link, setInstagram] = useState();
  const [linkedin_link, setLinkedin] = useState();

  useEffect(() => {
    console.log(id);
    if (id) {
      fatchContact();
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fatchContact = async () => {
    const res = await axios.get(
      "http://localhost:2105/backend/Contactus/" + id
    );
    console.log(res);
    setEmail(res.data.email_id);
    setWhatsappno(res.data.whatsapp_no);
    setContactno(res.data.contact_no);
    setAddress1(res.data.Address1);
    setAddress2(res.data.Address2);
    setState(res.data.state);
    setCountry(res.data.country);
    setFacebook(res.data.facebook_link);
    setInstagram(res.data.instagram_link);
    setLinkedin(res.data.linkedin_link);
  };
  const submitHandle = async (e) => {
    e.preventDefault();
    if (id) {
      const res = await axios.put(
        "http://localhost:2105/backend/Contactus/" + id,
        {
          email_id,
          whatsapp_no,
          contact_no,
          Address1,
          Address2,
          state,
          country,
          facebook_link,
          instagram_link,
          linkedin_link,
        }
      );
      alert(res.data);
    } else {
      const res = await axios.post("http://localhost:2105/backend/Contactus", {
        email_id,
        whatsapp_no,
        contact_no,
        Address1,
        Address2,
        state,
        country,
        facebook_link,
        instagram_link,
        linkedin_link,
      });
      alert(res.data);
    }
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
        className="page-heading contact-heading header-text"
        style={{ backgroundImage: "url(assets/images/heading-4-1920x500.jpg)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <h4>Lorem ipsum dolor</h4>
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="find-us">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>Our Location on Maps</h2>
              </div>
            </div>
            <div class="col-md-8">
              {/* <!-- How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
--> */}
              <div id="map">
                <iframe
                  src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="330px"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="left-content">
                <h4>About our office</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                  voluptate nihil eumester consectetur similiqu consectetur.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisic elit. Et,
                  consequuntur, modi mollitia corporis ipsa voluptate corrupti.
                </p>
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
        </div>
      </div>

      <div class="send-message">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>Contact Us</h2>
              </div>
            </div>
            <div class="col-md-8">
              <div class="contact-form">
                <form id="contact" action="" method="post">
                  <div class="row">
                    {/* <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div> */}
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          class="form-control"
                          id="email"
                          placeholder="E-Mail Address"
                          required=""
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          class="form-control"
                          id="email"
                          placeholder="Whatsapp No"
                          required=""
                          onChange={(e) => setWhatsappno(e.target.value)}
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Contact No"
                          required=""
                          onChange={(e) => setContactno(e.target.value)}
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Address 1"
                          required=""
                          onChange={(e) => setAddress1(e.target.value)}
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Address 2"
                          required=""
                          onChange={(e) => setAddress2(e.target.value)}
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="State"
                          required=""
                          onChange={(e) => setState(e.target.value)}
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Country"
                          required=""
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Facebook Link"
                          required=""
                          onChange={(e) => setFacebook(e.target.value)}
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Instagram Link"
                          required=""
                          onChange={(e) => setInstagram(e.target.value)}
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Linkedin Link"
                          required=""
                          onChange={(e) => setLinkedin(e.target.value)}
                        />
                      </fieldset>
                    </div>
                    {/* <div class="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div> */}
                    <div class="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          class="filled-button"
                          onClick={submitHandle}
                        >
                          Submit
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-4">
              {/* <img src="assets/images/team_01.jpg" class="img-fluid" alt="" /> */}

              {/* <h5 className="text-center" style={{ marginTop: "15px" }}>
                John Doe
              </h5> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.email.value.trim();
    const company = form.current.company.value.trim();
    const jobType = form.current.job_type.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message || !company || !jobType) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_t7eoqm9",
        "freelance_services",
        form.current,
        "PGOnJnWrnzjx2-jLm"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your message has been sent. Thank you!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "There was an error sending your message. Please try again later.",
            {
              position: toast.POSITION.TOP_RIGHT,

              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        }
      );
  };
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5  col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-image">
              <img
                src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="contact-form img"
              />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xl-7  col-lg-7 col-md-7 col-sm-7">
            <form ref={form} onSubmit={sendEmail}>
              <div className="contact-form-design">
                <div className="text-center">
                  <h5>Contact Me</h5>
                </div>
                <div className="contact-form">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="from_name"
                  />
                </div>
                <div className="row">
                  <div className="contact-form col-lg-6 col-md-6 mb-3">
                    <label className="form-label">E-mail</label>
                    <input type="text" className="form-control" name="email" />
                  </div>
                  <div className=" contact-form col-lg-6 col-md-6 mb-3">
                    <label className="form-label ">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                    />
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <label className="form-label">Job Types</label>
                <select className="custom-select-tag" name="job_type">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Project-Based</option>
                  <option>Contract</option>
                </select>
              </div>
              <div className="contact-form">
                <label className="form-label">Message</label>
                <textarea
                  rows={3}
                  type="text"
                  className="form-control"
                  name="message"
                />
              </div>

              <button type="submit" id="sendButton" className="button-submit">
                Send <RiSendPlaneFill size={15} />
              </button>
            </form>
          </div>
        </Fade>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;

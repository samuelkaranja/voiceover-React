import { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  //Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    // Success Message
    setSuccessMessage("Your message has been sent successfully!");

    setFormData({
      fullname: "",
      phonenumber: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccessMessage("");
    }, 10000);
  };

  return (
    <div className="contact-form">
      <h2>Contact Form</h2>
      {/* Conditionally render the success message */}
      {successMessage && <p className="message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="more">
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="name"
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="number"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              className="number"
            />
          </div>
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="email"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols="40"
            rows="12"
            placeholder="Write a Message....."
          ></textarea>
        </div>
        <button className="form-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

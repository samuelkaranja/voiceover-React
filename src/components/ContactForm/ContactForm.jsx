import { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
  const { formData, setFormData } = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    setFormData({
      fullname: "",
      phonenumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="more">
          <div>
            <label>Full Name:</label>
            <input type="text" className="name" />
          </div>
          <div>
            <label>Phone Number:</label>
            <input type="text" className="number" />
          </div>
        </div>
        <div>
          <label>Email Address:</label>
          <input type="email" className="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="" id="" cols="40" rows="12"></textarea>
        </div>
        <button className="form-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

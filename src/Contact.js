import React, { useState } from 'react';
import "./contact.css"
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }

    // Perform submission logic here (e.g., send data to backend or display a success message)
    console.log('Submitted:', name, email, message);

    // Reset form fields and error message
    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };

  return (
    <div className="container-out">
      <div className="inner-boxes">
      <h2 className="title">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-div">
          <label htmlFor="name">Name:</label>
          <input className="box"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <br/>
        <div className="name-div">
          <label htmlFor="email">Email:</label>
          <input className="box"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <br/>
        <div className="name-div">
          <label htmlFor="message">Message:</label>
          <textarea className="box"
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="btn" >
        <button className="button" type="submit">Submit</button>
        </div>
      </form>
      </div>
      <div className="icons">
      <BsInstagram/>
      <BsFacebook/>
      <BsTwitter/>
      <BsLinkedin/>
      <AiFillMail/>
      </div>
    </div>
  );
};

export default ContactPage;

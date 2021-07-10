import React, { useState } from "react";
import ContactInfoButton from "../components/ContactInfoButton";
import Heading from "../components/Heading";
import axios from "axios";
import Spinner from "../components/Spinner";

const ContactForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initialState);

  const [postMessage, setPostMessage] = useState({
    message: "",
    success: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `https://api.cenvalley.com/contact`,
        form
      );
      setPostMessage({
        message: response.data.message,
        success: response.data.success,
      });

      setForm(initialState);
    } catch (err) {
      console.log(err);
      setPostMessage({
        message: `An unknown error occurred. Please check your connection.`,
        success: false,
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="flex-1">
        <Heading heading="Contact Us" subheading="Let's get in touch" />
        <div className="flex flex-col pt-8">
          <ContactInfoButton
            type="Email Address"
            info="info@cenvalley.com"
            link="mailto:info@cenvalley.com"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />
          <ContactInfoButton
            type="Call Us"
            info="(916) 791-1609"
            link="tel:9167911609"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
          />
          <ContactInfoButton
            type="Address"
            info="216 Kenroy Lane, Roseville, CA 95678"
            link="https://www.google.com/maps/place/216+Kenroy+Ln,+Roseville,+CA+95678/@38.7332682,-121.2976137,17z"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div className="flex-1 text-white">
        <h4 className="text-2xl font-mono text-center">Send us a message</h4>
        <form
          className="flex flex-col pt-4 space-y-4"
          action="POST"
          name="contact-us"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 md:space-y-0 space-y-4">
            <div className="flex-grow">
              <input
                className="bg-secondary p-3 border-white rounded w-full"
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
                value={form.firstName}
                minLength="2"
                maxLength="20"
              />
            </div>
            <div className="flex-grow">
              <input
                className="bg-secondary p-3 border-white rounded w-full"
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
                value={form.lastName}
                minLength="2"
                maxLength="20"
              />
            </div>
          </div>
          <input
            className="w-full bg-secondary p-3 border-white rounded"
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            value={form.email}
            minLength="2"
            maxLength="100"
          />
          <textarea
            className="w-full bg-secondary p-3 border-white rounded"
            name="message"
            placeholder="Message"
            rows={6}
            onChange={handleChange}
            value={form.message}
            minLength="20"
            maxLength="2000"
          />
          {loading ? (
            <Spinner />
          ) : (
            <button
              type="submit"
              className="bg-yellow text-black p-3 font-semibold rounded"
            >
              Send Message
            </button>
          )}
          <span style={{ color: postMessage.success ? "green" : "red" }}>
            {postMessage.message}
          </span>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

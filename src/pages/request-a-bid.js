import React, { useState } from "react";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Spinner from "../components/Spinner";
import axios from "axios";

const RequestABid = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    interests: {
      asphaltConcretePaving: false,
      grading: false,
      undergroundUtility: false,
      commercialAndPublicWorksConstruction: false,
      residentialConstruction: false,
      concreteDesignAndRepair: false,
    },
    aboutTheJob: "",
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

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    console.log(form);
    setForm((prevState) => ({
      ...prevState,
      interests: {
        ...prevState.interests,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `http://api.cenvalley.com/request-a-bid`,
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
    <Layout>
      <section className="py-10">
        <Wrapper>
          <article className="flex flex-col items-center text-white">
            <div className="w-full md:w-2/3">
              <h1 className="font-mono text-4xl text-center">Request a bid</h1>
              <p className="pt-4">
                Request a bid through our website. Complete the following form
                and click the "Send" button. Someone from our company will
                contact you promptly.
              </p>
              <form
                className="flex flex-col pt-4 space-y-4"
                action="POST"
                name="contact-us"
                onSubmit={handleSubmit}
              >
                <label htmlFor="aboutYou">About you:</label>
                <div id="aboutYou" className="space-y-4">
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
                  <input
                    className="w-full bg-secondary p-3 border-white rounded"
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    onChange={handleChange}
                    value={form.phone}
                    minLength="2"
                    maxLength="11"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="interests">
                    Your interest (check all that apply):
                  </label>
                  <div id="interests" className="inline">
                    <input
                      type="checkbox"
                      name="asphaltConcretePaving"
                      id="asphaltConcretePaving"
                      checked={form.interests.asphaltConcretePaving}
                      onChange={handleCheckChange}
                    />
                    <label className="pl-2" htmlFor="asphaltConcretePaving">
                      Asphalt Concrete Paving
                    </label>
                  </div>
                  <div className="inline">
                    <input
                      type="checkbox"
                      name="grading"
                      id="grading"
                      checked={form.interests.grading}
                      onChange={handleCheckChange}
                    />
                    <label className="pl-2" htmlFor="grading">
                      Grading
                    </label>
                  </div>
                  <div className="inline">
                    <input
                      type="checkbox"
                      name="undergroundUtility"
                      id="undergroundUtility"
                      checked={form.interests.undergroundUtility}
                      onChange={handleCheckChange}
                    />
                    <label className="pl-2" htmlFor="undergroundUtility">
                      Underground Utility
                    </label>
                  </div>
                  <div className="inline">
                    <input
                      type="checkbox"
                      name="commercialAndPublicWorksConstruction"
                      id="commercialAndPublicWorksConstruction"
                      checked={
                        form.interests.commercialAndPublicWorksConstruction
                      }
                      onChange={handleCheckChange}
                    />
                    <label
                      className="pl-2"
                      htmlFor="commercialAndPublicWorksConstruction"
                    >
                      Commerical and Public Works Construction
                    </label>
                  </div>
                  <div className="inline">
                    <input
                      type="checkbox"
                      name="residentialConstruction"
                      id="residentialConstruction"
                      checked={form.interests.residentialConstruction}
                      onChange={handleCheckChange}
                    />
                    <label className="pl-2" htmlFor="residentialConstruction">
                      Residential Construction
                    </label>
                  </div>
                  <div className="inline">
                    <input
                      type="checkbox"
                      name="concreteDesignAndRepair"
                      id="concreteDesignAndRepair"
                      checked={form.interests.concreteDesignAndRepair}
                      onChange={handleCheckChange}
                    />
                    <label className="pl-2" htmlFor="concreteDesignAndRepair">
                      Concrete Design and Repair
                    </label>
                  </div>
                </div>
                <label htmlFor="aboutTheJob">About the job:</label>
                <textarea
                  className="w-full bg-secondary p-3 border-white rounded"
                  id="message"
                  name="aboutTheJob"
                  placeholder="Please describe a little about what you need..."
                  rows={6}
                  onChange={handleChange}
                  value={form.aboutTheJob}
                  minLength="20"
                  maxLength="3000"
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
          </article>
        </Wrapper>
      </section>
    </Layout>
  );
};

export default RequestABid;

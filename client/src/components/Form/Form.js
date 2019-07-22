import React, { Component } from "react";

import "./Form.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(evt) {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const { firstName, lastName, email, phoneNumber } = this.state;
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber
    };

    try {
      fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(data)
      }).then(function(response) {
        response.json().then(function(data) {
          console.log(`Successful ${data}`);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <form className="form-info" onSubmit={this.handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={this.handleInputChange}
        />
        <button className="form-button" type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default Form;

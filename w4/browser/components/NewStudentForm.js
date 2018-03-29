import React, { Component } from "react";


export default class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("What we're typing: ", event.target.value)
    this.setState({ [event.target.name]: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    const student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };

    console.log("GONNA ADD THIS STUDENT: ", student)
    this.setState({ firstName: '', lastName: '', email: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" value = {this.state.firstName} name="firstName" onChange={this.handleChange} />
        </label>

        <label>
          Last Name:
          <input type="text" value = {this.state.lastName} name="lastName" onChange={this.handleChange} />
        </label>

        <label>
          Email:
          <input type="email" value={this.state.email} name="email" onChange={this.handleChange} />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
import { Component } from "react";
import { signUp } from "../utilities/users-service";

// JS COMPONENT ARCHITECTURE (view notes at bottom)

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // don't wamt to submit confirm and error data
      const user = await signUp(formData);

      // set user state with the user
      this.props.setUser(user);
    } catch {
      this.setState({ error: "Sign Up Failed - try again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

// CLASS COMPONENTS
// traditional way to define a component using js classes, as opposed to the newer way via functional components

// basic class component:
// import React, { Component } from 'react';

// class MyComponent extends Component {
//   render() {
//     return <h1>Hello, World!</h1>;
//   }
// }

// 'MyComponent' class extends the 'Component' class from the react module, which provides methods and properties for defining components

// 'render()' used to render the component to the DOM

// JS CLASSES REFRESHER
// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }

//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }

//     greet() {
//       console.log(`Hello, my name is ${this.getFullName()}.`);
//     }
//   }

// constructor() method used to initialize firstName, lastName properties of a class.

// 'extends' keyword used to create a subclass that inherits properties from a parent class

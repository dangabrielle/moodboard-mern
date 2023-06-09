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
        <div>
          <form
            className="flex flex-col justify-center items-center gap-3 mt--5"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <label>Name</label>
            <input
              className="appearance-none block w-[30%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="name"
              placeholder="John"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              className="appearance-none block w-[30%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="Doe"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              className="appearance-none block w-[30%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              name="password"
              placeholder="******"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              className="appearance-none block w-[30%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              name="confirm"
              placeholder="******"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button
              className="m-5 inline-block rounded bg-emerald-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-emerald-200 hover:text-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              type="submit"
              disabled={disable}
            >
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

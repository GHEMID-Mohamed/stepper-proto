import React, { Component } from "react";

class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
    this.props.onData({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h3>step 1</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              placeholder="First name !"
              required
            />
          </div>
          <br />
          <div>
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              placeholder="Last name !"
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Step1;

import React, { Component } from "react";

class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      country: ""
    };
  }

  handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
    this.props.onData({ [name]: value }, true);
  };

  render() {
    return (
      <div>
        <h3>step 2</h3>
        <form>
          <div>
            <input
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
              placeholder="Age !"
              required
            />
          </div>
          <br />
          <div>
            <input
              name="country"
              value={this.state.country}
              onChange={this.handleInputChange}
              placeholder="Country !"
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Step2;

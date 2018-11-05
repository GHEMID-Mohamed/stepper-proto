import React, { Component } from "react";

class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleValue = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <h3>step 1</h3>
        <form>
          <div>
            <input
              value={this.state.value}
              onChange={this.handleValue}
              placeholder="Enter something please !"
              required
            />
          </div>
          <br />
          <div>
            <input
              value={this.state.value}
              onChange={this.handleValue}
              placeholder="Enter something please !"
              required
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Step1;

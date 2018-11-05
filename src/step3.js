import React, { Component } from "react";

class Step3 extends Component {
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
        <h3>step 3</h3>
        <form>
          <input
            value={this.state.value}
            onChange={this.handleValue}
            placeholder="Enter something please !"
            required
          />
        </form>
      </div>
    );
  }
}

export default Step3;

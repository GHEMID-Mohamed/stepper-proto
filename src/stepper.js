import React, { Component } from "react";

class Stepper extends Component {
  constructor() {
    super();
    this.state = {
      steps: {},
      currentStep: 0
    };
  }

  get currentStep() {
    return this.state.steps[this.state.currentStep] || {};
  }

  onData = (data, isValid) => {
    const { steps, currentStep } = this.state;
    this.setState({ steps: { ...steps, [currentStep]: { data, isValid } } });
  };

  previousStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  onSubmit = async event => {
    event.preventDefault();
    if (this.currentStep.isValid) {
      await this._onSubmitStep();
      this.setState({ currentStep: this.state.currentStep + 1 });
    }
  };

  _onSubmitStep = () => {};
  sendOnSubmit = onSubmitStep => {
    this._onSubmitStep = onSubmitStep;
  };

  render() {
    const Step = this.props.steps[this.state.currentStep];
    return (
      <form onSubmit={this.onSubmit}>
        <Step data={this.currentStep.data} onData={this.onData} sendOnSubmit={this.sendOnSubmit} />
        <br />
        {this.state.currentStep > 0 && (
          <button onClick={this.previousStep}>Previous</button>
        )}
        &nbsp;
        <button>Next</button>
      </form>
    );
  }
}

export default Stepper;

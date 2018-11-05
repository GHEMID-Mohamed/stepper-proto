import React, { Component } from "react";

class Stepper extends Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      currentStep: 0
    };
  }

  getData = data => {
    this.setState({ data: { ...data, data } });
  };

  nextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  };

  previousStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  renderCurrentStep = () => {
    const Step = this.props.steps[this.state.currentStep];
    return <Step onData={this.getData} />;
  };

  render() {
    return (
      <div>
        {this.renderCurrentStep()}
        <br />
        {this.state.currentStep > 0 && (
          <button onClick={this.previousStep}>Previous</button>
        )}
        &nbsp;
        {this.state.currentStep < this.props.steps.length - 1 && (
          <button onClick={this.nextStep}>Next</button>
        )}
      </div>
    );
  }
}

export default Stepper;

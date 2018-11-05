import React, { Component } from "react";
import { StripeProvider } from "react-stripe-elements";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import CreditCard from "./credit-card";
import Stepper from "./stepper";

class App extends Component {
  steps = [
    CreditCard, Step3
  ]

  render() {
    return (
      <div className="App">
        <Stepper steps={this.steps} />
      </div>
    );
  }
}

export default () => (
  <StripeProvider apiKey={"pk_test_n6XvqQ8csVlV6OLY2BDdDdks"}>
    <App />
  </StripeProvider>
);

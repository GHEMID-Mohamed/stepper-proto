import React, { Component } from "react";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Stepper from "./stepper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stepper steps={[Step1, Step2, Step3]} />
      </div>
    );
  }
}

export default App;

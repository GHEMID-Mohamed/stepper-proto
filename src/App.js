import React, { Component } from "react";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Stepper from "./stepper";

import Example from "./example";

class App extends Component {
  constructor() {
    super();
    this.formRef = React.createRef();
  }

  handleExternSubmit = () => {
    this.formRef.current.submitForm();
  };

  render() {
    return (
      <div className="App">
        {/*<Stepper steps={[Step1, Step2, Step3]} />*/}
        <Example formRef={this.formRef} />
        <br />
        <button onClick={this.handleExternSubmit}>Handle from outside</button>
      </div>
    );
  }
}

export default App;

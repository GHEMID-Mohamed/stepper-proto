import React from "react";
import { injectState, provideState } from "reaclette";

const withState = provideState({
  initialState: () => ({
    steps: {},
    currentStep: 0,
    onSubmitStep: () => {}
  }),
  effects: {
    onData: (_, data, isValid) => state => {
      const { steps, currentStep } = state;
      state.steps = { ...steps, [currentStep]: { data, isValid } };
    },
    nextStep: () => state => ({
      ...state,
      currentStep: state.currentStep + 1
    }),
    onSubmit: (effects, event) => async state => {
      event.preventDefault();
      const { steps, currentStep } = state;
      if (steps[currentStep].isValid) {
        await state.onSubmitStep();
        effects.nextStep();
      }
    },
    sendOnSubmit: (_, onSubmitStep) => state => {
      state.onSubmitStep = onSubmitStep;
    }
  }
});

const Stepper = ({ state, effects, steps }) => {
  const Step = steps[state.currentStep];
  return (
    <form onSubmit={effects.onSubmit}>
      <Step onData={effects.onData} sendOnSubmit={effects.sendOnSubmit} />
      <br />
      {state.currentStep > 0 && (
        <button onClick={effects.previousStep}>Previous</button>
      )}
      &nbsp;
      <button>Next</button>
    </form>
  );
};

export default withState(injectState(Stepper));

import React, { Fragment } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import { injectState, provideState } from "reaclette";

const withState = provideState({
  initialState: () => ({
    validCardNumber: false,
    validExpirationDate: false,
    validCVC: false
  }),
  effects: {
    initialize() {
      this.props.sendOnSubmit(this.effects.createToken);
    },
    handleCardNumberChange: (effects, changeObject) => (state, props) => {
      state.validCardNumber = changeObject.complete;
      props.onData(undefined, state.validCardNumberInfo);
    },
    handleExpirationDate: (_, changeObject) => (state, props) => {
      state.validExpirationDate = changeObject.complete;
      props.onData(undefined, state.validCardNumberInfo);
    },
    handleCVC: (_, changeObject) => (state, props) => {
      state.validCVC = changeObject.complete;
      props.onData(undefined, state.validCardNumberInfo);
    },
    createToken: effects => async (_, props) => {
      try {
        let { token } = await props.stripe.createToken({
          name: "toto" // Card Holder
        });
        console.log(token);
        if (token) {
          const data = {
            cardToken: token.id,
            cardLegalInfo: token.card,
            valid: true
          };
          props.onData(undefined, true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    validCardNumberInfo: ({ validCardNumber, validExpirationDate, validCVC }) =>
      validCardNumber && validExpirationDate && validCVC
  }
});

const CheckoutForm = ({ state, effects }) => (
  <Fragment>
    <div className="checkout">
      <label>
        Card number
        <CardNumberElement
          className="cardNumber"
          onChange={effects.handleCardNumberChange}
          onReady={el => el.focus()}
        />
      </label>
      <label>
        Expiration date
        <CardExpiryElement
          className="expirationDate"
          onChange={effects.handleExpirationDate}
        />
      </label>
      <label>
        CVC
        <CardCVCElement className="cvc" onChange={effects.handleCVC} />
      </label>
    </div>
  </Fragment>
);

export default injectStripe(withState(injectState(CheckoutForm)));

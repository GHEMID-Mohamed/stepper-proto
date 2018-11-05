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
    initialize () {
      console.log(this.props, this.effects)
      this.props.sendOnSubmit(this.effects.createToken)
    },
    handleCardNumberChange: (effects, changeObject) => (state, props) => {
      state.validCardNumber = changeObject.complete;
      if (state.validCardNumberInfo) {
        props.onData(undefined, true);
      }
    },
    handleExpirationDate: (_, changeObject) => (state, props) => {
      state.validExpirationDate = changeObject.complete;
      if (state.validCardNumberInfo) {
        props.onData(undefined, true);
      }
    },
    handleCVC: (_, changeObject) => (state, props) => {
      state.validCVC = changeObject.complete;
      if (state.validCardNumberInfo) {
        props.onData(undefined, true);
      }
    },
    createToken: effects => async (state, props) => {
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
          props.onData(data);
        }
      } catch (error) {
        effects.handleError(error);
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

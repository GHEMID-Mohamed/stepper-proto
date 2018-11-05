import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";

import CheckoutForm from "./checkout-form";

const CreditCard = props => {
  return (
    <Elements>
      <CheckoutForm card {...props} />
    </Elements>
  );
};

export default CreditCard;

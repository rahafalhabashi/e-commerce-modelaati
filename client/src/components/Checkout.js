// import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LA0u0KbdjY7fQwQpspCWOmeYN2eMh6gPyBaRbyVmdpTNVFWaYVsmGhedXhuu8kXxYTwikzH2WmE1iovEw06ZWoE005wG4jewt');

function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};


export default Checkout
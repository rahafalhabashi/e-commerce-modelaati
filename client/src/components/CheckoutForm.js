import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

import CardSection from './CardSection';

export default function CheckoutForm({cartProds}) {

  const stripe = useStripe();
  const elements = useElements();
  
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      stripeTokenHandler(result.token);
    }
  };

  //send token to server along with any add. info that's been collected
  async function stripeTokenHandler(token) {
    const paymentData = {token: token.id};
  
    // Use fetch to send the token ID and any other payment data to your server.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const response = await fetch('/charge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData),
    });
  
    // Return and display the result of the charge.
    return response.json();
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}


// ------------------------------------------------------------------------------------------------------------


// import React from 'react';
// import {Elements, useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// import StripeCheckout from 'react-stripe-checkout'
// import axios from 'axios'
// import { loadStripe } from '@stripe/stripe-js'

// // import CardSection from './CardSection';

// export default function CheckoutForm({cartProds}) {
//     const prodInCart = cartProds.map((product) => (
//         <p> {product} </p>
//       ))
    
//       const PUBLIC_KEY = "pk_test_51LA0u0KbdjY7fQwQpspCWOmeYN2eMh6gPyBaRbyVmdpTNVFWaYVsmGhedXhuu8kXxYTwikzH2WmE1iovEw06ZWoE005wG4jewt"
//       const stripeTestPromise = loadStripe(PUBLIC_KEY)
     
    //   const [product] = useState({
    //     name: prodInCart.name,
    //     price: prodInCart.amount ,
    //     description: prodInCart.description,
    //   })
    
//       function handleToken(token, addresses) {
//         const response = axios.post('/checkout', { token, prodInCart })
//         console.log(response.status)
//       }
    
//       const stripe = useStripe();
//       const elements = useElements();
    
//       const handleSubmit = async (event) => {
//         // We don't want to let default form submission happen here,
//         // which would refresh the page.
//         event.preventDefault();
    
//         if (!stripe || !elements) {
//           // Stripe.js has not yet loaded.
//           // Make  sure to disable form submission until Stripe.js has loaded.
//           return;
//         }
    
//         async function stripeTokenHandler(token) {
//           const paymentData = {token: token.id};
        
//           // Use fetch to send the token ID and any other payment data to your server.
//           // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//           const response = await fetch('/charge', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(paymentData),
//           });
        
//           // Return and display the result of the charge.
//           return response.json();
//         }
    
//         const card = elements.getElement(CardElement);
//         const result = await stripe.createToken(card);
    
//         if (result.error) {
//           // Show error to your customer.
//           console.log(result.error.message);
//         } else {
//           // Send the token to your server.
//           // This function does not exist yet; we will define it in the next step.
//           stripeTokenHandler(result.token);
//         }
//       };
    
//       return (
//       <Elements stripe={stripeTestPromise}>
//         <div>
//           <div className="cards__item" align="center" style={{ width: 'auto', height: 'auto' }}>
//             <div className='payment-container' align='center' style={{ width: '600px', height: '100%' }} >
//               <label htmlFor='card-element'>Card</label>
//               <h4>Please enter the information below.</h4>
//               <div>
//                 {/* <CheckoutForm /> */}
//                 <StripeCheckout
//                   stripeKey="pk_test_51LA0u0KbdjY7fQwQpspCWOmeYN2eMh6gPyBaRbyVmdpTNVFWaYVsmGhedXhuu8kXxYTwikzH2WmE1iovEw06ZWoE005wG4jewt"
//                   token={handleToken}
//                   amount={prodInCart.price * 100}
//                   name={prodInCart.name}
//                   billingAddress
//                   shippingAddress 
//                   onSubmit={handleSubmit}
//                   />
//               </div>
//             </div>
//           </div>
//         </div>
//         </Elements> 
    
//       )
// }
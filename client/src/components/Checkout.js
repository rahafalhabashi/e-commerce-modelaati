import React from 'react'
import StripeContainer from './StripeContainer'
// import StripeContainer from './StripeContainer'
// import { CardElement } from '@stripe/react-stripe-js'
// import {useHistory} from 'react-router-dom'
// import CardElement from './CardElement'

function Checkout() {
  // <CardElement />
  return (
    <div>
      <div className="cards__item" align="center" style={{width: 'auto', height: 'auto'}}>
        {/* <h1 className='payment-name'>Card</h1> */}
        <form className='payment-container' align='center' style={{width: '600px', height: '100%'}} >
          <label htmlFor='card-element'>Card</label>
          <h4>Please enter the information below.</h4>


          <StripeContainer />


          {/* <CardElement /> */}
          {/* <span class="payment-errors"></span>

          <div class="form-row">
            <label>
              <span>Card Number</span>
              <input type="text" size="20" data-stripe="number" />
            </label>
          </div>

          <div className="form-row">
            <label>
              <span>CVC</span>
              <input type="text" size="4" data-stripe="cvc" />
            </label>
          </div>

          <div className="form-row">
            <div className='side-by-side'>
              <label>
                <span>Expiration(MM/YYYY)</span>
              </label>
              <input type="text" size="2" data-stripe="exp-month" className='card-form-expiration-button' />
              <p style={{ fontSize: 30 }}> /  </p>
              <input type="text" size="4" data-stripe="exp-year" className='card-form-expiration-button' />
            </div>

          </div>

          <button type="submit" className='form-button' align='center' >Submit Payment</button> */}

          {/* <button className='form-button' >Pay</button> */}
        </form>
      </div>
    </div>
  )
}

export default Checkout
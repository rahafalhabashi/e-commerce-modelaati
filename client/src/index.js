import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

//Stripe Stuff
// const express = require('express')
// const bodyparser = require('boddyparser');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
// const uuid = require('uuid').v4
// const cors = require('cors')
// const app = express();

// app.use(cors())
// app.use(bodyparser.urlencoded({ extended: false}))
// app.unsubscribe(bodyparser.json())
// const PORT = process.env.PORT || 4000

// app.post('/checkout', async (req, res) => {
//   console.log('Request:', req.body)

// let error, status
// try {
//   const {product, token} = req.body
//   const customer = await stripe.customers.create({
//     email:token.email,
//     source:token.id 
//   })
//   const key = uuid()

//   const charge = await stripe.charges.create(
//     {
//       amount: product.price * 100,
//       currency: "usd",
//       customer: customer.id,
//       receipt_email: token.email,
//       description: `Purchased the ${product.name}`,
//       shipping: {
//         name: token.card.name,
//         address: {
//           line1: token.card.address_line1,
//           line2: token.card.address_line2,
//           city: token.card.address_city,
//           country: token.card.address_country,
//           postal_code: token.card.address_zip,
//         },
//       },
//     },
//     {
//       key,
//     }
//   );

//   console.log("Charge:", { charge });
//     status = "success";
// }
// catch (error) {
//   console.error("Error:", error)
//   status = "Failure";
// } 

  
// })

// app.listen(PORT, () => {
//   console.log("App is listening on port 4000")
// })

// res.json({ error, status });

//  const app = express();
// require("dotenv").config()
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
// const bodyParser = require('body-parser')
// const cors = require('cors')

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())
// app.use(cors())

// app.post("/payment", cors(), async (req, res) => {
//   let {amount, id} = req.body

//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description: "Your order is being prepared!",
//       payment_method: id,
//       confirm: true
//     })
//     console.log("Payment:", payment)
//     res.json({
//       message: "Payment successful",
//       success: true
//     })
//   } catch (error) {
//     console.log("Error:", error)
//     res.json({ 
//       message: "Payment failed",
//       success: false
//     })
//   }
// })


// app.listen(process.env.PORT || 4000, () => {
//   console.log("Server is listening on port 4000")
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // {/* </React.StrictMode> */}
);



reportWebVitals();

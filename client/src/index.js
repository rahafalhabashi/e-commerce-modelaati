import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';



//Stripe Stuff
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
  <React.StrictMode>
    <BrowserRouter forceRefresh={true} >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();

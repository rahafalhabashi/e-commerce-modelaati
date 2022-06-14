import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './components/App';
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// (async () => {

//   // const {publishableKey} = await fetch('/config').then(r => r.json())
//   const stripePromise = loadStripe('pk_test_51LA0u0KbdjY7fQwQpspCWOmeYN2eMh6gPyBaRbyVmdpTNVFWaYVsmGhedXhuu8kXxYTwikzH2WmE1iovEw06ZWoE005wG4jewt')

//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Elements stripe={stripePromise}>
//           <App />
//         </Elements>
//       </BrowserRouter>
//     </React.StrictMode>
//   );

// })()
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

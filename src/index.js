import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PayPalScriptProvider} from "@paypal/react-paypal-js";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <GoogleOAuthProvider deferLoading={true} clientId="282059511515-62eerqjqi23hpkmnu298pbhbk4l062h4.apps.googleusercontent.com">
    <PayPalScriptProvider options={{ clientId: "Ado56N0C_pBQgkyzcWPoniiq8eD5tA0aH7RFaxyHAm1cLH_IlvITLwB8q_Wjz8FGKhAOm_l6o0FxazwM" }}>
    <App />
    </PayPalScriptProvider>
    </GoogleOAuthProvider>;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

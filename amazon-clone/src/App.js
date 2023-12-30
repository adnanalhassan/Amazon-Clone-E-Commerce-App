import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import { useStateValue } from "./StateProvider";

const promise = loadStripe('pk_live_51OMxLiDxpaVhUi9zNkFlSiuC13rQz5QX9EspDRws7fNsJblhSw2SseF2B9mpZS5V55T6OlsgX4sUYVvMtJCvTZ9v00DOuQO5dO');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/orders" element={<div><Header /><Orders /></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<div><Header /> <Checkout /></div>} />
          <Route path="/payment" element={<div><Header /> <Elements stripe={promise}><Payment /></Elements></div>} />
          <Route path="/" element={<div><Header /> <Home /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

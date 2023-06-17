import './App.css';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Layout from './Components/Layout';
import SignIn from './SignIn';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Components/Payment';

const promise = loadStripe('pk_test_51MGzT2A3x27PjNWrLetrYWkB4hHDkRTTjR3cyLTS2yUUoauChTVwoMdV0iv9vWI8fKp9kGTqErYlyDPQhFzCWisj00mHrw1c8Y');

function App () {
  const [windowWidth, detectWidth] = useState(window.innerWidth);
  const detectSize = () => {
    detectWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowWidth]);

  const [, dispatch] = useStateValue();
  const [showMenu, setShowMenu] = useState(true);

  const props = {
    showMenu,
    setShowMenu,
    windowWidth
  };

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      authUser ? dispatch({
        type: 'SET_USER',
        user: authUser
      }) : dispatch({
        type: 'SET_USER',
        user: null
      });
    });
  }, [dispatch]);

  return (
    <div className="app">
      <div className="home__background">
        <Routes>
          <Route path="/" element={<Layout {...props} />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
            <Route
              path="payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
            />
          </Route>
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

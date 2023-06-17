import './SignIn.scss';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignIn ({ setUserAvatar, setUserName }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(auth => {
        if (auth) {
          setUserName(auth.user.email.slice(0, auth.user.email.indexOf('@')));
          navigate('/');
        }
      })
      .catch(error => alert(error.message));

  };

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(auth => {
        if (auth) {
          setUserName(auth.user.email.slice(0, auth.user.email.indexOf('@')));
          navigate('/');
        }
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='signIn'>
      <Link to="/">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiqexpress.co.uk%2Fwp-content%2Fuploads%2F2018%2F01%2Famazon-logo-transparent.png&f=1&nofb=1&ipt=7608c6a5b2ca227820ee8b44e44c5f11bfd976974bb3ec06a19c92fc51834cb7&ipo=images"
          alt="Amazon Logo"
          className="signIn__logo"
        />
      </Link>

      <div className="signIn__container">
        <h1>Sign in</h1>

        <form onSubmit={signIn}>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            className="signIn__button"
            onPointerDown={signIn}
            type="submit"
          >
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to the Amazon Fake Clone's Conditions of Use and Privacy Notice.
        </p>

        <button
          className="signIn__registerButton"
          onPointerDown={register}
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default SignIn;

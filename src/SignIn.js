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
          src="/amazon-logo.png"
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
            onClick={signIn}
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
          onClick={register}
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default SignIn;

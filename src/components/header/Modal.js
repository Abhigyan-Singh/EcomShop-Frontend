import './Modal.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { authenticate } from 'services/auth';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';

const Modal = ({ onClose }) => {
  const [cookies, setCookie] = useCookies(['user']);
 const [loginFailed, setLoginFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const submit = (data) => {
    console.log(JSON.stringify(data));
    authenticate(data).then((res) => {
      if (res.data.token) {
        setCookie('user', res.data, {
          path: '/',
          maxAge: CookiesAge
        });
        onClose();
      } else {
        setLoginFailed(true)
      }
    });
  };

  const updateError = () => {
    if (loginFailed)
    setLoginFailed(false)
  }
  return (
    <div className="modal-card">
      <div
        className="modal-bsw-modal-close"
        onClick={() => {
          onClose();
        }}
      >
        X
      </div>
      <h1 className="modal-heading">Sign In</h1>
      <form
        className="modal-bsw-form"
        onSubmit={handleSubmit((data) => {
          submit(data);
        })}
      >
        <div className="modal-form">
          <div className="modal-field">
            <input
              className="modal-bsw-form-group-input-dirty inputs"
              style={{
                color: errors.username ? 'red' : '#2c6b2c',
                borderColor: errors.username ? 'red' : '#2c6b2c'
              }}
              {...register('username', { onChange: () => {
                updateError()
              }, required: 'Enter your user name.' })}
              type="text"
              id="username"
              placeholder=" "
            />
            <label
              style={{ color: errors.username ? 'red' : '#2c6b2c' }}
              htmlFor="username"
              className="labels"
            >
              User Name
            </label>
          </div>
          {loginFailed &&  <p className="modal-modal-error" htmlFor="username">
              Invalid username or password
            </p>}
          {errors.username && (
            <p className="modal-modal-error" htmlFor="username">
              {errors.username.message}
            </p>
          )}
          <div className="modal-field">
            <input
              className="modal-bsw-form-group-input-dirty inputs"
              style={{
                color: errors.password ? 'red' : '#2c6b2c',
                borderColor: errors.password ? 'red' : '#2c6b2c'
              }}
              {...register('password', {onChange: () => {
                updateError()
              }, required: 'Enter your password.' })}
              type="password"
              id="password"
              placeholder=" "
            />
            <label
              style={{ color: errors.password ? 'red' : '#2c6b2c' }}
              htmlFor="password"
              className="labels"
            >
              Password
            </label>
          </div>
          {errors.password && (
            <p className="modal-modal-error" htmlFor="username">
              {errors.password.message}
            </p>
          )}
          <button className="modal-bsw-btn" type="submit">
            Sign In
          </button>
        </div>
        <p className="modal-forget-pass-container">
          <a href="https://shop.coborns.com/chooseresetoption">
            <span>Forgot User Name </span>/<span> Password</span>
          </a>
        </p>
        <div className="modal-bottom-border">
          <div className="modal-bottom-btn">
            <span>New to Coborn’s? </span>
            <a href="https://testweb.shop.coborns.com/createaccount">
            <button type="button" className="modal-signUp">Register</button>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Modal;

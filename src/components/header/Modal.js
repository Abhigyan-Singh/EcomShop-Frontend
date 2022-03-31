import './Modal.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { authenticate, userInfoService } from 'services/auth';
import { useCookies } from 'react-cookie';
import { CookiesAge } from 'apiConfig';
import useCart from 'services/addtocart';
import { CartState } from 'context/context';

const Modal = ({ onClose }) => {
  const [cookies, setCookie] = useCookies(['user']);
  const [loginFailed, setLoginFailed] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const { getCartDetails } = useCart();

  const { dispatchUser } = CartState();
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
        userInfoService().then((userRes) => {
          if (userRes.data) {
            setCookie('userInfo', userRes.data, {
              path: '/',
              maxAge: CookiesAge
            });
            dispatchUser({
              type: 'SET_USER',
              payload: { userName: data.userName }
            });
            getCartDetails(data.userName);
          }
        });

        onClose();
      } else {
        setLoginFailed(true);
      }
    });
  };

  const updateError = () => {
    if (loginFailed) setLoginFailed(false);
  };
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
              {...register('username', {
                onChange: () => {
                  updateError();
                },
                required: 'Enter your user name.'
              })}
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
          {loginFailed && (
            <p className="modal-modal-error" htmlFor="username">
              Invalid username or password
            </p>
          )}
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
              {...register('password', {
                onChange: () => {
                  updateError();
                },
                required: 'Enter your password.'
              })}
              type={visibility ? 'text' : 'password'}
              id="password"
              placeholder=" "
            />
            {!visibility && (
              <div
                style={{ position: 'absolute', top: 175, right: 25 }}
                onClick={() => setVisibility(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
            {visibility && (
              <div
                style={{ position: 'absolute', top: 175, right: 25 }}
                onClick={() => setVisibility(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clipRule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              </div>
            )}

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
          <a href="https://devweb2.shop.coborns.com/chooseresetoption">
            <span>Forgot User Name </span>/<span> Password</span>
          </a>
        </p>
        <div className="modal-bottom-border">
          <div className="modal-bottom-btn">
            <span style={{ color: '#2c6b2c' }}>New to Coborn’s? </span>
            <a href="https://devweb2.shop.coborns.com/createaccount">
              <button type="button" className="modal-signUp">
                Register
              </button>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Modal;

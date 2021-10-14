import './Modal.css';
import React from 'react';
import { useForm } from 'react-hook-form';
const Modal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
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
      <h1 className="modal-heading">Log In</h1>
      <form
        className="modal-bsw-form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="modal-form">
          <div className="modal-field">
            <input
              className="modal-bsw-form-group-input-dirty inputs"
              style={{
                color: errors.fullname ? 'red' : '#2c6b2c',
                borderColor: errors.fullname ? 'red' : '#2c6b2c'
              }}
              {...register('fullname', { required: 'Enter your user name.' })}
              type="text"
              id="fullname"
              placeholder=" "
            />
            <label
              style={{ color: errors.fullname ? 'red' : '#2c6b2c' }}
              htmlFor="fullname"
              className="labels"
            >
              User Name
            </label>
          </div>
          {errors.fullname && (
            <p className="modal-modal-error" htmlFor="username">
              {errors.fullname.message}
            </p>
          )}
          <div className="modal-field">
            <input
              className="modal-bsw-form-group-input-dirty inputs"
              style={{
                color: errors.password ? 'red' : '#2c6b2c',
                borderColor: errors.password ? 'red' : '#2c6b2c'
              }}
              {...register('password', { required: 'Enter your password.' })}
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
            Log In
          </button>
        </div>
        <p className="modal-forget-pass-container">
          <span>Forgot User Name </span>/<span> Password</span>?
        </p>
        <div className="modal-bottom-border">
          <div className="modal-bottom-btn">
            <span>New to CobornsDelivers? </span>
            <button className="modal-signUp">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Modal;

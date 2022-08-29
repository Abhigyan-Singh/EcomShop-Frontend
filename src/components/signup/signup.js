import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './signup.css';
import Button from 'components/button/button';
import Input from 'components/input/input';

const Signup = (props) => {
  const { className, onSubmit, ...rest } = props;
  const componentClassName = classNames('cbn-signup', {}, className);

  const [email, setEmail] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit({ email });
    }

    setEmail('');
  };

  return (
    <div className={componentClassName} {...rest}>
      <div className="max-w-4xl mx-auto px-4 py-4 md:py-8 lg:py-14 flex flex-col lg:flex-row md:items-center text-center lg:text-left">
        <div className="lg:w-0 lg:flex-1 mb-4 lg:mb-0">
          <h2 className="uppercase tracking-wider text-lg font-serif text-gray-600 mb-1">
            Get deals in your inbox weekly
          </h2>
          <p className="max-w-3xl text-base font-medium text-gray-600">
            Sign up for rewards and let the deals roll in.
          </p>
        </div>
        <div className="lg:ml-8">
          <form className="md:flex" onSubmit={handleOnSubmit}>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              className="block w-full md:w-72"
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email address"
              size="large"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className="mt-3 md:mt-0 md:ml-3 md:flex-shrink-0">
              <Button
                appearance="secondary"
                className="w-full sgnUpBot"
                label="Sign Up"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  onSubmit: PropTypes.func
};

Signup.defaultProps = {
  onSubmit: () => {}
};

export default Signup;

import React from "react";


const SignUpForm = () => {
  return (
    <div className="loginBox">
      <form>
        <label htmlFor='username'>username</label> {' '}
        <input type='text' name="username" id='username' />
        <br />
        <label htmlFor='password'>password</label>{' '}
        <input type='password' name="password" id='password' />
        <br />
        <button
          className="signUpSubmit"
          type="submit">
            Submit
        </button>
      </form>
      <p>
        Create an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
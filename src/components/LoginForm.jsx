import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div>
      <form className="login-form">
        <div className="form-element">
          <label htmlFor="">Email : </label>
          <input type="text" />
        </div>

        <div className="form-element">
          <label htmlFor="">Password : </label>
          <input type="password" />
        </div>

        <div className="form-element">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

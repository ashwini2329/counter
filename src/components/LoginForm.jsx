import React, { useState } from "react";
import "./LoginForm.css";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [formData, setFormdata] = useState([]);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setFormdata([...formData, data]);
    console.log(data);
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="">Email : </label>
          <input
            type="text"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email format is incorrect",
              },
            })}
          />
          {errors.email && <p className="error-msg">{errors.email?.message}</p>}
        </div>

        <div className="form-element">
          <label htmlFor="">Password : </label>
          <input
            type="text"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 6,
                message: "Password length should be more than 6 chars ",
              },
              maxLength: {
                value: 15,
                message: "Password length should not be more than 15 chars",
              },
            })}
          />
          {errors.password && (
            <p className="error-msg">{errors.password?.message}</p>
          )}
        </div>

        <div className="form-element">
          <input
            disabled={isSubmitting}
            type="submit"
            value={isSubmitting ? "Submitting" : "Submit"}
          />
        </div>
      </form>
      <div>
        <h3>Form Data:</h3>
        <ul>
          {formData.map((entry, idx) => (
            <li key={idx}>
              Email: {entry.email}, Password: {entry.password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoginForm;

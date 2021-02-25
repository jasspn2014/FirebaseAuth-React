import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, type, handleChange, name }) => (
  <div className="form__group field">
    <input type={type} className="form__field" name={name} onChange={handleChange} autoComplete="off" required />
    <label htmlFor={name} className="form__label">
      {label}
    </label>
  </div>
);

export default FormInput;

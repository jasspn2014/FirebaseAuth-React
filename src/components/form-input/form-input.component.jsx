import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, type, handleChange, name }) => (
  <div className="form__group field">
    <input type={type} class="form__field" name={name} onChange={handleChange} autocomplete="off" required />
    <label for={name} class="form__label">
      {label}
    </label>
  </div>
);

export default FormInput;

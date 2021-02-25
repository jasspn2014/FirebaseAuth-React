import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signup.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="sign-up">
        <form onClick={this.handleSubmit}>
          <FormInput label="Display Name" name="displayName" type="text" handleChange={this.handleChange} />
          <FormInput label="Email" name="email" type="email" handleChange={this.handleChange} />
          <FormInput label="Password" name="password" type="password" handleChange={this.handleChange} />
          <FormInput label="Confirm Password" name="confirmPassword" type="password" handleChange={this.handleChange} />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signin.styles.scss";

class SignIn extends React.Component {
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
      <div className="sign-in">
        <form onClick={this.handleSubmit}>
          <FormInput label="Email" name="email" type="email" handleChange={this.handleChange} />
          <FormInput label="Password" name="password" type="password" handleChange={this.handleChange} />
          <CustomButton type="submit">Login</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;

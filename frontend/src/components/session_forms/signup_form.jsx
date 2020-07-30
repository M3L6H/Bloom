import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import errorMessage from "../error_message/error_message";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      fName: "",
      lName: "",
      password: "",
      password2: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(() => { if (this.props.errors.length === 0) this.props.closeModal() });
  }

  render() {
    return (
      <Grid
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column style={{ width: 250 }}>
          <Form
            className="user-input-form"
            size="small"
            onSubmit={this.handleSubmit}
          >
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email"
              onChange={this.update("email")}
            />
            {errorMessage(this.props.errors, "email")}
            <Form.Input
              placeholder="First Name"
              onChange={this.update("fName")}
            />
            {errorMessage(this.props.errors, "fName")}
            <Form.Input
              placeholder="Last Name"
              onChange={this.update("lName")}
            />
            {errorMessage(this.props.errors, "lName")}
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={this.update("password")}
            />
            {errorMessage(this.props.errors, "password")}
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
              onChange={this.update("password2")}
            />
            {errorMessage(this.props.errors, "password2")}
            <Button className="ui test button" fluid size="large">
              Register
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignupForm;
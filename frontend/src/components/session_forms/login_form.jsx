import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import errorMessage from "../error_message/error_message";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => { if (this.props.errors.length === 0) this.props.closeModal()});
    this.setState = {
      email: "",
      password: "",
    };
  }

  handleDemo(e){
    e.preventDefault();
    this.props.demoLogin();
    this.props.closeModal();
  }

  render() {
  
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ width: 250 }}>
          <Form className="user-input-form">
            <Form.Input
              // error={{ content: 'Email is invalid' }}
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email"
              onChange={this.update("email")}
            />
            {errorMessage(this.props.errors, "email")}
            <Form.Input
              // error={{ content: 'Password field is required' }}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={this.update("password")}
            />
            {errorMessage(this.props.errors, "password")}
            <Button className="ui test button" fluid size="large" type="submit" onClick={this.handleSubmit}>
              Log In
            </Button>
            <div className="space"></div>
            <Button className="ui test button" fluid size="large" type="button" onClick={this.handleDemo}>
              Demo User
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;

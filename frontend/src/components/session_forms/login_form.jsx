import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";

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
      .then(() => {this.props.closeModal()});
  }

  handleDemo(e){
    e.preventDefault();
    this.props.demoLogin();
    this.props.closeModal();
  }

  renderErrors() {
    return <div>error messages will be printed</div>;
  }

  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ width: 250 }}>
          <Form className="user-input-form">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email"
              onChange={this.update("email")}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={this.update("password")}
            />
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

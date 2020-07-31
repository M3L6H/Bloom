import React from 'react';
import { Button, Form, Grid } from "semantic-ui-react";

class CreateRewards extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: "", petalCost: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReward(this.state);
    this.setState({ title: "", petalCost: 1 });
    this.props.closeModal();
  }

  render() {

    let suggestions = [];

    return (
      <>
        <Grid
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column style={{ width: 280 }}>
            <Form className="user-input-form" size="small">
              <div className="habit-add-title">Create Rewards for Yourself!</div>
              <br />
              <div className="field">
                <label>Rewards</label>
                <Form.Input
                  placeholder="Treat myself for a nice dinner."
                  value={this.state.title}
                  onChange={this.update("title")}
                />
              </div>
              <div className="ui form"></div>
              <div className="field">
                <label>Number of Petals to Use</label>
                <input type="number" min="1" value={this.state.petalCost} onChange={this.update("petalCost")}/>
              </div>
              <Button className="ui test button" type="button" fluid size="medium"
                onClick={this.handleSubmit}>
                Create Reward
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default CreateRewards;
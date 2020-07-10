import React from 'react';
import { Button, Form, Grid } from "semantic-ui-react";

class CreateRewards extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({},this.props.reward)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteReward = this.deleteReward.bind(this);
  }


  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  deleteReward(e){
    e.preventDefault();
    this.props.deleteReward(this.props.reward._id);
  }

  render() {
    
    let formTitle;
    let deleteButton = null; 
    if (this.props.formType === "Create Reward"){
      formTitle = "Create A Reward for Yourself!";
    }else {
      formTitle = "Edit Reward";
      deleteButton = <Button className="ui test button" type="button" fluid size="medium"
        onClick={this.deleteReward}>
          Delete Reward 
      </Button>;
    }

    return (
      <>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ width: 280 }}>
            <Form className="user-input-form" size="small">
              <div className="habit-add-title">{formTitle}</div>
              <br />
              <div className="field">
                <label>What to do when you're done?</label>
                <Form.Input
                  placeholder="Reward yourself for your work!"
                  value={this.state.title}
                  onChange={this.update("title")}
                />
              </div>
              <div className="ui form"></div>
              <div className="field">
                <label>How many petals will you need for this reward?</label>
                <input type="number" min="1" value={this.state.petalCost} onChange={this.update("petalCost")}/>
              </div>
              <Button className="ui test button" type="button" fluid size="medium"
                onClick={this.handleSubmit}>
                {this.props.formType}
              </Button>
              {deleteButton}
            </Form>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default CreateRewards;
import React from 'react';
import { Button, Dropdown, Form, Grid } from "semantic-ui-react";

class CreateRewards extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({},this.props.reward);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteReward = this.deleteReward.bind(this);
  }


  update(field) {
    return (e, details) => { 
      let { value, searchQuery } = details || {};

      searchQuery = isNaN(searchQuery) ? null : searchQuery;
      
      // There are several different ways values get passed in, thus all the ORs
      this.setState({ [field]: searchQuery || value || e.currentTarget.value });
    };
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
      deleteButton = (<Button className="ui test button delete-reward-button" type="button" fluid size="medium"
        onClick={this.deleteReward}>
          Delete Reward 
      </Button>);
    }

    let { petalCost } = this.state;

    petalCost = petalCost.toString();

    const petalCostOptions = [
      { key: "Small", text: "Small (1 petal)", value: "1" },
      { key: "Medium", text: "Medium (5 petals)", value: "5" },
      { key: "Large", text: "Large (10 petals)", value: "10" }
    ];

    if (petalCost && petalCost !== "1" && petalCost !== "5" && petalCost !== "10") {
      petalCostOptions.push({ key: "Custom", text: `Custom (${ petalCost } petals)`, value: petalCost });
    }

    let suggestions = ["Play an hour of League.", "Eat a chocolate bar.", "Watch a movie.", "Treat myself a nice dinner.", "Wear a beanie.", "Take a vacation to Hawaii.", "Go for a walk.", "Go for a backpacking trip.", "Take a long bath."];
    let suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];

    return (
      <>
        <Grid
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column>
            <Form className="user-input-form" size="small">
              <div className="habit-add-title">{formTitle}</div>
              <br />
              <div className="field">
                <label>Reward</label>
                <Form.Input
                  placeholder={suggestion}
                  value={this.state.title}
                  onChange={this.update("title")}
                />
              </div>
              <div className="ui form"></div>
              <div className="field">
                <label>Petal Cost for Redeeming</label>
                <Dropdown
                  placeholder="Select Cost"
                  selection
                  search
                  onSearchChange={ this.update("petalCost") }
                  onChange={ this.update("petalCost") }
                  value={ petalCost }
                  noResultsMessage={ null }
                  options={ petalCostOptions }
                />
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
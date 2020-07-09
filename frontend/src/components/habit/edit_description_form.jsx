import React from 'react';

export default class EditDescriptionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          description: props.description,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ description: e.target.value });
    }

    //get updated description to update habit
    handleSubmit(e) {
        //debugger;
        //const description = this.props.description;
        const description = this.state.description;
        //habit description needs to be updated
        this.props.habit.description= this.state.description;
        this.props.updateHabit(this.props.habit);
        this.props.hideEditForm();
    }

    //when edit description form is triggered, it renders edit form
    render() {
      //debugger;
        const { open, hideEditForm } = this.props;
        const { description } = this.state;
        if (!description) return null; 

        return (
          <div className={`description-edit ${open}`}>
            <div className="description-edit-container">
                <div className="dec-top">
                    Edit Description
                    <i
                        className="fa fa-times"
                        aria-hidden="true"
                        onClick={(e) => {
                        e.preventDefault();
                        hideEditForm();
                        }}
                    ></i>
                </div>
              <textarea
                type="text"
                value={description}
                className="edit-description-input"
                onChange={this.handleChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    this.handleSubmit();
                  }
                }}
              />
            </div>
          </div>
        );
    }
};
            
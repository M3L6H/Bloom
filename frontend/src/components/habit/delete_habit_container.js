import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { deleteHabit } from "../../actions/habits_actions";
import { Button } from 'semantic-ui-react';


class deleteHabitForm extends React.Component {

    constructor(props) {
        super(props);
        this.deleteHabit = this.deleteHabit.bind(this);
        this.closeModal = this.props.closeModal.bind(this);
    }

    deleteHabit() {
        this.props.deleteHabit(this.props.props.habit._id);
        this.props.closeModal();
        if (this.props.props.redirect) this.props.props.history.push("/habits");
    }

    render() {
    
        const {props} = this.props;
        return (
           <div className="task-modal-background">
                <form className="task-form">
                    <p className="delete-habit-question">Are you sure you want to delete </p>
                    <p className="delete-habit-title">{props.habit.title}?</p>
                    <div className="delete-habit-buttons">
                        <button className="delete-confirm-btn" onClick={this.deleteHabit}>yes</button>
                        <button className="delete-confirm-btn" onClick={this.closeModal}>no</button>
                    </div>

                </form>
            </div>
        );
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        deleteHabit: (id) => dispatch(deleteHabit(id))
    };
};

export default connect(null, mapDispatchToProps)(deleteHabitForm);

import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { deleteHabit } from "../../actions/habits_actions";


class deleteHabitForm extends React.Component {

    constructor(props) {
        super(props);
        this.deleteHabit = this.deleteHabit.bind(this);
    }

    deleteHabit() {
        this.props.deleteHabit(this.props.props.habit._id);
        this.props.closeModal();
        if (this.props.props.redirect) this.props.props.history.push("/habits");
    }

    render() {
        return (
           <div className="task-modal-backgroud">
                <form className="task-form">
                    <button className="delete-confirm-btn" onClick={this.deleteHabit}>Delete this habit?</button>
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

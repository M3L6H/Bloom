import React from "react";
import TaskIndexItem from "../task/task_index_item";
import EditDescriptionForm from "./edit_description_form";

class HabitShow extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      title: "",
      description: "",
      editDescription: false,
      complete: false,
    };
    this.toggleEditDescription = this.toggleEditDescription.bind(this);
  }

  componentDidMount() {
    this.props.fetchHabit(this.props.match.params.id);
  }

  toggleEditDescription() {
    var edit;
    this.state.editDescription ? (edit = false) : (edit = true);
    this.setState({
      description: this.props.habit.description,
      editDescription: edit,
    });
  }

  render() {
    const { habit, openModal, deleteHabit, updateHabit, tasks } = this.props;

    if (!habit || !tasks) return null;
    const { title, description } = habit;

    const open = this.state.editDescription ? "open" : "";
    var descriptionComponent;
    var editDescritionComponent;
    if (this.state.editDescription) {
      editDescritionComponent = (
        <EditDescriptionForm
          habit={habit}
          open={open}
          description={description}
          updateHabit={updateHabit}
          hideEditForm={this.toggleEditDescription}
        />
      );
    } else {
      descriptionComponent = <p className="description">{description}</p>;
    }
    //filter tasks belongs to the habit
    const habitTasks = tasks.filter((task) => task.habit === habit._id);
    const habitId = habit._id;

    return (
      <div className="habit-show-container">
        <div className="habit-show-main">
          <div className="habit-description">
            <div className="habit-show-top">
              <span className="title">{title}</span>
              <i
                className="fa fa-times-circle-o"
                aria-hidden="true"
                onClick={(habitId) => deleteHabit(habitId)}
              ></i>
            </div>
            <div className={`habit-show-middle ${open}`}>
              <div className="hsm-top">
                Description
                <i
                  className="fa fa-pencil"
                  onClick={this.toggleEditDescription}
                  aria-hidden="true"
                ></i>
              </div>
              {descriptionComponent}
            </div>
            {editDescritionComponent}
            <div className="hs-close-btn">
              <i
                className="fa fa-plus"
                aria-hidden="true"
                onClick={() => openModal("createTask")}
              ></i>
            </div>
            <div className="habit-show-bottom">
              {habitTasks.map((task, idx) => (
                <TaskIndexItem key={idx} task={task} habit={habit._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HabitShow;

import React from 'react';

class TaskItemShow extends React.Component {

  constructor(props){
    super(props);
    const { task } = props;
    this.state = { complete: task.numTimesDone >= task.periodNum };
    this.completeTask = this.completeTask.bind(this);
  }

  completeTask(e){
    if (this.props.task.numTimesDone >= this.props.task.periodNum) return;

    e.stopPropagation();
    let tracking = this.props.task.numTimesDone;
    tracking += 1;
    if (tracking >= this.props.task.periodNum) {
      this.props.user.petals += this.props.task.numPetals;
      this.setState({ complete: true });
      setTimeout(() => {
        this.props.updatePetals(this.props.user.petals);
        this.props.updateTask({ ...this.props.task, numTimesDone: tracking });
      }, 1000);
    } else {
      this.props.updateTask({
        ...this.props.task,
        numTimesDone: tracking,
      });
    }
  }

  render(){
      const { task, habit } = this.props;
      if(!task || !habit) return null;
      const complete = this.state.complete ? "check-" : "";

      return (
        <div className={`task-item-show-container ${complete}`}>
          <div className="task-complete"><i className={`far fa-${complete}square`} onClick={this.completeTask}></i></div>
          <div className="task-item-title">{task.title} <span>- {habit.title}</span></div>
          <div className="task-item-detail">
            <div className="frequency-and-petals">
              <div className="task-item-frequency">
                Goal: {task.numTimesDone}/{task.periodNum} per {task.periodUnit}
              </div>
              <div className="task-item-petals">
                Reward: { `${ task.numPetals } Petal${ task.numPetals > 1 ? "s" : "" }` }
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default TaskItemShow;
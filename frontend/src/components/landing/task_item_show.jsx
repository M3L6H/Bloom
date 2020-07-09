import React from 'react';

class TaskItemShow extends React.Component {

  constructor(props){
    super(props);
    this.state = { complete: false };
    this.toggleComplete = this.toggleComplete.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  toggleComplete(){
  }
  
  completeTask(e){
    this.tracking = this.props.task.numTimesDone;
    this.tracking += 1;
    this.props.user.petals += this.props.task.numPetals;
    this.props.updatePetals(this.props.user.petals);
    if (this.tracking >= this.props.task.periodNum) {
      this.setState({ complete: true });
      window.setTimeout(() => {  
        this.props.updateTask({ ...this.props.task, numTimesDone: this.tracking });
        this.setState({ complete: false })}, 1000);
      } else {
        this.props.updateTask({
          ...this.props.task,
          numTimesDone: this.tracking,
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
          <div className="task-item-title">Task: {task.title} <span>{habit.title}</span></div>
          <div className="task-item-detail">
            <div className="frequency-and-petals">
              <div className="task-item-frequency">
                Goal: {task.numTimesDone}/{task.periodNum} per {task.periodUnit}
              </div>
              <div className="task-item-petals">
                Reward: {task.numPetals} Petals
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default TaskItemShow;
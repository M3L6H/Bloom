import React from 'react';
import TaskItemShow from './task_item_show';
import Jar from '../jar';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loaded: false
    };
  }

  async componentDidMount(){
    this._mounted = true;
    await this.props.fetchHabits();
    await this.props.fetchUser();
    
    if (this._mounted) {
      this.setState({ loaded: true });
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render(){
    const { tasks, habits, updateTask, user, updatePetals } = this.props;
    if(!this.state.loaded) return null;

    let currentTasks = [];
    let index = 0;

    while (currentTasks.length < 3 && index < user.dailyTaskList.length) {
      const task = tasks[user.dailyTaskList[index]];
      if (task && task.numTimesDone < task.periodNum) {
        currentTasks.push(task);
      }

      ++index;
    }

    return(
        <div className="background">
            <Jar user={user}/>
            <div className="landing-tasks-container">
                <div className="redirect-add-habit" onClick={() => this.props.history.push("/habit")}><i className="fas fa-plus add-icon"></i></div>
                <div className="label-primary-tasks">Your Current Primary Tasks</div>
                {currentTasks.slice(0, 3).map((task, idx) => <TaskItemShow key={idx} task={task} habit={habits[task.habit]} updateTask={updateTask} updatePetals={updatePetals} user={user}/> )}
            </div>
        </div>
    );
  }
}

export default Landing;
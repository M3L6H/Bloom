import React from 'react';
import TaskItemShow from './task_item_show';
import Jar from '../jar';

import { Dropdown } from 'semantic-ui-react';

function truncate(str, len) {
  return str.length < len ? str : str.slice(0, len - 3) + "...";
}

class Landing extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loaded: false,
      habit: null
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
    const { habit } = this.state;
    const { tasks, habits, updateTask, user, updatePetals } = this.props;
    if(!this.state.loaded) return null;

    let index = 0;
    const currentTasks = [];
    const options = [{ key: "All Habits", value: null, text: "All Habits" }];
    const habitsHash = {};

    while (index < user.dailyTaskList.length) {
      const task = tasks[user.dailyTaskList[index]];
      if (task && task.numTimesDone < task.periodNum && (!habit || habits[task.habit].title === habit)) {
        currentTasks.push(task);
      }

      if (!task) continue;
      
      const title = habits[task.habit].title;
      
      if (!habitsHash[title]) {
        habitsHash[title] = true;
        
        options.push({
          key: title,
          text: truncate(title, 25),
          value: title
        });
      }

      ++index;
    }

    return(
        <div className="background">
            <Jar user={user}/>
            <div className="landing-tasks-container">
                <div className="redirect-add-habit" onClick={() => this.props.history.push("/habit")}>
                  <i className="fas fa-plus"></i>
                </div>
                <Dropdown
                  icon="filter"
                  floating
                  className="filter-dropdown"
                >
                  <Dropdown.Menu>
                    <Dropdown.Header content="Habits" />
                    <Dropdown.Menu scrolling>
                      { options.map(option => (
                        <Dropdown.Item { ...option } onClick={ () => this.setState({ habit: option.value }) } />
                      )) }
                    </Dropdown.Menu>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="label-primary-tasks">Your Current Primary Tasks</div>
                <div className="tasks">
                  {currentTasks.map((task, idx) => <TaskItemShow key={idx} task={task} habit={habits[task.habit]} updateTask={updateTask} updatePetals={updatePetals} user={user}/> )}
                </div>
                { currentTasks.length === 0 && 
                <div className="message">
                  You have completed all tasks for the currently selected habit!
                </div> }
            </div>
        </div>
    );
  }
}

export default Landing;
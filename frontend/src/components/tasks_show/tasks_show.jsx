import React from 'react';
import TaskShow from './task_show';

class TasksShow extends React.Component {

    componentDidMount(){
        this.props.fetchHabits();
    }

    render(){
        const { tasks, habits } = this.props;

        return(
            <div className="background">
                <div className="show-tasks-container">
                    <div className="show-tasks-header">
                        <h3>Your Tasks</h3>
                        <p>Drag and Drop to re-order</p>
                    </div>
                    <div className="shows-tasks-all">
                        {tasks.map((task, idx) => (
                            <TaskShow key={idx} task={task} habit={habits[task.habit]}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default TasksShow;
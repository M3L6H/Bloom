import React from 'react';
import TaskItemShow from './task_item_show';

class Landing extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchHabits();
    }

    render(){
        const { tasks, habits } = this.props;

        if(!tasks) return null;
        return(
            <div className="background">
                <div className="petal-jar-container">
                    Jar will go here
                </div>
                <div className="landing-tasks-container">
                    <div className="label-primary-tasks">Your Current Primary Tasks</div>
                    {tasks.slice(0,3).map( (task,idx) => <TaskItemShow key={idx} task={task} habit={habits[task.habit]}/> )}
                </div>
            </div>
        )
    }
}

export default Landing;
import React from 'react';
import TaskItemShow from './task_item_show';
import Jar from '../jar';

class Landing extends React.Component {

    componentDidMount(){
        this.props.fetchUser();
        this.props.fetchHabits();
    }

    render(){
        const { tasks, habits, updateTask, user, updatePetals } = this.props;
        if(!tasks || !user) return null;

        let currentTasks = [];
        tasks.forEach( task => {
            if(task.numTimesDone < task.periodNum) {
                currentTasks.push(task);}
            });

        return(
            <div className="background">
                <div className="petal-jar-container">
                    <Jar user={user}/>
                </div>
                <div className="landing-tasks-container">
                    <div className="label-primary-tasks">Your Current Primary Tasks</div>
                    {currentTasks.slice(0, 3).map((task, idx) => <TaskItemShow key={idx} task={task} habit={habits[task.habit]} updateTask={updateTask} updatePetals={updatePetals} user={user}/> )}
                </div>
            </div>
        )
    }
}

export default Landing;
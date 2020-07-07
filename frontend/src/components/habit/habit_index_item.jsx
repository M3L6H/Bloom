import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItem from '../task/task_index_item';

class HabitIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            title: "Eat Healthy",
            description: "I'm going to eat healthy, so I can have a grerat skin and never get aged!",//this.props.description// 
            tasks: ['drink water', 'eat less chocolate', 'eat more vegetable!']
        }
    }

    ren

    render() {
        debugger;
        const {title, description, task, complete} = this.state;
        return (
            <div>
                <div className='habit-description'>
                    <div className='habit-show-top'>
                        {title}
                    </div>
                    <div className='habit-show-middle'>
                        {description}
                    </div>
                    <div className='habit-show-bottom'>
                        { this.state.tasks.map(
                            (task) => < TaskIndexItem task={task} />) }
                    </div> 
                </div>

            </div>
        )
    }
}

export default HabitIndexItem;
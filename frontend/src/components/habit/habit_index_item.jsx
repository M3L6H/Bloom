import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItem from '../task/task_index_item';

class HabitIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            title: "Eat Healthy",
            description: "I'm going to eat healthy, so I can have a grerat skin and never get aged! I don't want to consume junk food but it so affordable and delicious. It's bad for the environment though.. ",
            tasks: ['drink water', 'eat less chocolate', 'eat more vegetable!']
        }
    }

    

    render() {
        const {title, description, tasks, complete} = this.state;
        return (
            <div>
                <div className='habit-description'>
                    <div className='habit-show-top'>
                        <span className='title'>{title}</span>
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className='habit-show-middle'>
                        Description
                        {description}
                    </div>
                    <div className='habit-show-bottom'>
                        { tasks.map(
                            (task, idx) => < TaskIndexItem 
                                             key={idx}
                                             task={task} 
                                             complete={complete} />) }
                    </div> 
                </div>

            </div>
        )
    }
}

export default HabitIndexItem;
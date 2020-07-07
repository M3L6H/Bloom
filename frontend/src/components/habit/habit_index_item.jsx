import React from 'react';
import { Link } from 'react-router-don';

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
        const {title, description, task, complete} = this.props;
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
                        {tasks.map(task) => this.renderTask(task)}

                    </div>

                    
                </div>

            </div>
        )
    }
}

export default HabitIndexItem;
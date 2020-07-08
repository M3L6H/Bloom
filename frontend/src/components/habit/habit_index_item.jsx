import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItem from '../task/task_index_item';
import EditDescriptionForm from './edit_description_form';

class HabitIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Eat Healthy",
            description: "I'm going to eat healthy, so I can have a grerat skin and never get aged! I don't want to consume junk food but it so affordable and delicious. It's bad for the environment though.. ",
            tasks: ['drink water', 'eat less chocolate', 'eat more vegetable!'],
            edit: false,
            complete: false
        }
        this.openEditForm = this.openEditForm.bind(this);
        this.hideEditForm = this.hideEditForm.bind(this);
    }

    openEditForm() {
        this.setState({ edit: true });
    }

    hideEditForm() {
        this.setState({ edit: false });
    }

    render() {
        const {
            title, description, tasks, complete, updateHabit, deleteHabit
        } = this.state;


        const open = this.state.edit ? 'open' : '';
    
 
        return (
            <div className="habit-show-container">
                <div className="habit-show-main">
                    <div className='habit-description'>
                        <div className='habit-show-top'>
                            <span className='title'>{title}</span>
                            <i className="fas fa-bars"></i>
                        </div>
                        <div className='habit-show-middle'>
                            <div className='hsm-top'>
                                Description 
                                <i class="fa fa-bell" aria-hidden="true"></i>
                                <EditDescriptionForm
                                    open={open}
                                    description={description}
                                    updateHabit={updateHabit}
                                    hideEditForm={this.hideEditForm}
                                />
                            </div>
                            {description}
                        </div>
                        <div className='habit-show-bottom'>
                            { tasks.map
                                ((task, idx) => < TaskIndexItem 
                                                    key={idx}
                                                    task={task} 
                                                    complete={complete} />) }
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default HabitIndexItem;
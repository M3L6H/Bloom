import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItem from '../task/task_index_item';
import EditDescriptionForm from './edit_description_form';
import { fetchHabits } from '../../util/habits_util';

class HabitIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Eat Healthy",
            description: "I'm going to eat healthy, so I can have a grerat skin and never get aged! I don't want to consume junk food but it so affordable and delicious. It's bad for the environment though.. ",
            tasks: ['drink water', 'eat less chocolate', 'eat more vegetable!'],
            editDescription: false,
            complete: false
        }
        this.toggleEditDescription = this.toggleEditDescription.bind(this); 
        
    }

    

    toggleEditDescription(){
        var edit;
        this.state.editDescription ? edit = false : edit = true;
        this.setState({editDescription: edit}); 
    }

    render() {
        //debugger;
        const { title, description, tasks, complete } = this.state;
        const { updateHabit, deleteHabit } = this.props;


        const open = this.state.editDescription ? 'open' : '';
        var descriptionComponent;
        var editDescritionComponent;
        if(this.state.editDescription){
            editDescritionComponent = (
              <EditDescriptionForm
                open={open}
                description={description}
                updateHabit={updateHabit}
                hideEditForm={this.toggleEditDescription}
              />
            );
                             
        } else {
            descriptionComponent = <p className="description">{description}</p>; 
        }
 
        return (
          <div className="habit-show-container">
            <div className="habit-show-main">
              <div className="habit-description">
                <div className="habit-show-top">
                  <span className="title">{title}</span>
                  <i className="fas fa-bars"></i>
                </div>
                <div className={`habit-show-middle ${open}`}>
                  <div className="hsm-top">
                    Description
                    <i
                      className="fa fa-bell"
                      onClick={this.toggleEditDescription}
                      aria-hidden="true"
                    ></i>
                  </div>
                  {descriptionComponent}
                </div>
                {editDescritionComponent}
                <div className="habit-show-bottom">
                  {tasks.map((task, idx) => (
                    <TaskIndexItem key={idx} task={task} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default HabitIndexItem;
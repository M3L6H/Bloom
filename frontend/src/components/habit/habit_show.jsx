import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItem from '../task/task_index_item';
import EditDescriptionForm from './edit_description_form';


class HabitShow extends React.Component {
    constructor(props) {
      //debugger
      super(props);
      this.state = {
        title: props.habit.title,
        description: props.habit.description,
        editDescription: false,
        complete: false
        };
      this.toggleEditDescription = this.toggleEditDescription.bind(
      this
      );
    }

    componentDidMount() {
      this.props.fetchHabit(this.props.match.params.id)
    }

    toggleEditDescription(){
        var edit;
        this.state.editDescription ? edit = false : edit = true;
        this.setState({editDescription: edit}); 
    }

    render() {
   
        const { habit } = this.props;
        if (!habit) return null;
  
        const { title, description, complete } = this.state;
        const { updateHabit, deleteHabit, tasks } = this.props;


        const open = this.state.editDescription ? 'open' : '';
        var descriptionComponent;
        var editDescritionComponent;
        if(this.state.editDescription){
            editDescritionComponent = (
              <EditDescriptionForm
                habit={habit}
                open={open}
                description={description}
                updateHabit={updateHabit}
                hideEditForm={this.toggleEditDescription}
              />
            );
                             
        } else {
            descriptionComponent = <p className="description">{description}</p>; 
        }

        debugger;
        return (
          <div className="habit-show-container">
            <div className="habit-show-main">
              <div className="habit-description">
                <div className="habit-show-top">
                  <span className="title">{title}</span>
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
                    <TaskIndexItem key={idx} task={task.title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default HabitShow;
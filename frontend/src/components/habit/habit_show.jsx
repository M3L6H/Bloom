import React from 'react';
import TaskIndexItem from '../task/task_index_item';
import EditDescriptionForm from './edit_description_form';

class HabitShow extends React.Component {
    constructor(props) {

      super(props);
      this.state = {
        title: "",
        description: "",
        editDescription: false,
        complete: false
        };
      this.showEditDescription = this.showEditDescription.bind(this);
      this.hideEditDescription = this.hideEditDescription.bind(this);
    }

    componentDidMount() {
      this.props.fetchHabit(this.props.match.params.id)
    }

    showEditDescription(){
      this.setState({description: this.props.habit.description, editDescription: true}); 
    }

    hideEditDescription(description){
      this.setState({description: description || this.props.habit.description, editDescription: false}); 
    }

    render() {
   
        const { habit, openModal } = this.props;
        
        const { updateHabit, tasks } = this.props;
        if (!habit || !tasks) return null;
        const { title, description: habitDesc } = habit;
        const description = this.state.description || habitDesc;

        const open = this.state.editDescription ? 'open' : '';
        let descriptionComponent;
        if(this.state.editDescription){
          descriptionComponent = (
            <EditDescriptionForm
              habit={habit}
              open={open}
              description={description}
              updateHabit={updateHabit}
              hideEditForm={this.hideEditDescription}
            />
          );
                             
        } else {
          descriptionComponent = <pre className="description">
            { description.length > 0 ? description : "Click here to add a description." }
          </pre>; 
        }
        //filter tasks belongs to the habit
        const habitTasks = (
          tasks.filter(task => task.habit === habit._id)
        )
        
        return (
          <div className="habit-show-container">
            <div className="habit-show-main">
              <div className="habit-description">
                <div className="habit-show-top">
                  <span className="title">{title}</span>
                </div>
                <div className="hsm-top">
                  Description
                  <i
                    className="fa fa-pencil"
                    onClick={this.showEditDescription}
                    aria-hidden="true"
                  ></i>
                </div>
                <div 
                  className={`habit-show-middle ${open}`}
                  onClick={this.showEditDescription}
                >
                  {descriptionComponent}
                </div>
                <div className="hsb-top">
                  Tasks
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => openModal("createTask")}
                  ></i>
                </div>
                <div className="habit-show-bottom">
                  {habitTasks.map((task, idx) => (
                    <TaskIndexItem key={idx} task={task} habit={habit._id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default HabitShow;
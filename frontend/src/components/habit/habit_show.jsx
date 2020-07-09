import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItem from '../task/task_index_item';
import EditDescriptionForm from './edit_description_form';



class HabitShow extends React.Component {
    constructor(props) {
      //debugger
      super(props);
      this.state = {
        title: "",
        description: "",
        editDescription: false,
        complete: false
        };
      this.toggleEditDescription = this.toggleEditDescription.bind(
      this
      );
    }

    componentDidMount() {
      this.props.fetchHabit(this.props.match.params.id)//.then (
      //  ()=>(this.setState({title: this.props.habit.title, description: this.props.habit.description}))
      // )
    }

    toggleEditDescription(){
        var edit;
        this.state.editDescription ? edit = false : edit = true;
        this.setState({description: this.props.habit.description, editDescription: edit}); 
    }

    render() {
   
        const { habit, openModal } = this.props;
        
        const { updateHabit, deleteHabit, tasks } = this.props;
        if (!habit || !tasks) return null;
        const { title, description } = habit;
        

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

              
        return (
          <div className="habit-show-container">
            <div className="habit-show-main">
              <div className="habit-description">
                <div className="habit-show-top">
                  <span className="title">{title}</span>
                </div>
                <div className={`habit-show-middle ${open}`}>
                  <div className="hsm-top">Description</div>
                  <i
                    className="fa fa-pencil"
                    onClick={this.toggleEditDescription}
                    aria-hidden="true"
                  ></i>
                  {descriptionComponent}
                </div>
                {editDescritionComponent}
                <i
                  className="fa fa-plus"
                  aria-hidden="true"
                  onClick={() => openModal("createTask")}
                ></i>
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

export default HabitShow;
import React from 'react';
import TaskIndexItem from '../task/task_index_item';
import EditTitleForm from './edit_title_form';
import EditDescriptionForm from './edit_description_form';

class HabitShow extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        title: "",
        description: "",
        editDescription: false,
        editTitle: false,
        complete: false
      };

      this.showEditDescription = this.showEditDescription.bind(this);
      this.hideEditDescription = this.hideEditDescription.bind(this);
      this.showEditTitle = this.showEditTitle.bind(this);
      this.hideEditTitle = this.hideEditTitle.bind(this);
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

    showEditTitle() {
      this.setState({ title: this.props.habit.title, editTitle: true });
    }

    hideEditTitle(title)  {
      this.setState({ title: title || this.props.habit.title, editTitle: false });
    }

    render() {
        const { habit, openModal } = this.props;
        const { updateHabit, tasks } = this.props;
        if (!habit || !tasks) return null;
        const { title: habitTitle, description: habitDesc } = habit;
        const title = this.state.title || habitTitle;
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
        );

        let titleComponent;
        if (this.state.editTitle) {
          titleComponent = (
            <EditTitleForm
              habit={ habit }
              title={ title }
              updateHabit={ updateHabit }
              hideEditForm={ this.hideEditTitle }
            />
          );
        } else {
          titleComponent = <span className="title" onClick={ this.showEditTitle }>{title}</span>;
        }
        
        return (
          <div className="show-tasks-container">
            <i className="fa fa-times" aria-hidden="true"
              onClick={() => openModal("deleteHabit", this.props)} ></i>
            <div className="habit-show-main">
              <div className="habit-description">
                <div className="habit-show-top">
                  {titleComponent}
                  <i
                    className="fa fa-pencil"
                    onClick={this.showEditTitle}
                    aria-hidden="true"
                  ></i>
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
                    onClick={() => openModal("createTask", habit)}
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
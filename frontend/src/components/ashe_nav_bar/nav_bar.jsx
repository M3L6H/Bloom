import React from 'react';

class NavBar extends React.Component {

    render(){

        const landing = this.props.location.pathname === "/landing" ? "landing" : "" ;
        const tasksLocation = this.props.location.pathname === "/tasks" ? "tasksLocation" : "" ;
        const habitsLocation = this.props.location.pathname === "/habits" ? "habitsLocation" : "" ;

        return (
          <div className="navbar-container">
            <div className="navbar">
              <div className={`link-home ${landing}`} onClick={() => this.props.history.push("/landing")}>Home</div>
              <div className={`link-tasks ${tasksLocation}`} onClick={() => this.props.history.push("/tasks")}>Tasks</div>
              <div className={`link-habits ${habitsLocation}`} onClick={() => this.props.history.push("/habits")}>Habits</div>
              <div className="navbar-icons">
                <i className="fa fa-bars"></i>
                <div className="navbar-dropdown">
                    <div onClick={() => this.props.history.push("/dashboard")}>Dashboard</div>
                    <div onClick={() => this.props.history.push("/habit")}>Create Habits</div>
                    <div onClick={this.props.logout}>LogOut</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default NavBar;
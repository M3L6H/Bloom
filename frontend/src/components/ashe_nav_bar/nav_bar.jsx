import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      dropdownOpen: false
    };

    this._handleBodyClick = this._handleBodyClick.bind(this);
    this._handleDropdownClick = this._handleDropdownClick.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener("click", this._handleBodyClick);
  }
  
  _handleBodyClick() {
    this.setState({ dropdownOpen: false });
  }

  _handleDropdownClick(e) {
    e.stopPropagation();
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render(){
    const { dropdownOpen } = this.state;
    
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
            <i className="fa fa-bars" onClick={ this._handleDropdownClick }></i>
            <div className={`navbar-dropdown${ dropdownOpen ? " open" : "" }`}>
                <div onClick={() => this.props.history.push("/landing")}>Home</div>
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
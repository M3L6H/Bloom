import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Dropdown extends Component {
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

  render() {
    const { dropdownOpen } = this.state;
    
    return (
      <div className="navbar-icons">
        <i className="fa fa-bars" onClick={ this._handleDropdownClick }></i>
        <div className={`navbar-dropdown${ dropdownOpen ? " open" : "" }`}>
            <div onClick={() => this.props.history.push("/landing")}>Home</div>
            <div onClick={() => this.props.history.push("/dashboard")}>Dashboard</div>
            <div onClick={() => this.props.history.push("/habit")}>Create Habits</div>
            <div onClick={this.props.logout}>LogOut</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dropdown);
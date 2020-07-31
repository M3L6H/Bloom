import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { Dropdown } from 'semantic-ui-react';

class CustomDropdown extends Component {
  render() {
    return (
        <Dropdown
          icon="bars"
          direction="right"
          className="custom-dropdown"
        >
          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item
              text="Home"
              onClick={ () => this.props.history.push("/landing") }
            />
            <Dropdown.Item
              text="Dashboard"
              onClick={ () => this.props.history.push("/dashboard") }
            />
            <Dropdown.Item
              text="Create Habits"
              onClick={ () => this.props.history.push("/habit") }
            />
            <Dropdown.Item
              text="Log Out"
              onClick={ this.props.logout }
            />
          </Dropdown.Menu>
        </Dropdown>
    );
  }
}

export default withRouter(CustomDropdown);
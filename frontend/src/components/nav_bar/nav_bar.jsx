import React from 'react';
import { Dropdown } from 'semantic-ui-react'

class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
       
        return(
            <div className="ui tabular menu">
                <a href='#' className="active item"> first ele </a>
                <a href='#' className="item"> second ele </a>
                <i className='fa fa-bars' aria-hidden='true'></i>
                <div className='dropdown'>
                    <div className='dropdown-content'>
                            <a href="#">Profile</a>
                            <a href="#">One</a>
                            <a href="#">logout</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NavBar;

//<li onClixk={this.props.logout}>Logout<li>
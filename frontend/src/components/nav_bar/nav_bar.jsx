import React from 'react';
import { Dropdown } from 'semantic-ui-react'

class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const dropdown = (
            <Dropdown.Menu>
                <Dropdown.Item text='Profile' />
                <Dropdown.Item text='ele1' />
                <Dropdown.Item text='ele2'/>
                <Dropdown.Item text='ele3'/>
            </Dropdown.Menu>
        )
        return(
            <div className="ui tabular menu">
                <a href='#' className="active item"> first ele </a>
                <a href='#' className="item"> second ele </a>
                <i class='fa fa-bars' aria-hidden='true'></i>
                <div className='dropdown'>
                    <div classNme='dropdown-content'>
                            <a href="#">Profile</a>
                            <a href="#">One</a>
                            <a href="#">One</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NavBar;
import React from 'react';


class NavBar extends React.Component {
    render() {
       
        return(
            <div className="ui tabular menu">
                <a href='/' className="active item"> first ele </a>
                <a href='/' className="item"> second ele </a>
                <div className='dropdown'>
                <i className='fa fa-bars' aria-hidden='true'></i>
                    <div className='dropdown-content'>
                            <a href="/">Profile</a>
                            <a href="/">One</a>
                            <a href="/">logout</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NavBar;

//<li onClick={this.props.logout}>Logout<li>
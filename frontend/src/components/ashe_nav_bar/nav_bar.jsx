import React from 'react';

class NavBar extends React.Component {
    render(){
        return(
            <div className="navbar-container">
                <div className="navbar">
                    <div>this is Ashe's Nav Bar</div>
                    <div><i className="fas fa-sign-out-alt" onClick={this.props.logout}></i></div>
                </div>
            </div>
        )
    }
}

export default NavBar
import React from 'react';

class NavBar extends React.Component {
    render(){
        return(
            <div className="navbar-container">
                <div className="navbar">
                    <div>this is Ashe's Temp Nav Bar</div>
                    <div className="navbar-icons">
                        <div><i className="fas fa-edit" onClick={() => this.props.history.push("/tasks")}></i></div>
                        <div><i className="fas fa-home" onClick={() => this.props.history.push("/landing")}></i></div>
                        <div><i className="fas fa-plus" onClick={() => this.props.history.push("/habit")}></i></div>
                        <div><i className="fas fa-sign-out-alt" onClick={this.props.logout}></i></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar
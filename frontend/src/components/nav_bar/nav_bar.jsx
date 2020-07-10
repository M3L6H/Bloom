import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-icons-right">
            <div>
              <Link to={`/`}>
                <span>Home</span>
              </Link>
            </div>
            <div>
              <Link to={`/`}>
                <span>First</span>
              </Link>
            </div>
            <div>
              <Link to={`/`}>
                <span>Second</span>
              </Link>
            </div>
          </div>
          <div className="navbar-icons-left">
            <i className="fa fa-bars"></i>
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to={`/`}>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/habits`}>
                    <span>My Habits</span>
                  </Link>
                </li>
                <li onClick={this.props.logout}>Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;

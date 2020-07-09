import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {

  render() {
    return (
      <div className="nav-bar">
        <div className="left">
          <div className="nav-first">
            <Link className="plain" to="/">
              First
            </Link>
          </div>
          <div className="answers">
            <Link className="plain" to="/">
              Second
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="hamburger-icn">
            <i className="fa fa-bars" aria-hidden="true"></i>
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to={`/`}>
                    <span>My Profile</span>
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

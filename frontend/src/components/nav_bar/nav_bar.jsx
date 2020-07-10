import React from 'react';


class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-left">
            <div>
              <Link className="plain" to="/">
                <p>Home</p>
              </Link>
            </div>
            <div>
              <Link className="plain" to="/habits">
                <p>Habits</p>
              </Link>
            </div>
            <div>
              <Link className="plain" to="/">
                <p>Tasks</p>
              </Link>
            </div>
          </div>
          <div className="navbar-right">
            <i className="fa fa-bars"></i>
            <div className="dropdown-content">
                <li>
                    <Link to={`/habits`}>
                        <span>My Habits</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/habit`}>
                        <span>My Reward</span>
                    </Link>
                </li>
                <li onClick={this.props.logout}>Logout</li> 
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default NavBar;

//<li onClick={this.props.logout}>Logout<li>
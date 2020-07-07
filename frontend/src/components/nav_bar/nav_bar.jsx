import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="ui tabular menu">
                <a href='#' className="active item"> first ele </a>
                <a href='#' className="item"> second ele </a>
                <i class="fas fa-bars"></i>
            </div>
        )
    }
}

export default NavBar;
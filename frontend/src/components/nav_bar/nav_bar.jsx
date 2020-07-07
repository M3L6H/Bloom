import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const dropdown = (
            <div class="menu" >
            <div class="item">Profile</div>
            <div class="item">ele1</div>
            <div class="item">ele2</div>
            <div class="item">ele3</div>
            </div >
        )
        return(
            <div className="ui tabular menu">
                <a href='#' className="active item"> first ele </a>
                <a href='#' className="item"> second ele </a>
                <i class="fas fa-bars">
                    {dropdown}
                </i>
            </div>
        )
    }
}

export default NavBar;
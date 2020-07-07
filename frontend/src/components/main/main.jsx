import React from 'react';

import img01 from "../../images/a01.jpg";
import img02 from "../../images/a02.jpg";
import img03 from "../../images/a03.jpg";
import img04 from "../../images/a04.jpg";
import img05 from "../../images/a05.jpg";
import img06 from "../../images/a06.jpg";
import img07 from "../../images/a07.jpg";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.hydrangea = React.createRef();

    window.addEventListener("load", () => {
      console.log("called");
      this.hydrangea.current.classList.add("animated");
    });
  }

  render(){
    const { openModal } = this.props;

    return(
      <div className="hydrangea" ref={ this.hydrangea }>
        <img src="https://i.ibb.co/9vrwdSr/bloom.png" alt="hydrangea"/>
        <img src={ img01 } style={{ display: "none" }} />
        <img src={ img02 } style={{ display: "none" }} />
        <img src={ img03 } style={{ display: "none" }} />
        <img src={ img04 } style={{ display: "none" }} />
        <img src={ img05 } style={{ display: "none" }} />
        <img src={ img06 } style={{ display: "none" }} />
        <img src={ img07 } style={{ display: "none" }} />
        <div className="main-buttons">
          <button className="ui button" onClick={() => openModal('login')}>Log In</button>
          <button className="ui button" onClick={() => openModal('signup')}>Sign Up</button>
        </div>
      </div>
    )
  }
}

export default Main;
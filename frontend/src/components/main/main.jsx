import React from 'react';
import { Button } from 'semantic-ui-react';

class Main extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const { openModal } = this.props;

        return(
            <div className="hydrangea">
                <img src="https://i.ibb.co/9vrwdSr/bloom.png"/>
                <div className="main-buttons">
                    <button className="ui button" onClick={() => openModal('login')}>Log In</button>
                    <button className="ui button" onClick={() => openModal('signup')}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default Main;
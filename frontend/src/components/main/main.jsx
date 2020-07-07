import React from 'react';

class Main extends React.Component {


    render(){
        const { openModal } = this.props;

        return(
            <div className="hydrangea">
                <img src="https://i.ibb.co/9vrwdSr/bloom.png" alt="hydrangea"/>
                <div className="main-buttons">
                    <button className="ui button" onClick={() => openModal('login')}>Log In</button>
                    <button className="ui button" onClick={() => openModal('signup')}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default Main;
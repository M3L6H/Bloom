import React from 'react';

class Landing extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchHabits();
    }

    render(){
        return(
            <div className="background">
                <div>

                </div>
                <div>
                    
                </div>
                This is Landing Page
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                This is Landing
            </div>
        )
    }
}

export default Landing;
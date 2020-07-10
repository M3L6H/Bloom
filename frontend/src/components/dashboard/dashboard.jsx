// User Dashboard

// Imports
import React from "react";
import RewardMenuItem from "./reward_menu_item";

//Main
export default class UserDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            propsLoaded:false,
        }

        //Function bindings
        this.openNewReward = this.openNewReward.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser().then(() => this.setState({propsLoaded:true}));
    }

    openNewReward(e){
        e.preventDefault();
        this.props.openModal("createRewards");
    }

    render(){
        if(!this.state.propsLoaded){
            return null;
        }

        let rewards = this.props.user.rewards
        
        let rewardList;

        if(rewards.length === 0){
            rewardList = <h3 className="no-reward-message">It looks like you haven't added any rewards! Click the "+" button to get started.</h3>
        } else{
            rewardList = rewards.map(reward => <RewardMenuItem key={ reward._id } reward={reward} openModal={this.props.openModal} />)
        }
        return(
            <div className="dashboard-container">

                <h1>{this.props.user.fName}</h1>

                <div className="rewards-options">
                    <h2>Rewards <i className="fas fa-plus add-reward" onClick={this.openNewReward}></i></h2>
                    <div className="rewards-list">
                        {rewardList}
                    </div>
                </div>


            </div>
        )
    }
}
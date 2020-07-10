// Rewards menu item
// expects a reward object as prop

import React from "react";

export default class RewardMenuItem extends React.Component{

    constructor(props){
        super(props);

        this.openEditForm = this.openEditForm.bind(this); 
    }

    openEditForm(e){
        e.preventDefault();
        this.props.openModal("editReward",this.props.reward); 
    }

    render(){
        
        const {reward} = this.props;

        return(
            <div className="rewards-use-item-container" onClick={this.openEditForm}>
                <div className="rewards-title">{reward.title}</div>
                <div className="rewards-petal-use reward-menu-item" >
                    <img
                        className="petal"
                        src="https://i.ibb.co/wNWxh1g/petal.png"
                        alt="petal"
                        border="0"
                    />
                    <h3>{reward.petalCost}</h3>
                </div>
            </div>
        )
    }
}
// Rewards menu item
// expects a reward object as prop

import React from "react";

export default class RewardMenuItem extends React.Component{

    constructor(props){
        super(props);

        this.openEditForm = this.openEditForm.bind(this); 
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        e.stopPropagation();
        this.props.deleteReward(this.props.reward._id);
    }

    openEditForm(e){
        e.preventDefault();
        this.props.openModal("editReward",this.props.reward); 
    }

    render(){
        
        const { reward } = this.props;

        return(
            <div className="rewards-use-item-container" onClick={this.openEditForm}>
                <div className="rewards-title">{reward.title}</div>
                <div className="rewards-petal-use reward-menu-item" >
                    <h3>{reward.petalCost}</h3>
                    <img
                        className="petal"
                        src="https://i.ibb.co/wNWxh1g/petal.png"
                        alt="petal"
                        border="0"
                    />
                </div>
                <div className="delete-rewards-button" onClick={this.handleDelete}>
                    <i className="fas fa-minus"></i>
                </div>
            </div>
        )
    }
}
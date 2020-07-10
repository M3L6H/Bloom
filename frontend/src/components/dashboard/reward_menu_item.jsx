// Rewards menu item
// expects a reward object as prop

import React from "react";

export default function RewardMenuItem({reward}){

    return(
        <div className="rewards-use-item-container">
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
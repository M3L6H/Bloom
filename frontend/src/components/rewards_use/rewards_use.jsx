import React from 'react';
import RewardsUseItem from './rewards_use_item';

class RewardsUse extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div className="rewards-use-container">
            <div className="rewards-use-label">Redeem Your Rewards!</div>
            <div className="rewards-use-petals">
              <img className="petal" src="https://i.ibb.co/wNWxh1g/petal.png" alt="petal" border="0" />
              Your current petals: {this.props.petals}
            </div>
            <div className="rewards-use-details">
                <RewardsUseItem />
            </div>
          </div>
        );
    }
}

export default RewardsUse;
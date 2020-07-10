import React from 'react';
import RewardsUseItem from './rewards_use_item';

class RewardsUse extends React.Component {

    render(){
        return (
          <div className="rewards-use-container">
            <div className="rewards-use-label">Redeem Your Rewards!</div>
            <div className="rewards-use-petals">
              <img
                className="petal"
                src="https://i.ibb.co/wNWxh1g/petal.png"
                alt="petal"
                border="0"
              />
              Your current petals: {this.props.petals}
            </div>
            <div className="rewards-use-details">
              {this.props.rewards.map((reward, idx) => (
                <RewardsUseItem key={idx} petals={this.props.petals} reward={reward} updatePetals={this.props.updatePetals}/>
              ))}
            </div>
          </div>
        );
    }
}

export default RewardsUse;
import React from 'react';
import RewardsUseItem from './rewards_use_item';

class RewardsUse extends React.Component {

    render(){
      const { rewards, petals, updatePetals, spawnFireworks, removePetal } = this.props;
      
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
              Your current petals: {petals}
            </div>
            <div className="rewards-use-details">
              {rewards.map((reward, idx) => (
                <RewardsUseItem key={idx} petals={petals} reward={reward} updatePetals={updatePetals} spawnFireworks={ spawnFireworks } removePetal={ removePetal }/>
              ))}
            </div>
          </div>
        );
    }
}

export default RewardsUse;
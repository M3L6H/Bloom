import React from 'react';

class RewardsUseItem extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let newPetalNum = this.props.petals - this.props.reward.petalCost;
        if (newPetalNum >= 0) {
            this.props.updatePetals(newPetalNum);
            this.props.spawnFireworks(this.props.reward.petalCost);
            this.props.removePetal(this.props.reward.petalCost);
        }
    }

    render(){
        return (
          <div className="rewards-use-item-container">
            <div className="rewards-title">{this.props.reward.title}</div>
            <div className="rewards-petal-use" onClick={this.handleClick}>
              <img
                className="petal"
                src="https://i.ibb.co/wNWxh1g/petal.png"
                alt="petal"
                border="0"
              />
              <h3>{this.props.reward.petalCost}</h3>
            </div>
          </div>
        );
    }
}

export default RewardsUseItem;
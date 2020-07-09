import React from 'react';

class RewardsUseItem extends React.Component {

    render(){
        return (
          <div className="rewards-use-item-container">
            <div className="rewards-title">Play 1 game of League</div>
            <div className="rewards-petal-use">
              <img
                className="petal"
                src="https://i.ibb.co/wNWxh1g/petal.png"
                alt="petal"
                border="0"
              />
              3 petals
            </div>
          </div>
        );
    }
}

export default RewardsUseItem;
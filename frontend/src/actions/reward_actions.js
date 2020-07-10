// Reward actions
import * as APIUtil from "../util/rewards_util";
import {receiveUser, receiveUserErrors} from "../actions/users_actions";


//Create reward
export const createReward = reward => dispatch => (
    APIUtil.createReward(reward)
            .then(res=> dispatch(receiveUser(res.data)))
            .catch(err=> dispatch(receiveUserErrors(err.response.data)))
);


export const deleteReward = rewardId => dispatch => (
    APIUtil.deleteReward(rewardId)
            .then(res => dispatch(receiveUser(res.data)))
            .catch(err => dispatch(receiveUserErrors(err.response.data)))
);

export const editReward = reward => dispatch => (
    APIUtil.editReward(reward)
        .then(res => dispatch(receiveUser(res.data)))
        .catch(err => dispatch(receiveUserErrors(err.response.data)))
)


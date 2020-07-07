import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import HabitIndexItem from './habit_index_item';

const mapStateToProps = (state) => {
    return null //({})
}

const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: () => dispatch(openModal())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitIndexItem);
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditDescriptionForm from './edit_description_form';



class HabitIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
               const { habit, deleteHabit } = this.props;
                     

               return (
                 <div className="hit-container">
                   <Link to={`/habits/${habit._id}`}>
                     <p className="hit-title">
                       {habit.title}
                     </p>
                   </Link>
                 </div>
               );
             }

}

export default HabitIndexItem;
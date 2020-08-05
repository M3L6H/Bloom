import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Header, Image, Modal } from 'semantic-ui-react';

import demoLanding from '../../images/demo-landing.png';
import demoTasks from '../../images/demo-tasks.png';
import demoHabits from '../../images/demo-habits.png';
import demoDashboard from '../../images/demo-dashboard.png';
import demoCreateHabit from '../../images/demo-create-habit.png';
import demoHabitShow from '../../images/demo-habit-show.png';

const Demo = ({ location }) => {
  const [open, setOpen] = useState(false);

  // Trigger for the modal
  let trigger = (
    <Button
      className="demo-button"
      circular
      color="violet"
      icon="help"
    />
  );

  const modalDetails = {};

  switch(location.pathname) {
    case "/landing":
      modalDetails.title = "Home Help";
      modalDetails.image = demoLanding;
      modalDetails.description = (<>
        <p>The home page is the heart of the app. Here you can complete tasks, redeem rewards, and more.</p>
        <p>1. A chief feature of Bloom is the petal jar. Petals are what you get for completing tasks. You can redeem your petals at any point by clicking on the indicated panel.</p>
        <p>2. When you want to add more habits to work on, you can click the indicated plus sign.</p>
        <p>3. At any point, filter your list of tasks by habit by clicking on the filter button.</p>
        <p>4. To mark a task as complete, click the checkbox. Tasks that must be completed multiple times will not be marked as complete until the required number of reps has been reached.</p>
      </>);
      break;
    case "/tasks":
      modalDetails.title = "Tasks Help";
      modalDetails.image = demoTasks;
      modalDetails.description = (<>
        <p>The tasks page is a great place to get an overview of all your tasks.</p>
        <p>1. The auto sort button will sort your tasks based on the order of your habits.</p>
        <p>2. You can mark tasks as complete from this page by clicking the checkmark.</p>
        <p>3. Clicking on a task will open a form allowing you to edit it.</p>
        <p>4. The order of tasks here determines the order they will appear on the home page. However, the home page will not show completed tasks.</p>
      </>);
      break;
    case "/habits":
      modalDetails.title = "Habits Help";
      modalDetails.image = demoHabits;
      modalDetails.description = (<>
        <p>The habits page shows all the habits you are currently working on.</p>
        <p>1. Create habits by clicking on the indicated button.</p>
        <p>2. The minus button by each habit allows you to delete them.</p>
        <p>3. Clicking on a habit will take you to its edit page.</p>
        <p>4. Drag and drop habits to reorder them. This affects the auto sort button on the tasks page.</p>
      </>);
      break;
    case "/dashboard":
      modalDetails.title = "Dashboard Help";
      modalDetails.image = demoDashboard;
      modalDetails.description = (<>
        <p>The dashboard page shows your user details and rewards.</p>
        <p>1. You can see how many petals you have earned and used in the process of using Bloom.</p>
        <p>2. Add more rewards for redemption by clicking the indicated button.</p>
        <p>3. Remove a reward by clicking the minus button.</p>
        <p>4. Clicking on a reward will allow you to edit it.</p>
      </>);
      break;
    case "/habit":
      modalDetails.title = "Habit Creation Help";
      modalDetails.image = demoCreateHabit;
      modalDetails.description = (<>
        <p>The habit creation page allows you to make new habits.</p>
        <p>1. Name your habit using the title field.</p>
        <p>2. Add a description for what you want to accomplish.</p>
        <p>3. A good habit can be broken down into periodic tasks. Add them with the indicated button.</p>
        <p>4. Create the habit by clicking the create habit button or go back by pressing the back button.</p>
      </>);
      break;
    // The default case matches up against the habit show route
    default:
      modalDetails.title = "Habit Editing Help";
      modalDetails.image = demoHabitShow;
      modalDetails.description = (<>
        <p>The habit edit page allows you to edit an existing habit.</p>
        <p>1. Edit the habit's title or delete the habit with the indicated buttons.</p>
        <p>2. Update the habit's description by clicking the edit button or the description field itself.</p>
        <p>3. Add and remove tasks by using the indicated plus and X buttons.</p>
        <p>4. Edit a task by clicking on it.</p>
      </>);
  }
  
  return (
    <>
      <Modal
        closeIcon
        onClose={ () => setOpen(false) }
        onOpen={ () => setOpen(true) }
        open={ open }
        trigger={ trigger }
      >
        <Modal.Header>Bloom Demo</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={ modalDetails.image } wrapped />
          <Modal.Description>
            <Header>{ modalDetails.title }</Header>
            { modalDetails.description }
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default withRouter(Demo);

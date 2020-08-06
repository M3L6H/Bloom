import React from 'react';

class Demo extends React.Component {

    render(){
        return(
            <div className="demo-container">
                <div className="demo-title">How to use Bloom</div>
                <div className="demo-image demo-01"></div>
                <div className="demo-prompt">Welcome to Bloom. Bloom is a personal goal-setting app that uses positive reinforcement to help you build new habits, without the stress!</div>
                <div className="demo-image demo-02"></div>
                <div className="demo-prompt">To use the app, you first need to let Bloom know what new habits you want to build. Go to the hamburger menu on the upper right and click "Create Habits."</div>
                <div className="demo-image demo-03"></div>
                <div className="demo-prompt">Start by giving a title to your new Habit. What do you want to accomplish?</div>
                <div className="demo-image demo-04"></div>
                <div className="demo-prompt">Habits are long term lifestyle goals. In order to form a habit, you need to break it down into smaller "Tasks" that you can do day-to-day. Think of what you 
                need to do to accomplish your goal, and add each task to the Habit by clicking the "+" button on the bottom right.</div>
                <div className="demo-prompt">Each task needs a name, a frequency (for example, once a day or twice a year) as well as the number of Petals that you want to receive by completing it.
                Bloom allows you to choose your own reward amount based on the complexity of the task. Petals will be redeemed later for rewards!</div>
                <div className="demo-image demo-05"></div>
                <div className="demo-prompt">Now that we've added tasks we are ready to create this habit.</div>
                <div className="demo-image demo-06"></div>
                <div className="demo-prompt">You can always go back and edit your habits by clicking on them in the "Habits" tab. 
                    You can also drag and drop to re-order your habits, which will affect the relative priority of their associated tasks (we'll come back to this later!)</div>
                <div className="demo-image demo-08"></div>
                <div className="demo-prompt">All your tasks can be viewed at once on the "Tasks" tab. You can drag and drop to put the highest priority tasks on top. Those tasks will show up first on your home screen. Hitting the "Auto Sort" 
                button will re-order your tasks according to the order you specified of their parent Habits in the "Habits" tab</div>
                <div className="demo-image demo-09"></div>
                <div className="demo-prompt">The Home page displays a list of your uncompleted tasks ordered by their priority. 
                 
                <div className="demo-image demo-11"></div>
                To complete a task, simply click the check box on the top right. 
                As you complete tasks, you will accumilate petals in the petal jar! These petals can be redeemed for rewards, which you set for yourself from your personal dashboard.</div>
                <div className="demo-image demo-10"></div>
                <div className="demo-prompt">Bloom allows you to set your own rewards for success. What do you like to do to unwind? Go for a walk? Play video games? Drink some boba?
                 Choose how you want to compensate yourself for the tasks you complete, and how many petals that reward will cost!</div>                
                <div className="demo-image demo-12"></div>
                <div className="demo-prompt">When you have accumulated enough petals to reward yourself, you can click on the jar to use your petals the way you like.</div>
                <div className="demo-image demo-13"></div>
                <div className="demo-prompt">Choose your reward. The assigned petals will be deducted from the jar.</div>
                <div className="demo-image demo-14"></div>
                <div className="demo-prompt">Finish tasks, accumulate petals, reward yourself, and repeat!</div>
                <div className="demo-thankyou">
                    Bloom was created as an alternative to more intrusive goal setting apps to give users a nudge in the right direction.
                    There's no penalties in Bloom, and all rewards are user defined based on your specific needs. We hope you have fun using Bloom,
                    and wish you the best of luck in becoming your best self. 
                </div>
                <div className="demo-thankyou">With warmest regards,</div>
                <div className="demo-thankyou">Michael Hollingworth, Anna Cho, Ajay Rajamani, Ashe Hwang.</div>
            </div>
        )
    }
}

export default Demo;
<h1 style="center">Bloom</h1>

A positive reinforcement habit builder with a growth mindset. Find the live demo
here: [bloom](https://bl00m.herokuapp.com/).

This app is designed to provide an intuitive and encouraging way to build habits
and achieve personal goals. We are already hard enough on ourselves as it is.
Oftentimes what we need is just a small push in the right direction. That's
where Bloom comes in.

Through a combination of visually appealing rewards, an easy-to-use interface,
and sensible defaults, Bloom makes it easy to set your goals and achieve them.

##### Table of Contents

- [Technologies Used](#technologies-used)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Features](#features)
  - [The Petal Jar](#the-petal-jar)
  - [Drag and Drop Reordering](#drag-and-drop-reordering)

## Technologies Used

Many technologies came together in the process of building this app.

### Backend

In the backend we used MongoDB for our database and Mongoose to define schemas
and models. We used JWT for authentication and BCrypt for password hashing. Our
server runs on Express, and we used Validator for validating input.

### Frontend

Our frontend is built with React and Redux. We used Axios to make api calls, and
all our styles are written in Sass. The jar was built with the p2.js physics
library. We also used React Beautiful Dnd for drag and drop functionality.

## Features

In the process of developing this app, we added a number of unique features. Two
are highlighted below.

### The Petal Jar

Designing the petal jar to function correctly proved to be quite challenging. We
used the physics library p2.js to calculate the physics, but the rendering logic
was custom made. Particularly difficult was rendering the jar itself, which was
accomplished with the following code:

```js
_renderConvexShape(shape, ctx) {
  const [x, y] = shape.body.position;
  const [shapeX, shapeY] = shape.position;

  ctx.save();
  ctx.fillStyle = this.jarColor;
  ctx.strokeStyle = this.jarColor;
  ctx.beginPath();
  ctx.translate(x + shapeX, y + shapeY);
  ctx.rotate(shape.body.angle);
  ctx.moveTo(shape.vertices[0][0], shape.vertices[0][1]);
  shape.vertices.forEach((_, idx) => {
    const [nextX, nextY] = shape.vertices[(idx + 1) % shape.vertices.length];
    ctx.lineTo(nextX, nextY);
  });
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}
```

### Drag and Drop Reordering

The ability to drag and drop tasks to reorder them also was a complicated
feature. We used the React Beautiful Dnd library, but managing the ordering in
the backend was also quite difficult. Because of our unique schema in which
tasks are nested inside of models, our users had to maintain a separate list of
task ids indicating their ordering. This required some sophisticated backend
logic to update said tasks list when users create/delete habits and tasks.

```js
router.post("/:id/tasks", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const { errors, isValid } = validateTask(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }
  
  let myHabit;
  let owner;
  try {
    myHabit = await Habit.findOne({ _id: req.params.id });
    owner = await User.findById(req.user.id);
  } catch(err) {
    return res.status(422).json({ ...err, message: "Bad request." });
  }

  // Check that we are the author
  if (!myHabit) {
    return res.status(404).json(`Could not find habit with id ${ req.params.id }`);
  }
  
  // Prevent the user from accessing another's habits
  if (req.user.id != myHabit.user) {
    return res.status(403).json("Cannot edit another user's habits!");
  }

  const {
    title,
    periodNum,
    periodUnit,
    numPetals
  } = req.body;

  const newTask = new Task({
    habit: myHabit,
    title,
    periodNum,
    periodUnit,
    numPetals
  });


  myHabit.tasks.push(newTask);
  owner.dailyTaskList.push(newTask.id);
  owner.save();
  myHabit.save()
    .then(obj => res.json(obj.tasks[obj.tasks.length - 1]))
    .catch(err => res.status(422).json(err));
});
```

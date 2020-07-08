import React, { Component } from 'react';
import withWindowDimensions from '../hocs/with_window_dimensions';

import p2 from 'p2';

class Jar extends Component {
  constructor(props) {
    super(props);
  
    this.canvasRef = React.createRef();
    this.world = new p2.World({
      gravity: [0, -9.82]
    });

    const polyBody = new p2.Body({
      mass: 1,
      position: [5, 10]
    });
    console.log(polyBody.fromPolygon([[0, 0], [0, 20], [30, 20], [30, 0], [20, 0], [20, 10], [10, 10], [10, 0]]));
    
    this.world.addBody(polyBody);

    const circleBody = new p2.Body({
      mass: 5,
      position: [0, 10]
    });
    circleBody.addShape(new p2.Circle({ radius: 1 }));

    this.world.addBody(circleBody);

    const groundBody = new p2.Body({
      mass: 0,
      position: [0, 30]
    });
    groundBody.addShape(new p2.Plane());

    this.world.addBody(groundBody);

    this.state = {
      polyBody,
      circleBody,
      groundBody
    };

    this.fixedTimeStep = 1 / 60;
    this.maxSubSteps = 10;

    this._updateAnimation = this._updateAnimation.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this._updateAnimation);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  _renderConvexShape(shape, ctx) {
    const [x, y] = shape.body.position;
    const [shapeX, shapeY] = shape.position;

    ctx.save();
    ctx.beginPath();
    ctx.translate(x + shapeX, y + shapeY);
    ctx.rotate(shape.body.angle);
    ctx.moveTo(shape.vertices[0][0], shape.vertices[0][1]);
    shape.vertices.forEach((_, idx) => {
      const [nextX, nextY] = shape.vertices[(idx + 1) % shape.vertices.length];
      ctx.lineTo(nextX, nextY);
    });
    ctx.fill();
    // ctx.stroke();
    ctx.restore();
  }
  
  _updateAnimation(time) {
    // Update world
    const deltaTime = this.lastTime ? (time - this.lastTime) / 1000 : 0;
    this.world.step(this.fixedTimeStep, deltaTime, this.maxSubSteps);

    console.log(this.state.polyBody);
    console.log(this.state.circleBody);
    console.log(this.state.groundBody);
    
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = "rgb(90, 20, 20, 0.3)";

    ctx.fillRect(20, 20, 150, 100);

    // this._renderConvexShape(this.state.polyBody.shapes[0], ctx);

    this.state.polyBody.shapes.forEach(shape => {
      this._renderConvexShape(shape, ctx);
    });
    
    this.lastTime = time;
    // this.rAF = requestAnimationFrame(this._updateAnimation);
  }
  
  render() {
    const { windowWidth, windowHeight } = this.props;

    return (
      <canvas
        width={ windowWidth }
        height={ windowHeight * 0.5 }
        className="jar"
        ref={ this.canvasRef }
      ></canvas>
    );
  }
}

export default withWindowDimensions(Jar);
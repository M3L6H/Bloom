import React, { Component } from 'react';
import withWindowDimensions from '../hocs/with_window_dimensions';

import p2 from 'p2';
import petal from "../../images/petal.png";

class Jar extends Component {
  constructor(props) {
    super(props);
  
    this.canvasRef = React.createRef();

    // Setting up dimensions
    this.windowPercentage = 0.5;

    const { windowWidth, windowHeight } = this.props;

    this.unit = Math.min(windowWidth, windowHeight * this.windowPercentage) / 75;
    this.innerDiameter = 40 * this.unit;
    this.topOffset = 15 * this.unit;
    this.petalSize = 9;

    // Set up world
    this.world = new p2.World({
      gravity: [0, 75 * this.unit]
    });

    // Initializing state
    this.state = {
      lastTime: null
    };

    // Simulation constants
    this.fixedTimeStep = 1 / 60;
    this.maxSubSteps = 10;

    // Binding functions
    this._updateAnimation = this._updateAnimation.bind(this);
    this.removePetals = this.removePetals.bind(this);

    // Body id
    this.bodyId = 1;

    // Appearance
    this.jarColor = "#C9B9DF";

    // Initial values
    this.jar = null;
    this.petals = [];

    // Set up petals image
    this.petalImgSize = 72 * this.unit / 7.3;
    this.petalImg = new Image(this.petalImgSize, this.petalImgSize);
    this.petalImg.src = petal;
  }

  componentDidMount() {
    // Create jar
    const { windowWidth } = this.props;
    const position = [(windowWidth - this.innerDiameter) / 2 - 3 * this.unit, this.topOffset];
    this.jar = this._createPolyBody(this._jarPath(), { position });

    // Spawn petals
    this._spawnPetals(this.props.petals);
    this.rAF = requestAnimationFrame(this._updateAnimation);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.petals !== this.props.petals) {
      this._spawnPetals(this.props.petals - prevProps.petals);
    }

    if (prevProps.windowHeight !== this.props.windowHeight || prevProps.windowWidth !== this.props.windowWidth) {
      this.jar = null;
      this.petals = [];

      const { windowHeight, windowWidth } = this.props;
      this.unit = Math.min(windowWidth, windowHeight * this.windowPercentage) / 75;
      this.innerDiameter = 40 * this.unit;
      this.topOffset = 15 * this.unit;

      this.world = new p2.World({
        gravity: [0, 75 * this.unit]
      });

      this.petalImgSize = 72 * this.unit / 7.3;
      this.petalImg = new Image(this.petalImgSize, this.petalImgSize);
      this.petalImg.src = petal;

      const position = [(windowWidth - this.innerDiameter) / 2 - 3 * this.unit, this.topOffset];
      this.jar = this._createPolyBody(this._jarPath(), { position });
      this._spawnPetals(this.props.petals);
    }
  }

  _spawnPetals(amt) {
    if (amt > 0) {
      const { windowWidth } = this.props;
      const petalPosition = [(windowWidth - this.innerDiameter) / 2 + 0.15 * this.innerDiameter + Math.random() * 0.7 * this.innerDiameter, this.topOffset + 5 * this.unit];
      this.petals.push(this._createPolyBody(this._petalPath(), { position: petalPosition, mass: 1 }));
      setTimeout(() => this._spawnPetals(amt - 1), 150);
    }
  }

  removePetals(amt) {
    for (let i = 0; i < amt && this.petals.length > 0; ++i) {
      const petal = this.petals.pop();
      this.world.removeBody(petal);
    }
  }

  _petalPath() {
    return [
      [0, 4 / 5 * this.petalSize * this.unit],
      [this.petalSize * this.unit, 4 / 5 * this.petalSize * this.unit],
      [3.5 / 5 * this.petalSize * this.unit, 0],
      [1.5 / 5 * this.petalSize * this.unit, 0]
    ];
  }

  _jarPath() {
    const { windowHeight } = this.props;
    const height = (windowHeight * this.windowPercentage) - (this.topOffset + this.unit);

    return [
      [2 * this.unit, 0],
      [2 * this.unit, this.unit],
      [this.unit, this.unit],
      [this.unit, 2 * this.unit],
      [2 * this.unit, 2 * this.unit],
      [2 * this.unit, 4 * this.unit],
      [this.unit, 4 * this.unit],
      [this.unit, 5 * this.unit],
      [2 * this.unit, 5 * this.unit],
      [0, 8 * this.unit],
      [0, height - 2 * this.unit],
      [2 * this.unit, height],
      [5 * this.unit + this.innerDiameter + 2 * this.unit, height],
      [5 * this.unit + this.innerDiameter + 4 * this.unit, height - 2 * this.unit],
      [5 * this.unit + this.innerDiameter + 4 * this.unit, 8 * this.unit],
      [5 * this.unit + this.innerDiameter + 2 * this.unit, 5 * this.unit],
      [5 * this.unit + this.innerDiameter + 3 * this.unit, 5 * this.unit],
      [5 * this.unit + this.innerDiameter + 3 * this.unit, 4 * this.unit],
      [5 * this.unit + this.innerDiameter + 2 * this.unit, 4 * this.unit],
      [5 * this.unit + this.innerDiameter + 2 * this.unit, 2 * this.unit],
      [5 * this.unit + this.innerDiameter + 3 * this.unit, 2 * this.unit],
      [5 * this.unit + this.innerDiameter + 3 * this.unit, this.unit],
      [5 * this.unit + this.innerDiameter + 2 * this.unit, this.unit],
      [5 * this.unit + this.innerDiameter + 2 * this.unit, 0],
      [5 * this.unit + this.innerDiameter, 0],
      [5 * this.unit + this.innerDiameter, 5 * this.unit],
      [5 * this.unit + this.innerDiameter + 2 * this.unit, 8 * this.unit],
      [5 * this.unit + this.innerDiameter + 2 * this.unit, height - 2 * this.unit],
      [2 * this.unit, height - 2 * this.unit],
      [2 * this.unit, 8 * this.unit],
      [4 * this.unit, 5 * this.unit],
      [4 * this.unit, 0]
    ];
  }

  _createPolyBody(path, options={}) {
    const { position, mass, velocity } = options;
    const polyBody = new p2.Body({
      mass: mass || 0,
      position: position || [0, 0],
      velocity: velocity || [0, 0]
    });

    if (!polyBody.fromPolygon(path)) return false;

    this.world.addBody(polyBody);
    return polyBody;
  }

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

  _renderBody(body, ctx) {
    body.shapes.forEach(shape => {
      switch(shape.type) {
        case p2.Shape.CONVEX:
          this._renderConvexShape(shape, ctx);
          break;
        default:
      }
    });
  }

  _renderPetal(body, ctx) {
    const [x, y] = body.position;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(body.angle);
    ctx.drawImage(this.petalImg, -this.petalImgSize / 2, -this.petalImgSize / 2, this.petalImgSize, this.petalImgSize);
    ctx.restore();
  }

  _renderBodies(ctx) {
    this.petals.forEach(body => this._renderPetal(body, ctx));
    this._renderBody(this.jar, ctx);
  }
  
  _updateAnimation(time) {
    const { lastTime } = this.state;
    
    // Update world
    const deltaTime = lastTime ? (time - lastTime) / 1000 : 0;
    this.world.step(this.fixedTimeStep, deltaTime, this.maxSubSteps);

    // Render canvas
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    this._renderBodies(ctx);
    
    this.setState({ lastTime: time });
    this.rAF = requestAnimationFrame(this._updateAnimation);
  }
  
  render() {
    const { windowWidth, windowHeight, user } = this.props;

    return (
      <div className="petal-jar-container">
        <canvas
          width={windowWidth}
          height={windowHeight * this.windowPercentage}
          className="jar"
          ref={this.canvasRef}
        ></canvas>
        <div className="petal-jar-counter" onClick={() => this.props.openModal('useRewards', this.removePetals)}>
          <div>Current Petals: {user.petals}</div>
          <div>Click to Redeem</div>
        </div>
      </div>
    );
  }
}

export default withWindowDimensions(Jar);
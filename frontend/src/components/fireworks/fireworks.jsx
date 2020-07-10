import React, { Component } from 'react';
import withWindowDimensions from '../hocs/with_window_dimensions';

import p2 from 'p2';

class Fireworks extends Component {
  constructor(props) {
    super(props);
  
    this.canvasRef = React.createRef();

    const { windowWidth, windowHeight } = this.props;

    this.unit = Math.min(windowWidth, windowHeight * this.windowPercentage) / 75;

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
    this.spawnFireworks = this.spawnFireworks.bind(this);
    this._updateAnimation = this._updateAnimation.bind(this);

    // Appearance
    this.fireworksColor = "#C9B9DF";

    // Initial values
    this.fireworkId = 1;
    this.fireworks = {};
  }

  componentDidMount() {
    this.props.setSpawnFireworks(this.spawnFireworks);
    this.rAF = requestAnimationFrame(this._updateAnimation);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  spawnFireworks(numFireworks) {
    if (numFireworks > 0) {
      const { windowHeight, windowWidth } = this.props;
      const pos = [Math.random() * windowWidth, Math.random() * windowHeight];
      this._spawnFirework(pos);

      if (numFireworks > 1) {
        setTimeout(() => this.spawnFireworks(numFireworks - 1), 1500);
      }
    }
  }
  
  _spawnFirework(pos) {
    const firework = [];

    for (let i = 0; i < 36; ++i) {
      const angle = Math.PI * i / 36;
      const position = [Math.cos(angle * this.unit), Math.sin(angle * this.unit)];
      const force = [position[0] * 10, position[1] * 10];
      
      firework[this.fireworkId++] = this._createPolyBody(this._fireworkParticlePath(), {
        mass: 1,
        collisionResponse: false,
        position: [position[0] + pos[0], position[1] + pos[1]],
        force,
        angle
      });
    }

    this.fireworks.push(firework);
  }

  _fireworkParticlePath() {
    return [
      [0, 0],
      [0, 5 * this.unit],
      [this.unit, 5 * this.unit],
      [this.unit, 5 * this.unit]
    ];
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

  _createPolyBody(path, options={}) {
    const { position, mass, velocity, angle, force, collisionResponse } = options;
    const polyBody = new p2.Body({
      mass: mass || 0,
      position: position || [0, 0],
      velocity: velocity || [0, 0],
      angle: angle || 0,
      force: force || [0, 0],
      collisionResponse: collisionResponse || true
    });

    if (!polyBody.fromPolygon(path)) return false;

    this.world.addBody(polyBody);
    return polyBody;
  }

  _renderConvexShape(shape, ctx) {
    const [x, y] = shape.body.position;
    const [shapeX, shapeY] = shape.position;

    if (y <= this.props.windowHeight) this._done = false;

    ctx.save();
    ctx.fillStyle = this.fireworksColor;
    ctx.strokeStyle = this.fireworksColor;
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

  _renderFirework(firework, ctx) {
    let dead = true;

    this.fireworks[firework].forEach(fireworkParticle => {
      if (fireworkParticle.position[1] <= this.props.windowHeight) {
        dead = false;
      }

      this._renderBody(fireworkParticle, ctx);
    });

    if (dead) {
      delete this.fireworks[firework];
    }
  }

  _renderBodies(ctx) {
    for (const firework in this.fireworks) {
      this._renderFirework(firework, ctx);
    }
  }
  
  render() {
    const { windowWidth, windowHeight } = this.props;

    return (
      <canvas
        width={windowWidth}
        height={windowHeight}
        className="fireworks"
        ref={this.canvasRef}
      ></canvas>
    );
  }
}

export default withWindowDimensions(Fireworks);
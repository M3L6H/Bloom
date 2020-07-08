import React, { Component } from 'react';
import withWindowDimensions from '../hocs/with_window_dimensions';

import p2 from 'p2';

class Jar extends Component {
  constructor(props) {
    super(props);
  
    this.canvasRef = React.createRef();

    this._updateAnimation = this._updateAnimation.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this._updateAnimation);
  }
  
  _updateAnimation() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = "rgb(90, 20, 20, 0.3)";

    ctx.fillRect(20, 20, 150, 100);
    this.rAF = requestAnimationFrame(this._updateAnimation);
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
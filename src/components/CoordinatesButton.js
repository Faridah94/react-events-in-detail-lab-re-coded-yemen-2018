// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
<<<<<<< HEAD
    this.props.onReceiveCoordinates([event.clientX, event.clientY]); // prints 'click'
=======
    this.props.onReceiveCoordinates([event.clientX, event.clientY])); // prints 'click'
>>>>>>> 8b63d4e3b174d57409e0bb172cce2b3f2dac9b50
  }

  render() {
      return (
        <button onClick={this.handleClick}>Click me!</button>
      );
    }
}

// Code CoordinatesButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
<<<<<<< HEAD
    event.persist();
  setTimeout(()=> {this.props.onDelayedClick(event)},this.props.delay)

  }

=======
    console.log(event.onDelayedClick()); 
    console.log(event.delay); 

  }
  
>>>>>>> 8b63d4e3b174d57409e0bb172cce2b3f2dac9b50

  render() {
      return (
        <button onClick={this.handleClick}>Click me!</button>
      );
    }
}

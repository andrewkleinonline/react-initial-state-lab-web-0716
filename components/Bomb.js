const React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    return(
      //<p>{this.state.secondsLeft}</p>
      <p>{this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + ' seconds left before I go boom!'}</p>
    )

  }
}

module.exports = Bomb;

//<p>{this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + 'seconds left before I go boom!'}</p>

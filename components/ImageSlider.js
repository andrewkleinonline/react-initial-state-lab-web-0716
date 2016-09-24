const React = require('react');

class ImageSlider extends React.Component {

  constructor() {
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return(
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}

module.exports = ImageSlider;

// s initial state should have a property currentSlideIndex that starts at 0.
// It should render out the text 'I am on slide <CURRENT_SLIDE>',
//where <CURRENT_SLIDE> is the value of currentSlideIndex
//

// Write your code here.
import {Component} from 'react'

import './index.css'

const PLUS_IMG =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
const MINUS_IMG =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

class FaqItem extends Component {
  state = {isActive: false}

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS_IMG : PLUS_IMG
    const imageAltText = isActive ? 'minus' : 'plus'

    return (
      <button
        className="active-image"
        type="button"
        onClick={this.onToggleIsActive}
      >
        <img src={image} className="icon" alt={imageAltText} />
      </button>
    )
  }

  renderAnswerText = () => {
    const {isActive} = this.state
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails

    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswerText()}
      </li>
    )
  }
}

export default FaqItem

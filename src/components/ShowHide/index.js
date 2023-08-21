import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    isFirstNameClicked: false,
    isLastNameClicked: false,
  }

  onClickedFirstName = () => {
    this.setState(prevState => ({
      isFirstNameClicked: !prevState.isFirstNameClicked, // Simplified this line
    }))
  }

  onClickedLastName = () => {
    this.setState(prevState => ({
      isLastNameClicked: !prevState.isLastNameClicked, // Simplified this line
    }))
  }

  renderFirstName = () => {
    const {isFirstNameClicked} = this.state

    if (isFirstNameClicked) {
      return (
        <div className="infoCard">
          <p>Joe</p>
        </div>
      )
    }
    return null
  }

  renderLastName = () => {
    const {isLastNameClicked} = this.state

    if (isLastNameClicked) {
      return (
        <div className="infoCard">
          <p>Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <div>
            <button
              type="button"
              className="btnEl"
              onClick={this.onClickedFirstName}
            >
              Show/Hide Firstname
            </button>
            {this.renderFirstName()}
          </div>
          <div>
            <button
              type="button"
              className="btnEl"
              onClick={this.onClickedLastName}
            >
              Show/Hide Lastname
            </button>
            {this.renderLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

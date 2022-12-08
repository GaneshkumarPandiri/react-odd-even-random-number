// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState(item => ({count: item.count + number}))
  }

  render() {
    const {count} = this.state
    let result
    if (count % 2 === 0) {
      result = 'Even'
    } else {
      result = 'Odd'
    }
    return (
      <div className="bg-container">
        <h1>
          Count <span>{count}</span>
        </h1>
        <p>Count is {result}</p>
        <button
          type="button"
          className="button-type"
          onClick={this.onIncrement}
        >
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp

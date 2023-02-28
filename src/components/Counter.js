import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        }
    }

    increment(addValue) {
        this.setState(prevState => ({
            count: prevState.count + addValue
        }))
    }

  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={() => this.increment(1)}>add 1</button>
        <button onClick={() => this.increment(5)}>add 5</button>
      </div>
    )
  }
}

export default Counter
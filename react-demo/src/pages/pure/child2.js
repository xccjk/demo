import React, { Component } from 'react'

class Child2Page extends Component {
  render () {
    console.log('child2 render')
    return (
      <>
        <p>{`count: ${this.props.count}`}</p>
        <p>child2</p>
      </>
    )
  }
}

export default Child2Page

import React, { Component } from 'react'

class Child4Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(444, nextProps, nextState, this.props)
    if(nextProps.num2 === this.props.num2) {
      return false
    }
    return true
  }

  render () {
    console.log('child4 render')
    return (
      <>
        <p>{`num: ${this.props.num2}`}</p>
        <p>child4</p>
      </>
    )
  }
}

export default Child4Page

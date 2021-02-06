import React, { Component } from 'react'

class Child5Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(555, nextProps, nextState, this.props)
    if(JSON.stringify(nextProps) === JSON.stringify(this.props)) {
      return false
    }
    return true
  }

  render () {
    console.log('child5 render')
    const { id, label, value } = this.props
    return <p key={id}>{`${label}: ${value}`}</p>
  }
}

export default Child5Page

import React, { Component } from 'react'

class ClassPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidCatch() {
    console.log('componentDidCatch')
  }

  render () {
    console.log('render')
    return (
      <>
        <p>{`count: ${this.state.count}`}</p>
        <button onClick={() => this.setState({count: this.state.count++})}>+</button>
        <button onClick={() => this.setState({count: this.state.count})}>++</button>
      </>
    )
  }
}

export default ClassPage

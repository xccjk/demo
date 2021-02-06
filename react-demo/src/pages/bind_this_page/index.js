import React, { Component, PureComponent } from 'react'

class Header extends PureComponent {
  render() {
    console.log('render', this.props)
    return (
      <div>header</div>
    )
  }
}

class ClassPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 1
    }
    this.handleClick1 = this.handleClick1.bind(this)
  }

  handleClick1() {
    console.log('click1')
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClick2() {
    console.log('click2')
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClick3() {
    console.log('click3')
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClick4 = () => {
    console.log('click4')
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    console.log('render')
    return (
      <>
        <p>this绑定问题</p>
        <p>{`count: ${this.state.count}`}</p>
        <Header {...this.props} />
        <button onClick={this.handleClick1}>btn1</button>
        <button onClick={this.handleClick2.bind(this)}>btn2</button>
        <button onClick={() => this.handleClick3()}>btn3</button>
        <button onClick={this.handleClick4}>btn4</button>
      </>
    )
  }
}

export default ClassPage

import React, { Component } from 'react'

const Child = React.forwardRef((props, ref) => {
  return (
    <input type='text' ref={ref} />
  )
})

class Ref extends Component {
  constructor (props) {
    super(props)
    this.ref1 = ref => {this.refDom = ref}
    this.ref2 = React.createRef()
    this.ref3 = React.createRef()
  }
  

  componentDidMount() {
    
  }

  handleClick = () => {
    const { offsetWidth } = this.refDom
    console.log('width', offsetWidth)
  }

  handleClick1 = () => {
    const { offsetWidth } = this.ref2
    console.log('width1', offsetWidth)
  }

  handleFocus = () => {
    console.log(this.ref4)
    this.ref3.current.focus()
  }

  render() {
    return (
      <div>
        <div ref={this.ref1} onClick={() => this.handleClick()}>ref class v16.3后版本</div>
        <span ref={ref => this.ref2 = ref} onClick={() => this.handleClick1()}>ref class v16.3前版本</span>
        <Child ref={this.ref3} />
        <button onClick={() => this.handleFocus()}>获得焦点</button>
      </div>
    )
  }
}


export default Ref
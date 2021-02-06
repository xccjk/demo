import React, { Component } from 'react'
import { Button, Card } from 'antd'

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log('constructor')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps')
    return null
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return null
  }

  /*
  componentWillMount() {
    console.log('componentWillMount')
  }
  */

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  /*
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  */

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidCatch() {
    console.log('componentDidCatch')
  }

  render() {
    console.log('render')
    return (
      <div>
        <Card>
          <h2>react 生命周期流程顺序</h2>
          <div>{`count: ${this.state.count}`}</div>
          <Button type='primary' onClick={() => this.setState({ count: this.state.count + 1 })}>count</Button>
          <h3>挂载阶段</h3>
          <p>1: constructor</p>
          <p>2: getDerivedStateFromProps</p>
          <p>3: render</p>
          <p>4: componentDidMount</p>
          <h3>更新阶段</h3>
          <p>1: getDerivedStateFromProps</p>
          <p>2: shouldComponentUpdate</p>
          <p>3: render</p>
          <p>4: getSnapshotBeforeUpdate</p>
          <p>5: componentDidUpdate</p>
          <h3>卸载阶段</h3>
          <p>1: componentWillUnmount</p>
          <h3>其他生命周期</h3>
          <p>错误捕获</p>
          <p>1: componentDidCatch</p>
        </Card>
        <Card>
          <h2>各个生命周期的使用</h2>
          <h3>constructor</h3>
          <p>1: 初始化state</p>
          <p>{`constructor(props){`}</p>
          <p>{`super(props)`}</p>
          <p>{`this.state = { count: props.count }`}</p>
          <p>{`}`}</p>
          <p>2: 绑定this</p>
          <p>{`this.handleClick = this.handleClick.bind(this)`}</p>
          <h4>bind绑定的三种方式</h4>
        </Card>
      </div>
    )
  }
}

export default LifeCycle
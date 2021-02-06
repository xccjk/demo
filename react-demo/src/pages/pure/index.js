import React, { Component } from 'react'
import Child1 from './child1'
import Child2 from './child2'
import Child3 from './child3'
import Child4 from './child4'
import Child5 from './child5'

class PurePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      nums: { num1: 1, num2: 1 },
      dataSource: [
        {
          id: 0,
          label: '姓名',
          value: 'xcc'
        },
        {
          id: 1,
          label: '年龄',
          value: '25'
        },
        {
          id: 2,
          label: '性别',
          value: '男'
        }
      ]
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClick1 = () => {
    this.setState({
      nums: {...this.state.nums, ...{ num1: this.state.nums.num1 + 1 }}
    })
  }

  handleClick2 = () => {
    const data = this.state.dataSource.map((li, index) => {
      if(!index) {
        return { ...li, value: li.value + '1' }
      }
      return li
    })
    this.setState({
      dataSource: data
    })
  }

  render () {
    console.log('index render')
    return (
      <>
        <p>{`count: ${this.state.count}`}</p>
        <button onClick={this.handleClick}>+</button>
        <br/>
        <button onClick={this.handleClick1}>复杂数据结构</button>
        <h3>child1</h3>
        <Child1 />
        <h3>child2</h3>
        <Child2 count={this.state.count} />
        <h3>child3</h3>
        <Child3 />
        <h3>child4</h3>
        <Child4 {...this.state.nums} />
        <h3>child5</h3>
        <button onClick={this.handleClick2}>数组更新</button>
        {this.state.dataSource.map(li => {
          return <Child5 {...li} />
        })}
      </>
    )
  }
}

export default PurePage

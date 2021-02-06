<!--
 * @Author: your name
 * @Date: 2020-05-08 14:07:40
 * @LastEditTime: 2020-09-07 22:50:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-demo/README.md
-->
## hooks与class对比

### class组件的不足

- 状态逻辑难复用
- 复杂时难以维护
  - 在生命周期函数中混杂不相干逻辑，比如定时器，事件注册/卸载
  - 类组件中到处都是对状态的访问和处理，导致难以拆分为更小的组件
- this的指向问题
  - react中四种绑定this的方式
    - 1. this.handleClick = this.handleClick.bind(this)
    - 2. onClick={this.handleClick.bind(this)}
    - 3. onClick={() => this.handleClick()}
    - 4. onClick={this.handleClick}  handleClick = () => {}
  - 四种this绑定的优缺点
    - 第一种构造函数中绑定this，每次父组件刷新，如果传递给子组件的其他的props值不变，子组件不会刷新
    - 第二种在render中绑定this，bind函数会返回一个新函数，每次父组件刷新时，会重新生成一个函数，即使父组件传递给子组件其他props值不变，子组件每次都会刷新
    - 第三种箭头函数绑定this，父组件刷新，即使两个箭头函数的函数体一样，但是都会生成一个新的箭头函数，子组件每次都会刷新
    - 第四种使用类的静态属性



## 子组件减少渲染

### pure文件夹

1. index.js中引用子组件`Child1`和`Child2`，`Child2`中使用了父组件传递的参数`count`，`Child1`未使用任何父组件参数，父组件修改`count`时，子组件`Child1`也重新渲染了
   1. `count`为简单数据类型
2. 当把`Child1`组件由`Component`改为`PureComponent`时，父组件改变`count`，`Child1`不会重新渲染了
   1. PureComponent会进行浅比较，传递到子组件的数据没有发现改变时，不渲染子组件

```
  // index.js
  import React, { Component } from 'react'
  import Child1 from './child1'
  import Child2 from './child2'

  class PurePage extends Component {
    constructor (props) {
      super(props)
      this.state = {
        count: 0
      }
    }

    handleClick = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    render () {
      console.log('index render')
      return (
        <>
          <p>{`count: ${this.state.count}`}</p>
          <button onClick={this.handleClick}>+</button>
          <Child1 />
          <Child2 count={this.state.count} />
        </>
      )
    }
  }

  export default PurePage

  // child1.js
  import React, { Component, PureComponent } from 'react'

  class Child1Page extends Component {
    render () {
      console.log('child1 render')
      return (
        <>
          <p>child1</p>
        </>
      )
    }
  }

  export default Child1Page

  // child2.js
  import React, { Component } from 'react'

  class Child2Page extends Component {
    render () {
      console.log('child2 render')
      return (
        <>
          <p>{`count: ${this.props.count}`}</p>
        </>
      )
    }
  }

  export default Child2Page


```
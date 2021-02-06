## react ref场景的使用场景及使用方式

### ref主要用来做什么的

- 用来直接操作DOM，来完成一些操作
  - 焦点，选中，动画等

### 两个常见的使用场景

- 获取元素的宽度来完成某些动画
- 获取/失去输入框焦点

### 几种创建方式

- `this.ref1 = ref => {this.refDom = ref}`
- `this.ref2 = React.createRef()`

### React.forwardRef

- 用来操作子组件中的ref对象，ref作为forwardRef函数的第二个参数返回

```
  import React, { Component } from 'react'

  const Child = React.forwardRef((props, ref) => {
    return (
      <input type='text' ref={ref} />
    )
  })

  class Ref extends Component {
    constructor (props) {
      super(props)
      this.ref3 = React.createRef()
    }

    handleFocus = () => {
      console.log(this.ref4)
      this.ref3.current.focus()
    }

    render() {
      return (
        <div>
          <Child ref={this.ref3} />
          <button onClick={() => this.handleFocus()}>获得焦点</button>
        </div>
      )
    }
  }


  export default Ref
```

#### class组件中ref的使用

- 在react16.3之前，ref的绑定方式`<span ref={ref => this.ref2 = ref} onClick={() => this.handleClick1()}>ref class v16.3前版本</span>`
- 在react16.3之后，`<div ref={this.ref1} onClick={() => this.handleClick()}>ref class v16.3后版本</div>`，`this.ref1 = ref => {this.refDom = ref}`

```
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
    }

    handleClick = () => {
      const { offsetWidth } = this.refDom
      console.log('width', offsetWidth)
    }

    handleClick1 = () => {
      const { offsetWidth } = this.ref2
      console.log('width1', offsetWidth)
    }

    render() {
      return (
        <div>
          <div ref={this.ref1} onClick={() => this.handleClick()}>ref class v16.3后版本</div>
          <span ref={ref => this.ref2 = ref} onClick={() => this.handleClick1()}>ref class v16.3前版本</span>
        </div>
      )
    }
  }


  export default Ref
```

#### react hooks中使用ref

```
  import React, { useEffect, useRef } from 'react'

  function ChildInput(props, ref) {
    return (
      <input type="text" ref={ref} />
    )
  }

  const Child = React.forwardRef(ChildInput)

  function RefHooks() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)

    useEffect(() => {
      const width = ref1.current ? ref1.current.offsetWidth : 0
      console.log('width', width, ref1.current)
    }, [ref1.current])

    const handleFocus = () => {
      ref2.current.focus()
    }

    return (
      <div>
        <div ref={ref1}>ref hooks</div>
        <Child ref={ref2} />
        <button onClick={handleFocus}>获得焦点</button>
      </div>
    )
  }

  export default RefHooks
```


### react hooks typescript中使用ref

- useRef的使用`const ref = useRef<any>(null)`

```
  import React, { useEffect, useRef } from 'react'

  function RefTs () {
    const ref = useRef<any>(null)

    useEffect(() => {
      const width = ref.current ? ref.current.offsetWidth : 0
      console.log('width', width)
    }, [ref.current])

    return (
      <div>
        <span ref={ref}>ref typescript</span>
      </div>
    )
  }

  export default RefTs
```
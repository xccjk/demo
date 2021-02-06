# react生命周期

## react各个生命周期及阶段

### 挂载阶段

1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount


### 更新阶段

1. getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

### 卸载阶段

1. componentWillUnmount

### 其他生命周期

#### 错误捕获

1. componentDidCatch


## react每个生命周期的使用

### constructor

1. 初始化state
2. 绑定this

```
  初始化state
  constructor(props) {
    super(props)
    this.state = {
      count: props.count
    }
  }
```

```
  绑定this
  this.handleClick = this.handleClick.bind(this)
```

#### 关于this绑定的几种方式

1. this.handleClick = this.handleClick.bind(this)
2. onClick={this.handleClick.bind()}
3. handleClick = () => {}

- 优缺点
  - 方式1为再构造函数中显示调用bind
  - 方法2在每次调用时都需要进行bind，优势为传参方便
  - 方法3箭头函数自动设置this为当前类

- 使用推荐
  - 方法3 > 方法1 > 方法2

```
  方法1
  constructor() {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this)
  }

  <Button onClick={this.handleClick}>按钮</Button>
```

```
  方法2
  handleClick() {
    console.log(this)
  }

  <Button onClick={this.handleClick.bind(this)}>按钮</Button>
```

```
  方法3
  handleClick = () => {
    console.log(this)
  }

  <Button onClick={this.handleClick}>按钮</Button>
```


### getDerivedStateFromProps

- 在render函数之前调用，用来做第一次初始化组件以及后续的更新过程，接收一个props，返回一个新的state，返回为null时不更新state
- 用来替换componentWillReceiveProps生命周期

### render

- 根据state和props渲染一个react组件
- 禁止的使用方式
  - this.setState更新操作
  - DOM操作
  - 定时器之类
  - ...


### componentDidMount

- 在整个生命周期中只会调用一个
- 在render后调用，此时dom渲染完成，可以做dom操作，动画渲染了
- `推荐在这个生命周期中发送异步请求，获取数据`
  - 在回调函数中进行state数据更新
  - `尽量不要在这个函数中直接调用this.setState更新，会触发一次额外的渲染`
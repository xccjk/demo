# hooks的逻辑复用

## 场景

- 一个页面中，存在多个modal弹窗时，需要定义多个类似visible，onCancel，onOk这样的变量与方法
- 某几个页面的权限验证

## Component实现

- Component是针对组件的抽取
- hoc方式也可以实现组件逻辑的抽取
- 逻辑部分的处理还是需要多次实现，在多个modal的案例中，需要多次实现和定义visible，onCancel，onOk这样的变量和方法

```
  import React, { Component } from 'react'
  import { Modal, Button } from 'antd'

  class ClassPage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        visible1: false,
        visible2: false
      }
    }

    render() {
      return (
        <div>
          <Button type='primary' onClick={() => this.setState({visible1: true})}>按钮1</Button>
          <Button type='primary' onClick={() => this.setState({visible2: true})}>按钮2</Button>
          <Modal
            visible={this.state.visible1}
            onCancel={() => this.setState({visible1: false})}
          >
            modal1
          </Modal>
          <Modal
            visible={this.state.visible2}
            onCancel={() => this.setState({visible2: false})}
          >
            modal2
          </Modal>
        </div>
      )
    }
  }

  export default ClassPage
```

## hooks实现

- hooks方法可以对`逻辑进行抽取`，类似一个通用的处理函数
- 在当前场景下，变量与方法只需要写一次，后续使用直接调用既可

```
  import React, { useCallback, useState } from 'react'
  import { Modal, Button } from 'antd'

  function useTrigger(initialValue = false) {
    const [visible, setVisible] = useState(initialValue)

    const open = useCallback(() => {
      setVisible(true)
    }, [setVisible])

    const close = useCallback(() => {
      setVisible(false)
    }, [setVisible])

    return {
      visible,
      open,
      close
    }
  }

  function HooksPage () {
    const trigger = useTrigger()
    const trigger1 = useTrigger()
    return (
      <div>
        <Button type='primary' onClick={trigger.open}>按钮1</Button>
        <Button type='primary' onClick={trigger1.open}>按钮2</Button>
        <Modal
          visible={trigger.visible}
          onCancel={trigger.close}
        >
          modal1
        </Modal>
        <Modal
          visible={trigger1.visible}
          onCancel={trigger1.close}
        >
          modal2
        </Modal>
      </div>
    )
  }

  export default HooksPage
```

## 总结

- hooks非常适用与对一些通用逻辑，重复度高的场景中使用
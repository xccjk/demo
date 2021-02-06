import React, { Component } from 'react'
import { Modal, Button } from 'antd'

class ClassPage extends  Component {
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
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

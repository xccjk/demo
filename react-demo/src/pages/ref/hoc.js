import React, { useRef } from 'react'

function HOCProps(WrapComponent) {
  function ChildComponent(props) {
    const ref = useRef(null)
    const getRef = () => {
      console.log(111)
    }
    return (
      <WrapComponent ref={ref} {...props} />
    )
  }
  return React.forwardRef((props, ref) => {
    return <ChildComponent {...props} ref={ref} />
  })
}

const Child = HOCProps(<input type='text' />)

function Child1() {
  const ref1 = useRef(null)
  return (
    <Child ref={ref1} />
  )
}

export default Child1
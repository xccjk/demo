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
import React, { useState, useEffect } from 'react'

function InitState(props) {
  const getInitState = () => {
    return props.number
  }

  let [counter, setCounter] = useState(getInitState)
  console.log('initState', counter)
  return (
    <>
      <p>{counter.number}</p>
      <button onClick={() => setCounter({number: counter.number + 1})}>+</button>
      <button onClick={() => setCounter(counter)}>setCounter</button>
    </>
  )
}

function HooksPage() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect')
  }, [count])

  console.log('render')
  return (
    <>
      <p>{`count: ${count}`}</p>
      <InitState {...{ number: 0 }} />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count)}>++</button>
    </>
  )
}

export default HooksPage

import React, { useState } from 'react'
import ErrorBounday from './error'

function Count() {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  if (count === 5) {
    throw new Error('I crashed!')
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>按钮</button>
    </>
  )
}

function Home(props: any) {
  return (
    <ErrorBounday>
      <div>react 16+</div>
      <Count />
    </ErrorBounday>
  )
}

export default Home
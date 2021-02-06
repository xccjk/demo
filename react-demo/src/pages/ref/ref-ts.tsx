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
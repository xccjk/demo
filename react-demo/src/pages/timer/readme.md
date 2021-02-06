## react hooks 实现一个计时器

- endTime对应服务端返回的时间

```
  import React, { useState, useEffect } from 'react'

  const completionFunc = value => {
    if(String(value).length === 1) return `0${value}`
    return value
  }

  function Timer() {
    const [remainTime, setTime] = useState(null)

    useEffect(() => {
      const endTime = 1603165442000
      const time = endTime ? endTime > new Date().getTime() ? endTime - new Date().getTime() : 0 : 0
      const timer = setTimeout(() => {
        setTime(time)
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    }, [remainTime])

    const remainHour = parseInt(remainTime / (60 * 60000)) || '00'
    const remainMinutes = parseInt((remainTime % (60 * 60000)) / 60000) || '00'
    const remainSeconds = parseInt((remainTime % 60000) / 1000) || '00'

    return (
      <h3>{completionFunc(remainHour)}:{completionFunc(remainMinutes)}:{completionFunc(remainSeconds)}</h3>
    )
  }

  export default Timer
```
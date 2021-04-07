import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import jsonData from './json/44373-girl-cycling.json'
import './index.css'

function Lottie() {
  const ele = useRef(null)
  let effectLottie = null

  useEffect(() => {
    effectLottie = lottie.loadAnimation({
      container: ele.current, 
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: jsonData,
    })
  }, [jsonData])

  const handleClickStart = () => {
    effectLottie && effectLottie.play()
  }

  const handleClickStop = () => {
    console.log(111, effectLottie)
    effectLottie && effectLottie.pause()
  }

  

  return (
    <div className='page-lottie'>
      <div ref={ele} id='lottie'></div>
      <button onClick={handleClickStart}>启动</button>
      <button onClick={handleClickStop}>暂停</button>
    </div>
  )
}

export default Lottie
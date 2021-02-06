import React, { useState, useRef } from 'react'
import { Button } from 'antd'

/**
 * 重点
 * 1. 分享的图片资源的跨域问题
 * 2. h5端分享需要以img图片的形式分享，而canvas不支持长按分享
 * 3. 图片需要在onload之后进行绘制canvas，否则可能存在图片未加载完的情况就进行了绘制
 */

function Share() {
  const [url, setUrl] = useState('https://th.bing.com/th/id/R99806cf93f41818e1b492d7b7b37c8e1?rik=khjK%2bmnisnvDNw&riu=http%3a%2f%2fwww.scdongqu.gov.cn%2fuploadfiles%2f201812%2f17%2f2018121711091024292013.jpg&ehk=tILYkgHEgjWAB448%2fzHkmwTX%2b1w7fkvdbPwwM%2fCFc3c%3d&risl=&pid=ImgRaw')
  const ref = useRef(null)

  const getUrlImg = (canvas) =>{   
    let dataImg = new Image()    
    try {
      dataImg.src = canvas.toDataURL('image/png')
    } catch (e) {
      console.log(e)
    }
    let urlImg = dataImg.src //urlImg为img路径
    setUrl(urlImg)
  }

  const shareComponent = ()=>{
    let img = new Image()
    //关键，处理图片跨域问题！！
    img.crossOrigin = 'anonymous'
    //图片加载完后，将其显示在canvas中，图片必须使用onload方式，否则会导致图片未加载完成就完成绘画
    //img为整张分享图
    img.onload = () => {
      let canvas = ref.current //获取canvas元素
      let ctx = canvas.getContext('2d')
        //设置背景色，否则背景色会透明
        ctx.fillStyle='#fff'
        ctx.fillRect(0, 0, 1196, 1596)
        ctx.drawImage(img, 0, 0, 375, 180)
		    //分享字段描述
        ctx.font="14px Arial"
        ctx.fillStyle='#000'
        
		    //分享提示
        ctx.font="12px Arial"
        ctx.fillStyle='#999'
        ctx.fillText('长按小程序码查看详情', 90,340)
		    //分享提示
        ctx.font="12px Arial"
        ctx.fillStyle='#999'
        ctx.fillText('来自小菜菜的分享', 90, 360)
		    //分割线
        ctx.moveTo(300, 300)
        ctx.lineTo(80, 1180)
        ctx.strokeStyle="#E8E8E8"
        ctx.stroke()
        //img1为小程序太阳码
        let img1 = new Image()
        //关键，处理太阳码转化为base64格式图片时的跨域问题
        img1.crossOrigin='anonymous' 
        img1.onload = () => {
        ctx.drawImage(img1, 20, 320, 60, 60)
        getUrlImg(canvas)
      }
      img1.src = 'https://th.bing.com/th/id/Rbf2f6f6cafeecc1c1af1d4fd8282320b?rik=JwaSspacJbY1cQ&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20130307%2f20130307140436-1179792397.jpg&ehk=u0komVl7XE5CG71BSLTZMFprbi5d2AmNdKAmp8WSAjc%3d&risl=&pid=ImgRaw'
	    //边框
      ctx.strokeStyle="#f5f5f5"
      ctx.rect(0, 0, 300,400)
      ctx.stroke()      

    }
    const a = `${url}?timeStamp=` + (new Date())
    img.src = a
  }

  

  return (
    <div>
      <canvas ref={ref} width={300} height={400} />
      <img src={url} />
      <Button onClick={() => shareComponent()}>按钮分享</Button>
    </div>
  )
}

export default Share

import React from 'react'

function HOC(WrapComponent) {
  function ChildComponent(props) {
    const add = (a, b) => {
      return a + b
    }
    const newProps = { type: 'hoc', add }
    return <WrapComponent {...props} {...newProps} />
  }
  return ChildComponent
}

/**
 * 高阶函数实现方式
 * 方式1：属性代理
 * 方式2：反向继承
 */

/**
 * 高阶函数常见使用方式
 * 1：导出函数上面使用@HOC，`@HOC function() {}`
 * 2：导出时使用HOC进行包裹，`export default HOC(HocComponent)`
 * @HOC语法通过es7中decorator来实现的，需要配置babel来兼容才可以使用
 */

/**
 * 高阶函数原理
 * 属性代理方式原理
 * 目的：把常用的逻辑独出来进行多次复用
 * 业务场景：在一个多页H5中，部分页面有查看权限，比如新闻列表，详情，不需要进行任何操作就可以看。但是比如活动抽奖页，如果想参加就需要验证手机号登录
 * 当一些新用户通过分享出去的链接进入活动页时，需要弹出手机号登录验证消息弹窗，同理也有其他的页面需要弹出这个弹窗
 * 常规方式：每个需要弹出弹窗的页面都写一遍逻辑，但是当页面数比较多时，就比较麻烦了，而且代码有很多重复的
 * 采用HOC：编写一个携带弹窗逻辑的高阶函数，在每个需要出现弹窗的页面通过高阶函数包裹一下需要导出的页面组件，即可在页面组件中调用弹窗出现的方法 
 */

/**
 * 高阶组件使用注意事项
 * 1：不要在render方法中使用HOC
 * 2：复制静态方法
 * 3：refs不会被传递
 */

// @HOC
function HocComponent(props) {
  console.log(props) // { type: 'hoc', add: f(){} }
  const { add } = props
  console.log(add(1, 2))
  return (
    <div>HocPage</div>
  )
}

const newHocComponent = HOC(HocComponent)

export default newHocComponent
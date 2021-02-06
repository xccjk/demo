import React, { memo, useCallback, useState } from 'react'

function PageA (props) {
  const { onClick, children } = props
  console.log(111, props)
  return <div onClick={onClick}>{children}</div>
}

function PageB ({ onClick, name }) {
  console.log(222)
  return <div onClick={onClick}>{name}</div>
}

const PageC = memo(PageB)

/**
 * react优化方式
 * 减少render次数
 * 减少计算量
 */

/**
 * 点击事件handleClick1触发时，PageB组件也会重新渲染，当PageB组件比较耗时时，就会造成新能问题
 * PageB组件重新渲染的原因在于每次重新渲染，onClick都会重新定义，即上次的与这次的不一致
 * 思路：通过useCallback包裹onClick来达到缓存的效果，即useCallback的依赖项不变时不重新生成
 * 用过memo方法包裹PageB组件，并且通过useCallback包裹PageB组件的onClick方法
 * memo与PureComponent比较类似，前者是对Function Component的优化，后者是对Class Component的优化，都会对传入组件的数据进行浅比较
 * useCallback则会保证handleClick2不会发生变化
 */

function UseCallback() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const handleClick1 = () => {
    setA(a + 1)
  }

  const handleClick2 = useCallback(() => {
    setB(b + 1)
  }, [b])

  return (
    <>
      <PageA onClick={handleClick1}>{a}</PageA>
      <PageC onClick={handleClick2} name={b} />
    </>
  )
}

export default UseCallback
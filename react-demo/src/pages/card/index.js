import React from 'react'
import './index.css'

function Card() {
  const dataSource = [
    {
      id: 0,
      label: '姓名',
      value: 'xcc'
    },
    {
      id: 1,
      label: '年龄',
      value: '25'
    },
    {
      id: 2,
      label: '性别',
      value: '男'
    }
  ]

  return (
    <div className='content'>
      {dataSource.map((li, index) => {
        return (
          <div key={li.id} className={`card ${index ? 'card-top' : ''}`}>
            <h3>{li.label}</h3>
            <h3>{li.value}</h3>
            <h3>{li.label}</h3>
            <h3>{li.value}</h3>
            <h3>{li.label}</h3>
            <h3>{li.value}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Card

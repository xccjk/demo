import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'

function Ladder() {
  const [dataSource, setDataSource] = useState([
    {name: undefined, age: undefined}
  ])
  const [arr, setArr] = useState([
    {name: undefined, age: undefined}
  ])
  const [form] = Form.useForm()
  
  const handleAdd = i => {
    const data = dataSource.concat([{name: undefined, age: undefined}])
    setDataSource(data)
  }

  const handleDelete = i => {
    const data = dataSource.filter((li, index) => i !== index)
    setDataSource(data)
  }

  const handleChangeName = (value, i) => {
    const data = dataSource.map((li, index) => {
      if (i === index) return { ...li, ...{ name: value } }
      return li
    })
    setDataSource(data)
  }

  const handleChangeAge = (value, i) => {
    const data = dataSource.map((li, index) => {
      if (i === index) return { ...li, ...{ age: value } }
      return li
    })
    setDataSource(data)
  }

  const handleAdd1 = i => {
    const data = arr.concat([{name: undefined, age: undefined}])
    setArr(data)
  }

  const handleDelete1 = i => {
    const data = arr.filter((li, index) => i !== index)
    let obj = {}
    data.map((li, index) => {
      obj[`name${index}`] = li.name
      obj[`age${index}`] = li.name
    })
    form.setFieldsValue(obj)
    setArr(data)
  }

  const handleChangeName1 = (value, i) => {
    const data = arr.map((li, index) => {
      if (i === index) return { ...li, ...{ name: value } }
      return li
    })
    setArr(data)
  }

  const handleChangeAge1 = (value, i) => {
    const data = arr.map((li, index) => {
      if (i === index) return { ...li, ...{ age: value } }
      return li
    })
    setArr(data)
  }
  console.log(111, arr)
  return (
    <div>
      {dataSource.map((li, index) => {
        return (
          <div key={index}>
            <div>
              姓名<input value={li.name} onChange={e => handleChangeName(e.target.value, index)} />
              年龄<input value={li.age} onChange={e => handleChangeAge(e.target.value, index)} />
            </div>
            <button onClick={() => handleAdd(index)}>新增</button>
            <button onClick={() => handleDelete(index)}>删除</button>
          </div>
        )
      })}
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        form={form}
      >
        {
          arr.map((li, index) => {
            return (
              <>
                <Form.Item label='姓名' name={`name${index}`}>
                  <Input value={li.name} onChange={e => handleChangeName1(e.target.value, index)} />
                </Form.Item>
                <Form.Item label='年龄' name={`age${index}`}>
                  <Input value={li.age} onChange={e => handleChangeAge1(e.target.value, index)} />
                </Form.Item>
                <Button onClick={() => handleAdd1(index)}>新增</Button>
                <Button onClick={() => handleDelete1(index)}>删除</Button>
              </>
            )
          })
        }
      </Form>
    </div>
  )
}

export default Ladder
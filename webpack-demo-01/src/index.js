import _ from 'lodash'
import './index.css'
import icon from './icon.png'
import Data from './data.xml'

function component() {
  let element = document.createElement('h2')

  element.innerHTML = _.join(['Hello', 'xcc'], ' ')

  console.log(Data)

  return element
}

const img = new Image()

img.src = icon

document.body.appendChild(component())

document.body.append(img)
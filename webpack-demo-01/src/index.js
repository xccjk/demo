import printMe from './print.js'

function component() {
  let element = document.createElement('h2')

  let btn = document.createElement('button')

  btn.innerHTML = 'click me'

  btn.onclick = printMe

  element.innerHTML = 'Hello xcc'

  element.appendChild(btn)

  return element
}


document.body.appendChild(component())

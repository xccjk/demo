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



let element = component()

document.body.appendChild(element)

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('我是print函数，我被修改了')
    // printMe()
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}



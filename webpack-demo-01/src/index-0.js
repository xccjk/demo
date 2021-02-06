import './style.css'

function render() {
  let div = document.createElement('div')
  div.innerHTML = 'Hello World 2'
  document.body.appendChild(div)
}

render()


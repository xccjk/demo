function component() {
  let element = document.createElement('h2')

  element.innerHTML = _.join(['Hello', 'xcc'], ' ')

  return element
}

document.body.appendChild(component())
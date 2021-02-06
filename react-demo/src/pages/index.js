import React from 'react'

function Router() {
  const routes = [
    'class',
    'hooks',
    'bindThis',
    'pure',
    'card',
    'ladder',
    'timer'
  ]

  const handleGoToPage = url => {
    window.location.href = `#/${url}`
  }

  return (
    <div>
      {
        routes.map(li => {
          return (
            <h3 onClick={() => handleGoToPage(li)}>{li}</h3>
          )
        })
      }
    </div>
  )
}

export default Router
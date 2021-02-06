import React, { Component } from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import routes from './pages/routes'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <>
        <HashRouter>
          <Switch>
            {routes.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  exact
                  render={props => {
                    return <item.component {...props} />
                  }}
                />
              )
            })}
          </Switch>
        </HashRouter>
      </>
    )
  }
}

const mapState = state => ({})

const mapDispatch = ({}) => ({})

export default App

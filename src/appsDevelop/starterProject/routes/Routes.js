import React from 'react'
import { Route, Switch } from 'react-router'
import NavBar from '../containers/NavBar/NavBar'


const NoMatch = () => (
    <div>
        No Match
    </div>
)

const Home = () => (
    <div>
        Home
    </div>
)

const routes = (
    <div>
      <NavBar />
      <Switch>
          <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
)

export default routes
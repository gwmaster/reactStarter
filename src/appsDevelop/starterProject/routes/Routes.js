import React , {Fragment} from 'react'
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
    <Fragment>
      <NavBar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
      </Switch>
    </Fragment>
)

export default routes
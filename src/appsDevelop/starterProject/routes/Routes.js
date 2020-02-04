import React , {Fragment} from 'react'
import { Route, Switch } from 'react-router'
import NavBar from '../containers/NavBar/NavBar'
import Header from '../containers/Header/Header'
import Home  from '../containers/Home/Home'
import {ROUTES} from '../stores/constants'
const {PAGES} = ROUTES

const NoMatch = () => (
    <div>
        No Match
    </div>
)

const routes = (
    <div className="routes-container">
        <div className="nav-bar">
            <NavBar />
        </div>
        <div className="header">
            <Header />
        </div>
        <div className="content">
            <div className='content-card'>
                <Switch>
                    <Route exact path={PAGES.HOME} component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </div>

    </div>
)

export default routes
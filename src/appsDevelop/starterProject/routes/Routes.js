import React , {Fragment} from 'react'
import { Route, Switch } from 'react-router'
import {ROUTES} from '../stores/constants'
import NavBar from '../containers/NavBar/NavBar'
import Header from '../containers/Header/Header'
import Home  from '../containers/Home/Home'
import LocalStorage from "../containers/Develop/LocalStorage/LocalStorage";
import ReducersViewer from "../containers/ReducersViewer/ReducersViewer";
import I18 from '../containers/Develop/i18/I18'
import RestAPI from "../containers/Develop/RestAPI/RestAPI";

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
                    <Route exact path={PAGES.DEVELOP.LOCAL_STORAGE} component={LocalStorage} />
                    <Route exact path={PAGES.DEVELOP.REDUCERS_VIEWER} component={ReducersViewer} />
                    <Route exact path={PAGES.DEVELOP.I18} component={I18} />
                    <Route exact path={PAGES.DEVELOP.REST_API} component={RestAPI} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </div>

    </div>
)

export default routes